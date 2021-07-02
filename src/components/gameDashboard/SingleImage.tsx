import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "./images";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  initial: { y: "50%", opacity: 0, transition },
  animate: {
    y: "0%",
    opacity: 1,
    transition,
  },
  exit: { y: "50%", opacity: 0, transition },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition },
};

export const SingleImage = ({ match }: any) => (
  <motion.div
    key={`image-${match}`}
    className="single"
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <div className="singleContainer">
      <div className="singlePreview">
        <motion.img
          variants={imageVariants}
          src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${
            images[parseInt(match.params.id, 10)]
          }.jpg?format=1500w`}
          alt="images"
        />
      </div>
      <div className="singleDescription">
        <motion.div className="back" variants={backVariants}>
          <Link to="/">← Back</Link>
        </motion.div>
      </div>
    </div>
  </motion.div>
);
