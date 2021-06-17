/*@ts-nocheck*/
import React from "react";
import { GrabZone } from "./components";
import { useClickButton } from "./useClickButton";
import "./styles/_clickButtonStyles.scss";

export const ClickButton = () => {
  const {
    cursorGrabbed,
    gameOver,
    handleCursorGrabbed,
    handleButtonClicked,
    handleToggleDebug,
    screenStyle,
    appClass,
  } = useClickButton();

  return (
    <div className={appClass} style={screenStyle}>
      <section className="containerButton">
        <p>
          Feel free to browse, relax and, I don't know, click the button down
          there? Might as well, right?
        </p>

        <button className="debug-button" onClick={handleToggleDebug}>
          Debug
        </button>
      </section>

      <button
        className="trap-button"
        onClick={() => {
          handleButtonClicked();
        }}
      >
        {gameOver && "Nice one"}
        {cursorGrabbed && "Gotcha!"}
        {!gameOver && !cursorGrabbed && "Button!"}
      </button>
      <div className="grab-zone-wrapper">
        {/*@ts-ignore*/}
        <GrabZone onCursorGrabbed={handleCursorGrabbed} />
      </div>
    </div>
  );
};
