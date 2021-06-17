import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { initialState } from "./initialState";

export interface INotificationState {
  notifications: any[];
}

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers,
});

export const { onAddNotification, onRemoveNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
