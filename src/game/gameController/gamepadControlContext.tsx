import React, { createContext, useState } from "react";

// @ts-ignore
const GamepadsControlsContext = createContext();

const initialState = [
  {
    name: "Player 1",
    controller: {
      id: 0,
      name: "Default Controller",
    },
    controls: {
      confirm: 1,
      cancel: 2,
      up: 3,
      down: 4,
    },
  },
];

const GamepadsControlsProvider = ({ children }: any) => {
  const [state, updateState] = useState(initialState);

  return (
    <GamepadsControlsContext.Provider
      value={{ players: state, updateGlobalControls: updateState }}
    >
      {children}
    </GamepadsControlsContext.Provider>
  );
};

export { GamepadsControlsProvider, GamepadsControlsContext };
