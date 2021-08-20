import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import 내정보 from "../../assets/elements/내정보.png";
import HomePageViewModel from "../../homePageView.Model";

const MyInfo = () => {
  const { 내정보MotionSettings, show, onClose } = HomePageViewModel();
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          {...내정보MotionSettings}
          className="myInfo"
          onClick={onClose}
        >
          <img className="내정보" src={내정보} alt="내정보" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MyInfo;
