export const reducers = {
  setCursorGrabbed: (state: any, action: any) => {
    const { cursorGrabbed } = action.payload

    return { ...state, cursorGrabbed }
  },
  setDebugState: (state: any, action: any) => {
    const { debug } = action.payload

    return { ...state, debug }
  },
  setState: (state: any, action: any) => {
    const { currentState } = action.payload

    return { ...state, state: currentState }
  },
  setRotation: (state: any, action: any) => {
    const { rotation } = action.payload

    return { ...state, rotation }
  },
  setExtendedArm: (state: any, action: any) => {
    const { isExtended } = action.payload

    return { ...state, isExtended }
  },
  setInnerHovered: (state: any) => {
    return {
      ...state,
      innerRef: {
        ...state.innerRef,
        hovered: true,
      },
    }
  },
  removeInnerHovered: (state: any) => {
    return {
      ...state,
      innerRef: {
        ...state.innerRef,
        hovered: false,
      },
    }
  },
  setGameOver: (state: any, action: any) => {
    const { gameOver } = action.payload
    return {
      ...state,
      gameOver,
    }
  },
}
