import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./userInfo/user";
import time from "../components/common/menu/topbar/components/userInfoOptions/components/time/store/time";
import notification from "../components/common/notification/store/notification";
import games from "../components/content/store/games";
import clickBtn from "../components/content/clickButton/store/clickBtn";
import cliffhanger from "../components/content/cliffHanger/store/cliffhanger";

const reducers = combineReducers({
  user,
  time,
  notification,
  games,
  clickButton: clickBtn,
  cliffhanger,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
