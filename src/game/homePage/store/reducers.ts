import { PayloadAction } from "@reduxjs/toolkit";

export interface ISetCoins {
  coins: number;
}

export const reducers = {
  setCoins: (state: any, action: PayloadAction<ISetCoins>) => {
    const { coins } = action.payload;
    return { ...state, coins };
  },
  setActiveRoute: (
    state: any,
    action: PayloadAction<{ activeRoute: number }>
  ) => {
    const { activeRoute } = action.payload;
    return { ...state, activeRoute };
  },
};
