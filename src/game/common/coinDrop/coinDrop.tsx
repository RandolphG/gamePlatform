import React, { useEffect } from "react";
import { TweenMax, Power2, TimelineLite, TweenLite, Bounce } from "gsap";
import { Coins01, Coins02, Coins03, Coins04 } from "./components";
import "./styles/_coinDropStyles.scss";
import { motion } from "framer-motion";

const CoinDrop = () => {
  useEffect(() => {
    let cointween1 = TweenMax.staggerFrom(
      ".coins1",
      0.3,
      {
        y: -100,
        delay: 0,
        ease: Bounce.easeOut,
        opacity: 0,
      }, // @ts-ignore
      0.1
    );

    let cointween2 = TweenMax.staggerFrom(
      ".coins2",
      0.3,
      {
        y: -100,
        delay: 0.5,
        ease: Bounce.easeOut,
        opacity: 0,
      }, // @ts-ignore
      0.2
    );

    let cointween3 = TweenMax.staggerFrom(
      ".coins3",
      0.3,
      {
        y: -100,
        delay: 0.6,
        ease: Bounce.easeOut,
        opacity: 0,
      }, // @ts-ignore
      0.2
    );

    let cointween4 = TweenMax.staggerFrom(
      ".coins4",
      0.2,
      {
        y: -100,
        delay: 0.8,
        ease: Bounce.easeOut,
        opacity: 0,
      }, // @ts-ignore
      0.1
    );

    let coinsShadows = TweenMax.staggerFrom(
      ".st0",
      0.2,
      {
        scale: 0,
        delay: 0.4,
        transformOrigin: "50% 50%",
      }, // @ts-ignore
      0.1
    );
  });

  const coinDropMotionSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div {...coinDropMotionSettings} className="view">
      <div className="coinContainer">
        <svg className="svg-coins" viewBox="0 0 352.4 356.7">
          <path
            className="st0"
            d="M216.6,191.2c-31.3-15.6-81.7-15.6-112.8,0c-31,15.6-30.9,40.8,0.4,56.3c31.2,15.6,81.7,15.6,112.8,0
      C248,232,247.8,206.8,216.6,191.2z"
          />
          <Coins01 />
          <path
            className="st0"
            d="M318.1,255.8c-29.9-15.6-78.1-15.6-107.8,0c-29.7,15.6-29.5,40.8,0.4,56.3c29.9,15.6,78.1,15.6,107.8,0
      C348.2,296.6,348,271.3,318.1,255.8z"
          />
          <path
            className="st0"
            d="M175.6,298.7c-20.7-10.8-54-10.8-74.6,0c-20.5,10.8-20.4,28.2,0.3,39c20.6,10.8,54,10.8,74.5,0
      C196.4,326.9,196.3,309.5,175.6,298.7z"
          />
          <Coins02 />
          <Coins03 />
          <path
            className="st0"
            d="M78.7,233.7c-15.8-8.2-41.4-8.2-57.2,0c-15.7,8.2-15.6,21.6,0.2,29.9c15.8,8.2,41.4,8.2,57.1,0
      C94.6,255.3,94.5,242,78.7,233.7z"
          />
          <Coins04 />
        </svg>
      </div>
    </motion.div>
  );
};

export default CoinDrop;
