import { motion } from "framer-motion";
import React from "react";

const PercentageStats = ({ variants }: any) => (
  <motion.div
    variants={variants}
    className="profileInfo_container_percentageStats"
  >
    <div className="profileInfo_container_percentageStats_allGames">
      <span className="profileInfo_container_percentageStats_allGames__label">
        ALL GAMES
      </span>
      <span className="profileInfo_container_percentageStats_allGames__number">
        398
      </span>
    </div>
    <div className="profileInfo_container_percentageStats_loseRate">
      <span className="profileInfo_container_percentageStats_loseRate__label">
        LOSE RATE
      </span>
      <span className="profileInfo_container_percentageStats_loseRate__number">
        4.4%
      </span>
    </div>
    <div className="profileInfo_container_percentageStats_winRate">
      <span className="profileInfo_container_percentageStats_winRate__label">
        WIN RATE
      </span>
      <span className="profileInfo_container_percentageStats_winRate__number">
        95.6%
      </span>
    </div>
  </motion.div>
);

export default PercentageStats;
