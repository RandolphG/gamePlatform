import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export const settingsSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { showSettings, hideSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
