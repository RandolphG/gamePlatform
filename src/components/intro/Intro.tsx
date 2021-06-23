import React from "react";
import { motion } from "framer-motion";
import { LoginLayout } from "./components/loginLayout";
import {
  ArrowBtnSelect,
  DownArrow,
  Images,
  IntroMessage,
  LowerSection,
  UpperSection,
} from "./components";
import "./styles/_scrollIntro.scss";
import { scrollIntro } from "./motionSettings";
import { viewBox } from "./assets";
import { IntroViewModel } from "./introViewModel";

const Intro = () => {
  const { show, onMouseEnter, onMouseLeave, onClick } = IntroViewModel();

  const FromTheMountains = () => (
    <svg {...viewBox}>
      {UpperSection()}
      {Images()}
      {IntroMessage()}
      {DownArrow()}
      {LowerSection()}
      {ArrowBtnSelect({ onMouseLeave, onClick, onMouseEnter })}
    </svg>
  );

  return (
    <motion.div {...scrollIntro} className="scrollIntro">
      <div className="main">
        {show && <LoginLayout />}
        {FromTheMountains()}
      </div>
    </motion.div>
  );
};

export default Intro;
