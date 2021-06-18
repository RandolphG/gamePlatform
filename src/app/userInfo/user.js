import { reducers } from "./reducers";
import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const {
  setName,
  setGame,
  addGamePlayed,
  setHighScore,
  setActiveRoute,
  setLogin,
} = userSlice.actions;

export default userSlice.reducer;
