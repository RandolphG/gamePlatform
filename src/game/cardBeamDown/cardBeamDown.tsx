import React, { useEffect } from "react";
import "./styles/_cardBeamStyles.scss";
import { VictorySvg } from "./components";
import { AwardPage } from "../awardPage";
import { AnimatePresence } from "framer-motion";
import { CardStar } from "./components/cardStar";
import { Pyro } from "./components/pyro";
import { Debris } from "./components/debris";

const CardBeamDown = () => {
  let count = 0;

  function onclick() {
    let beamcards = document.querySelectorAll(".beamcard");
    count++;

    if (count >= beamcards.length) {
      count = 0;
      beamcards.forEach((el) =>
        window.setTimeout(function () {
          el.classList.remove("active");
        }, 1)
      );
    }

    let beamcard = beamcards[count];

    beamcard.classList.remove("active");

    window.setTimeout(function () {
      beamcard.classList.add("active");
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
