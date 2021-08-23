import { useEffect, useRef } from "react";

export default function useGamepads(callback: any) {
  const gamepads = useRef({});
  const requestRef = useRef();

  let haveEvents = "ongamepadconnected" in window;

  const addGamepad = (gamepad: any) => {
    /*console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gamepad.index,
      gamepad.id,
      gamepad.buttons.length,
      gamepad.axes.length
    );*/

    gamepads.current = {
      ...gamepads.current,
      [gamepad.index]: {
        buttons: gamepad.buttons,
        id: gamepad.id,
        axes: gamepad.axes,
      },
    };

    /* Send data to external callback (like React state) */
    callback(gamepads.current);

    /* Handle controller input before render*/
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
    let detectedGamepads = navigator.getGamepads
      ? navigator.getGamepads()
      : // @ts-ignore
      navigator.webkitGetGamepads
      ? // @ts-ignore
        navigator.webkitGetGamepads()
      : [];

    /* Loop through all detected controllers and add if not already in state */
    for (let i = 0; i < detectedGamepads.length; i++) {
      if (detectedGamepads[i]) {
        addGamepad(detectedGamepads[i]);
      }
    }
  };

  /* Add event listener for gamepad connecting */
  useEffect(() => {
    window.addEventListener("gamepadconnected", connectGamepadHandler);
    return window.removeEventListener(
      "gamepadconnected",
      connectGamepadHandler
    );
  });

  /* Update each gamepad's status on each "tick" */
  const animate = (time: number) => {
    if (!haveEvents) scanGamepads();
    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);
    // @ts-ignore
    return () => cancelAnimationFrame(requestRef.current);
  });

  return gamepads.current;
}
