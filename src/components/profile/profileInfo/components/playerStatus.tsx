import { motion } from "framer-motion";
import React from "react";

const PlayerStatus = ({ variants }: any) => (
  <motion.div
    variants={variants}
    className="profileInfo_container_playerStatus"
  >
    <span className="profileInfo_container_playerStatus__text">
      online status
    </span>
    <span className="profileInfo_container_playerStatus__data">
      2 hours ago
    </span>
  </motion.div>
);

export default PlayerStatus;
