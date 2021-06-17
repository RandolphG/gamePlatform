import React from "react";
import { ASSETS } from "../../utils";
import { state } from "../grabZone/grabZone";
import { useGrabber } from "./useGrabber";

/**
 * Grabber (The graphic)
 * @param state
 * @param gameOver
 * @param extended
 * @param onCursorGrabbed
 * @constructor
 */
export const Grabber = (
  state: state,
  gameOver: boolean,
  extended: boolean,
  onCursorGrabbed: () => void
) => {
  const { grabberClass, handImageSrc, ref, wrapperStyle } = useGrabber(
    state,
    gameOver,
    extended
  );

  return (
    <div className={grabberClass}>
      <div className="grabber__body" />
      <img className="grabber__face" src={ASSETS.head} alt="grabber__face" />
      {/*@ts-ignore*/}
      <div className="grabber__arm-wrapper" ref={ref} style={wrapperStyle}>
        <div className="grabber__arm">
          <img
            className="grabber__hand"
            src={handImageSrc}
            onMouseEnter={onCursorGrabbed}
            alt="grabber__hand"
          />
        </div>
      </div>
    </div>
  );
};
