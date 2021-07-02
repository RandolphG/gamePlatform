import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imageVariants, transition } from "./motionSettings";

const screens = [
  {
    title: "Dashboard",
    color: "black",
    link: "/gameDashboard/",
  },
  {
    title: "Profile",
    color: "black",
    link: "/gameDashboard/profile",
  },
];

export const MainLinks = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mainLinks">
      <AnimateSharedLayout>
        <ol className="olStyle" style={{ transform: "translateZ(0)" }}>
          {screens.map(({ title, color, link }, i) => (
            <motion.li
              key={i}
              className={`navTitle ${i === selected && "Selected"}`}
              style={{ color: i === selected ? color : "#333" }}
              onClick={() => setSelected(i)}
              animate
            >
              {i === selected && (
                <motion.div
                  layoutId="underline"
                  className="underline"
                  style={{ backgroundColor: color }}
                />
              )}
              <Link to={link}>{title} </Link>
            </motion.li>
          ))}
        </ol>
      </AnimateSharedLayout>
    </div>
  );
};
