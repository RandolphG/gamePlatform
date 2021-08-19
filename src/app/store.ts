import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

// @ts-ignore
import { of } from "rxjs";
import { createBrowserHistory } from "history";
import { catchError } from "rxjs/operators";
import { createLogger } from "redux-logger";
// @ts-ignore
import { routerMiddleware } from "connected-react-router";
import { homePageEpics } from "./epics";
import thunk from "redux-thunk";
import settings from "../game/settings/store/settings";
import user from "./userInfo/user";
import notification from "../game/common/notification/store/notification";
import home from "../game/homePage/store/home";

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const reducers = combineReducers({
  home,
  user,
  settings,
  notification,
});

export const history = createBrowserHistory();

const logger = createLogger({
  collapsed: true,
  level: "info",
  predicate: () => process.env.NODE_ENV === "development",
});

const protect = (epic: any) => (action$: any, state$: any, dependencies: any) =>
  epic(action$, state$, dependencies).pipe(
    catchError((error) => of({ type: "EPIC_FAILURE", error }))
  );

const protectAndCombineEpics = (...epics: any) => {
  const protectedEpics = epics.map((epic: any) => protect(epic));

  return combineEpics(...protectedEpics);
};

const epic = protectAndCombineEpics(homePageEpics);
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    thunk,
    epicMiddleware,
    routerMiddleware(history),
    logger,
  ],
});

epicMiddleware.run(epic);
