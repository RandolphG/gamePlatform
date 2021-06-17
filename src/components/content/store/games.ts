import { reducers } from "./reducers";
import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers,
});

export const {} = gamesSlice.actions;

export default gamesSlice.reducer;
