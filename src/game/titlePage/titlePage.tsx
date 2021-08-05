import React from "react";
import { Link } from "react-router-dom";
import "./styles/_titlePageStyles.scss";

const TitlePage = () => {
  return (
    <div className="titlePage">
      <div className="titlePage_Container">
        <div className="titlePage_Container__title">GAME TITLE</div>
        <Link to="/homePage">
          <div className="titlePage_Container__button">GO PLAY</div>
        </Link>
      </div>
    </div>
  );
};

export default TitlePage;
