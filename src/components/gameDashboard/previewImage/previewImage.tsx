import React from "react";
import { motion } from "framer-motion";
import { PreviewImageViewModel } from "./previewImageViewModel";

const PreviewImage = () => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    rotateY,
    rotateX,
    filter,
    x,
    y,
  } = PreviewImageViewModel();

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "purple",
        width: 400,
        cursor: "pointer",
        marginBottom: "1rem",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: 200,
          borderRadius: "1rem",
          rotateX,
          rotateY,
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          background: "linear-gradient(180deg, #0CF 0%, #86F 100%)",
        }}
      >
        <motion.svg
          style={{
            x,
            y,
            filter,
          }}
          width="256"
          height="256"
        >
          <path
            d="M113.14 26.767c4.175-6.958 14.86-3.998 14.86 4.116v50.784a7 7 0 007 7h78.87c6.219 0 10.06 6.783 6.86 12.116l-77.87 129.784c-4.175 6.957-14.86 3.998-14.86-4.116v-50.784a7 7 0 00-7-7H42.13c-6.219 0-10.06-6.784-6.86-12.116z"
            fill="#FFF"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default PreviewImage;
