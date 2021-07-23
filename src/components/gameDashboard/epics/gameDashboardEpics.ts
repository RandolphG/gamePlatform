// @ts-ignore
import { of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";

export const getDashboardEpics = (action$: any) =>
  action$.pipe(
    filter((action: any) => action.type === "GET_DASHBOARD"),
    map((data) => console.log(data)),
    catchError((error) => of(() => console.log(error)))
  );
