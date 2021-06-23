import { createSelector } from "reselect";

export const getUserState = (state) => state.user;

export const getLoggedInState = createSelector(
  getUserState,
  (user) => user.isLoggedIn
);
