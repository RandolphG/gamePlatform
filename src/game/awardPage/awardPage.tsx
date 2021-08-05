import React from "react";
import "./styles/_awardPageStyles.scss";
import { motion } from "framer-motion";

const AwardPage = () => {
  const awardPageMotionSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  return (
    <div className="award">
      <motion.div {...awardPageMotionSettings} className="purse">
        <div className="coin">
          <div className="front" />
          <div className="back" />
          <div className="side">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
              <div className="spoke" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AwardPage;
