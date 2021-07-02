import { motion } from "framer-motion";
import React, { Fragment } from "react";
import treasure from "../../profile/assets/treasurer.png";
import "./style/_badgesStyles.scss";

const Badges = ({ variants }: any) => {
  const badges = [
    { name: "Fast" },
    { name: "Kills" },
    { name: "Perfect" },
    { name: "Determined" },
  ];

  const pizzaBadges = [
    {
      name: "Top Player",
      src: treasure,
    },
    {
      name: "Perfect",
      src: treasure,
    },
    {
      name: "Determined",
      src: treasure,
    },
  ];

  const Label = () => (
    <span className="profileInfo_container_badges__title">
      Achievements (5)
    </span>
  );

  const Badge = () => (
    <Fragment>
      {pizzaBadges &&
        pizzaBadges.map(({ name, src }, idx) => (
          <div key={idx} className="food-card">
            <div className="food-card__image">
              <img src={src} alt="Coffee" />
            </div>

            <div className="food-card_details">
              <div className="food-card_details__name">{name}</div>
              <div className="food-card_details_rating">
                <div className="food-card_details_rating_star food-card__star--gold" />
                <div className="food-card_details_rating_star food-card__star--gold" />
                <div className="food-card_details_rating_star" />
                <div className="food-card_details_rating_star" />
              </div>
            </div>
          </div>
        ))}
    </Fragment>
  );

  return (
    <motion.div variants={variants} className="profileInfo_container_badges">
      <Label />
      <div className="profileInfo_container_badges_element">
        <Badge />
      </div>
    </motion.div>
  );
};

export default Badges;
