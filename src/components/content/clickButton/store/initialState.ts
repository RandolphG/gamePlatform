export const initialState = {
  debug: false,
  position: { x: 0, y: 0 },
  ref: null,
  hovered: false,
  state: "waiting",
  gameOver: false,
  extended: false,
  rotation: 0,
  innerRef: {
    hovered: false,
  },
  outerRef: {
    hovered: false,
  },
  cursorGrabbed: false,
};
