import React from "react";

const Badges = () => {
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
    <div className="profileInfo_container_badges">
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
    </div>
  );
};

export default Badges;
