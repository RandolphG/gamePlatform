import React from "react";
import "./styles/_coinStyles.scss";

const Coin = () => {
  return (
    <div className="coin">
      <div className="front jump">
        <div className="star" />
        <span className="currency">$</span>
        <div className="shapes">
          {/*<span className="top">Gold</span>*/}
          {/*<span className="bottom">Coin</span>*/}
        </div>
      </div>
      <div className="shadow" />
    </div>
  );
};

export default Coin;
