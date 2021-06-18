import React, { useEffect } from "react";
import { Engine } from "./game/Engine";
import "./styles/_propelManStyles.scss";

const PropelMan = () => {
  let game;
  const Instruction = () => (
    <div className="instructions">
      You are <em>PropelMan!</em>
      <br />
      <em>Click</em> to propel yourself in the air by using your grenade
      launcher.
      <br />
      When airborne, <em>click again in front of walls</em> to bounce further
      and further.
      <br />
      The longer you can go without touching the ground,{" "}
      <em>the more points you get.</em>
      <br />
    </div>
  );

  const GameCanvas = () => (
    <canvas className="canvas" id="game" width="640" height="360"></canvas>
  );

  const HighScoreHud = () => (
    <div className="hud-highscore">
      <div id="highscore" className="hud-counter">
        0
      </div>
      <div className="hud-caption">Highscore</div>
    </div>
  );

  const HudScore = () => (
    <div className="hud-score">
      <div id="score" className="hud-counter">
        0
      </div>
      <div className="hud-caption">Score</div>
    </div>
  );

  const HudJump = () => (
    <div className="hud-jumps">
      <div id="jumps" className="hud-counter">
        0
      </div>
      <div className="hud-caption">Jump Combo</div>
    </div>
  );

  useEffect(() => {
    game = new Engine();
    game.init();
  }, []);

  return (
    <div className="propelManContainer">
      <div className="wrap">
        <div className="screen title" id="title">
          <h1>PropelMan</h1>
          <p>Click to start</p>
        </div>
        <GameCanvas />
        <div className="screen hud">
          <HudJump />
          <HudScore />
          <HighScoreHud />
          <div id="increase" />
          <div id="newhighscore">New Highscore!</div>
        </div>

        <Instruction />
      </div>
    </div>
  );
};

export default PropelMan;
