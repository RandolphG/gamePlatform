import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./styles/_settingsStyles.scss";
import { Button, CheckBox } from "../common";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Settings = ({ showModal, setShowModal }: any) => {
  const Buttons = () => (
    <div className="buttons">
      <Button title="기분" />
      <Button title="게임" />
      <Button title="정보" />
    </div>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          // onClick={() => setShowModal(false)}
        >
          <motion.div className="modal" variants={modal}>
            <Buttons />
            <CheckBox />
          </motion.div>
          <div className="sectionA">Section</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
