import { createSelector } from "reselect";

export const clickButtonState = (state: any) => state.clickButton;

export const getDebugState = createSelector(
  clickButtonState,
  (clickButton) => clickButton.debug
);

export const gameOverState = createSelector(
  clickButtonState,
  (clickButton) => clickButton.gameOver
);

export const isExtendedState = createSelector(
  clickButtonState,
  (clickButton) => clickButton.isExtended
);

export const isCursorGrabbed = createSelector(
  clickButtonState,
  (clickButton) => clickButton.cursorGrabbed
);
