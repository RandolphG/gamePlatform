import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { clamp } from "@popmotion/popcorn";
import { PreviewImage } from "./previewImage";

function useScrollConstraints(ref: any) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const element = ref.current;
    const viewportHeight = element.offsetHeight;
    const contentHeight = element.firstChild.offsetHeight;

    setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
  }, []);

  return constraints;
}

const SidePreview = () => {
  const y = useMotionValue(0);
  const ref = useRef(null);

  const { top, bottom } = useScrollConstraints(ref);

  function handleWheel(event: any) {
    event.preventDefault();
    const newY = y.get() - event.deltaY;
    const clampedY = clamp(top, bottom, newY);
    y.stop();
    y.set(clampedY);
  }

  return (
    <div className="preview">
      <div className="previewContainer" ref={ref} onWheel={handleWheel}>
        <motion.div
          drag="y"
          dragConstraints={{ top, bottom }}
          className="scrollable"
          style={{ y }}
        >
          {[0, 1, 2, 3, 4].map((img, idx) => (
            <PreviewImage key={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SidePreview;
