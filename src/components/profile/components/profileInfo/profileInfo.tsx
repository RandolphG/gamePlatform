import { motion, useCycle } from "framer-motion";
import React from "react";
import { Badges } from "../../../common";
import {
  GamePlayStats,
  Level,
  PercentageStats,
  PlayerImg,
  PlayerStatus,
  Rank,
  Xp,
  Title,
} from "./components";

const variants = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const profileInfoVariants = {
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const ProfileInfo = ({ imageFile }: any) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      key="profileInfo"
      className="profileInfo"
    >
      {/*<Title />*/}
      <motion.div
        variants={profileInfoVariants}
        className="profileInfo_container"
      >
        <motion.div
          variants={variants}
          className="profileInfo_container_avatarSection"
        >
          <Rank />
          <span className="profileInfo_container_avatarSection_imageSection">
            <PlayerImg imageFile={imageFile} />
            <Level />
          </span>
        </motion.div>
        <PlayerStatus variants={variants} />
        <Xp variants={variants} />
        <PercentageStats variants={variants} />
        <GamePlayStats variants={variants} />
        <Badges variants={variants} />
      </motion.div>
    </motion.div>
  );
};

export default ProfileInfo;
