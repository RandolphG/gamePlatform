import { motion } from "framer-motion";
import React from "react";

const Badges = ({ variants }: any) => {
  const badges = [
    { name: "Fast" },
    { name: "Kills" },
    { name: "Perfect" },
    { name: "Determined" },
  ];

  const Label = () => (
    <span className="profileInfo_container_badges__title">
      Achievements (5)
    </span>
  );

  return (
    <motion.div variants={variants} className="profileInfo_container_badges">
      <Label />
      <div className="profileInfo_container_badges_element">
        {badges &&
          badges.map(({ name }, idx) => (
            <div
              key={idx}
              className="profileInfo_container_badges_element__badge"
            >
              {name}
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default Badges;
