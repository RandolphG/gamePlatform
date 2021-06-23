import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameOverState, isCursorGrabbed, setState } from "../../store";
import { useHover } from "../hooks";

export type state = "waiting" | "stalking" | "grabbing" | "grabbed" | "shaka";

export const useGrabZone = () => {
  const dispatch = useDispatch();
  const cursorGrabbed = useSelector(isCursorGrabbed);
  const gameOver = useSelector(gameOverState);
  const [outerRef, outerHovered] = useHover();
  const [innerRef, innerHovered] = useHover();
  const [isExtended, setExtendedArm] = useState(false);

  let state: state = "waiting";
  console.log(`\nstate :`, state);
  console.log(`outerRef -->`, outerRef);
  console.log(`innerRef -->`, innerRef);

  /* If state is grabbing for a long time, they're being clever! */
  useEffect(() => {
    console.log(`\nuseEffect --->`);

    if (outerHovered) {
      console.log(`outerHovered`);
      dispatch(setState({ currentState: "stalking" }));
      state = "stalking";
    }
    if (innerHovered) {
      console.log(`innerHovered`);
      dispatch(setState({ currentState: "grabbing" }));
      state = "grabbing";
    }
    if (cursorGrabbed) {
      console.log(`cursorGrabbed`);
      dispatch(setState({ currentState: "grabbed" }));
      state = "grabbed";
    }
    if (gameOver) {
      console.log(`gameOver`);
      dispatch(setState({ currentState: "shaka" }));
      state = "shaka";
    }
    let timer: any;

    if (state === "grabbing") {
      timer = setTimeout(() => {
        /* Not so clever now, are they? */
        setExtendedArm(true);
        timer = null;
      }, 2000);
    }

    return () => {
      console.log(`returned`);

      setExtendedArm(false);
      if (timer) {
        console.log(`timer cleared!`);
        clearTimeout(timer);
      }
    };
  }, [state]);

  return {
    outerRef,
    innerRef,
    isExtended,
    state,
  };
};
