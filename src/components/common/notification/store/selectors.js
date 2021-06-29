import { createSelector } from "reselect";

export const getNotificationState = (state) => state.notification;

export const getNotifications = createSelector(
  getNotificationState,
  (state) => state.notifications
);
