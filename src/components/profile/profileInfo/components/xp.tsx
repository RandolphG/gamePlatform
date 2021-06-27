import React from "react";

const Xp = () => (
  <div className="profileInfo_container_xp">
    <div className="profileInfo_container_xp_bar">
      <span className="profileInfo_container_xp_bar_top">
        <span className="profileInfo_container_xp_bar_top__number">7</span>
      </span>
      <span className="profileInfo_container_xp_bar_bottom">
        <span className="profileInfo_container_xp_bar_bottom__number">8</span>
      </span>
    </div>
    <div className="profileInfo_container_xp_details">
      <div className="profileInfo_container_xp_details_currentXp">
        <span className="profileInfo_container_xp_details_currentXp__from">
          XP 768
        </span>
        <span className="profileInfo_container_xp_details_currentXp__to">
          /800
        </span>
      </div>
      <div className="profileInfo_container_xp_level-up">
        <span className="profileInfo_container_xp_levelUp__from">32 XP</span>
        <span className="profileInfo_container_xp_levelUp__to">
          to level Up
        </span>
      </div>
    </div>
  </div>
);

export default Xp;
