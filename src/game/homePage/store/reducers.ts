import { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
  setCoins: (state: any, action: PayloadAction<{ coins: number }>) => {
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
