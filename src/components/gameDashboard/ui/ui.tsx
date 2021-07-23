import React from "react";
import "./styles/_uiStyles.scss";

const UI = () => {
  return (
    <div className="carouselUI">
      <div className="topUI">
        <div className="keys">x2412 +</div>
        <div className="coins">2,412,132 +</div>
        <div className="ruby">240 +</div>
        <div className="medallion">792/1000</div>
        <div className="medallion">treasure</div>
        <div className="medallion">message</div>
        <div className="medallion">settings</div>
      </div>

      <div className="countDownUI">count Down</div>
      <div className="bottomUI">
        <div className="heroes">heroes</div>
        <div className="quests">quests</div>
        <div className="content">content</div>
        <div className="shop">shop</div>
      </div>
    </div>
  );
};

export default UI;
