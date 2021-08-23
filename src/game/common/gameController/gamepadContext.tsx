import React, { createContext, useEffect, useRef, useState } from "react";

import { useInterval } from "./useInterval";

// @ts-ignore
const GamepadsContext = createContext();

const GamepadsProvider = ({ children }: any) => {
  const [gamepads, setGamepads] = useState({});
  const [updateGlobalGamepads] = useState({});
  const requestRef = useRef();
  const haveEvents = "ongamepadconnected" in window;

  const addGamepad = (gamepad: any) => {
    /*
    console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gamepad.index,
      gamepad.id,
      gamepad.buttons.length,
      gamepad.axes.length
    ); */
    // @ts-ignore
    updateGlobalGamepads({
      ...gamepads,
      [gamepad.index]: {
        buttons: gamepad.buttons,
        id: gamepad.id,
        axes: gamepad.axes,
      },
    });

    setGamepads({
      ...gamepads,
      [gamepad.index]: {
        buttons: gamepad.buttons,
        id: gamepad.id,
        axes: gamepad.axes,
      },
    });

    // Handle controller input before render
    // requestAnimationFrame(updateStatus);
  };

  /**
   * Adds gameSettings controllers during connection event listener
   * @param {object} e
   */
  const connectGamepadHandler = (e: any) => {
    addGamepad(e.gamepad);

    // console.log("connecting gamepads", e, e.gamepad);
  };

  /**
   * Finds all gamepads and adds them to context
   */
  const scanGamepads = () => {
    // Grab gamepads from browser API
    const detectedGamepads = navigator.getGamepads
      ? navigator.getGamepads()
      : // @ts-ignore
      navigator.webkitGetGamepads
      ? // @ts-ignore
        navigator.webkitGetGamepads()
      : [];

    // Loop through all detected controllers and add if not already in state
    for (let i = 0; i < detectedGamepads.length; i++) {
      if (detectedGamepads[i]) {
        addGamepad(detectedGamepads[i]);
      }
    }
  };

  // Add event listener for gamepad connecting
  useEffect(() => {
    window.addEventListener("gamepadconnected", connectGamepadHandler);

    return window.removeEventListener(
      "gamepadconnected",
      connectGamepadHandler
    );
  });

  // Update each gamepad's status on each "tick"
  const animate = (time: any) => {
    if (!haveEvents) {
      scanGamepads();
    }

    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);

    // @ts-ignore
    return () => cancelAnimationFrame(requestRef.current);
  });

  // Check for new gamepads regularly
  useInterval(() => {
    if (!haveEvents) {
      scanGamepads();
    }
  }, 1000);

  // console.log("component rendering", gamepads);

  return (
    <GamepadsContext.Provider value={{ gamepads, setGamepads }}>
      {children}
    </GamepadsContext.Provider>
  );
};

export { GamepadsProvider, GamepadsContext };
