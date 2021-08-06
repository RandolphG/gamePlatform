import React from "react";
import { AnimatePresence } from "framer-motion";
import { VictorySvg, Pyro, CardStar, Debris } from "./components";
import { AwardPage } from "../awardPage";
import "./styles/_cardBeamStyles.scss";

const CardBeamDown = () => {
  let count = 0;

  function onclick() {
    let beamCards = document.querySelectorAll(".beamcard");
    count++;

    if (count >= beamCards.length) {
      count = 0;
      beamCards.forEach((el) =>
        window.setTimeout(function () {
          el.classList.remove("active");
        }, 1)
      );
    }

    let beamCard = beamCards[count];

    beamCard.classList.remove("active");

    window.setTimeout(function () {
      beamCard.classList.add("active");
    }, 50);
  }

  const Cards = () => (
    <>
      <div key="card-first" className="beamcard active">
        <div className="back" />
        <div className="ground" />
        <div className="beam" />
        <Debris />
        <Pyro />
        <CardStar />
      </div>
      {[0, 1].map((card, idx) => (
        <div key={`card-index-${idx}`} className="beamcard">
          <div className="back" />
          <div className="ground" />
          <div className="beam" />
          <Debris />
          <Pyro />
          <CardStar />
        </div>
      ))}
    </>
  );

  const Button = () => (
    <button className="animationButton" onClick={onclick}>
      Animation trigger
    </button>
  );

  const Header = () => (
    <div id="header">
      <VictorySvg />
    </div>
  );

  const Content = () => (
    <AnimatePresence>
      <div className="parent">
        <AwardPage />
        <Cards />
      </div>
    </AnimatePresence>
  );

  return (
    <div className="victory">
      <Header />
      <Content />
      <Button />
    </div>
  );
};

export default CardBeamDown;
