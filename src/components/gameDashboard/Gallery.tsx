import { easeInOut } from "popmotion";
import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GallerViewModel } from "./galleryViewModel";
import { images } from "./images";
import {
  frameVariants,
  imageVariants,
  thumbnailVariants,
  transition,
} from "./motionSettings";
import SidePreview from "./sidePreview";

const Thumbnails = ({
  children,
  startDragging,
  stopDragging,
  dragging,
  draggableArea,
}: any) => (
  <motion.div
    className="thumbnails"
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    onMouseDown={startDragging}
    onMouseUp={stopDragging}
    onMouseLeave={stopDragging}
    onMouseMove={dragging}
    ref={draggableArea}
  >
    {children}
  </motion.div>
);

const Thumbnail = ({ id, i }: any) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/gameDashboard/image/${i}`}>
        <figure>
          <motion.img
            src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${id}.jpg?format=1500w`}
            alt="The Barbican"
            variants={imageVariants}
            transition={transition}
          />
          <figcaption>
            <p>the chase is on..</p>
          </figcaption>
        </figure>
      </Link>
    </motion.div>
  </motion.div>
);

const gameDashboardMotionSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0, transition: { duration: 2 } },
};

const gameLoungeTitleMotionSettings = {
  initial: { y: 25, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, duration: 1, ease: easeInOut },
  },
  exit: { y: 25, opacity: 0, transition: { duration: 1 } },
};

export const Gallery = () => {
  const { draggableArea, startDragging, stopDragging, dragging } =
    GallerViewModel();
  return (
    <motion.div
      {...gameDashboardMotionSettings}
      key="gameDashboardContainer"
      className="gameDashboardContainer"
    >
      <div className="gallery">
        <motion.div
          {...gameLoungeTitleMotionSettings}
          className="gameLoungeTitle"
        >
          GameLounge
        </motion.div>
        <Thumbnails
          startDragging={startDragging}
          stopDragging={stopDragging}
          dragging={dragging}
          draggableArea={draggableArea}
        >
          {images.map((id, i) => (
            <Thumbnail key={id} id={id} i={i} />
          ))}
        </Thumbnails>
      </div>
      <SidePreview />
    </motion.div>
  );
};
