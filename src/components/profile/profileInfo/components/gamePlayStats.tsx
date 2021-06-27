import React from "react";

const GamePlayStats = () => (
  <div className="profileInfo_container_gamePlayStats">
    <div className="profileInfo_container_gamePlayStats_wins">
      <span className="profileInfo_container_gamePlayStats_wins__label">
        WINS
      </span>
      <span className="profileInfo_container_gamePlayStats_wins__number">
        #77
      </span>
    </div>
    <div className="profileInfo_container_gamePlayStats_ties">
      <span className="profileInfo_container_gamePlayStats_ties__label">
        TIES
      </span>
      <span className="profileInfo_container_gamePlayStats_ties__number">
        #21
      </span>
    </div>
    <div className="profileInfo_container_gamePlayStats_loses">
      <span className="profileInfo_container_gamePlayStats_loses__label">
        LOSES
      </span>
      <span className="profileInfo_container_gamePlayStats_loses__number">
        #77
      </span>
    </div>
  </div>
);

export default GamePlayStats;
