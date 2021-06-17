import { reducers } from "./reducers";
import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const cliffHangerSlice = createSlice({
  name: "cliffHanger",
  initialState,
  reducers,
});

export const { setHighScore } = cliffHangerSlice.actions;

export default cliffHangerSlice.reducer;
