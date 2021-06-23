import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

const cliffHangerSlice = createSlice({
  name: "cliffHanger",
  initialState,
  reducers,
});

export const { setHighScore } = cliffHangerSlice.actions;

export default cliffHangerSlice.reducer;
