import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import user from "./userInfo/user";
import time from "../components/common/menu/topbar/components/userInfoOptions/components/time/store/time";
import notification from "../components/common/notification/store/notification";
import games from "../components/content/store/games";
import clickBtn from "../components/content/clickButton/store/clickBtn";
import cliffhanger from "../components/content/cliffHanger/store/cliffhanger";
import leaderboard from "../components/profile/components/leaderBoard/store/leaderboard";
import { getDashboardEpics } from "../components";

const reducers = combineReducers({
  user,
  time,
  notification,
  games,
  clickButton: clickBtn,
  cliffhanger,
  leaderboard,
});

const epic = combineEpics(getDashboardEpics);
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    epicMiddleware,
  ],
});

epicMiddleware.run(epic);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
