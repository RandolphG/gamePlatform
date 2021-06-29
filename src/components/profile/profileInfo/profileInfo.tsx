import { motion, useCycle } from "framer-motion";
import React from "react";
import {
  Badges,
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
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const profileInfoVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const ProfileInfo = ({ imageFile }: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  function onClick() {
    toggleOpen();
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      key="profileInfo"
      className="profileInfo"
    >
      <Title onClick={onClick} />
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
