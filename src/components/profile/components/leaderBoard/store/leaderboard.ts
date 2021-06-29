import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers,
});

export const {} = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
