import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers,
});

export const { setCoins, setActiveRoute } = homeSlice.actions;

export default homeSlice.reducer;
