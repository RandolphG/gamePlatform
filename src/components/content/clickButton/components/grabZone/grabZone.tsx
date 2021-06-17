import React from "react";
import { Grabber } from "../grabber";
import { useGrabZone } from "./useGrabZone";

export type state = "waiting" | "stalking" | "grabbing" | "grabbed" | "shaka";

/**
 * GrabZone (The hover trigger zone)
 * @param cursorGrabbed
 * @param gameOver
 * @param onCursorGrabbed
 * @constructor
 */
export const GrabZone = (
  cursorGrabbed: boolean,
  gameOver: any,
  onCursorGrabbed: () => void
) => {
  console.log(`grabZone : gameOver`, gameOver);
  const { isExtended, innerRef, outerRef, state } = useGrabZone();

  return (
    <>
      {/*@ts-ignore*/}
      <div className="grab-zone" ref={outerRef}>
        <div className="grab-zone__debug">
          <strong>Debug info:</strong>
          <p>Current state: {state}</p>
          <p>Extended arm: {isExtended ? "Yes" : "No"}</p>
        </div>
        {/*@ts-ignore*/}
        <div className="grab-zone__danger" ref={innerRef}>
          {/*@ts-ignore*/}
          <Grabber
            state={state}
            gameOver={gameOver}
            extended={isExtended}
            onCursorGrabbed={onCursorGrabbed}
          />
        </div>
      </div>
    </>
  );
};
