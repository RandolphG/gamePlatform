// @ts-ignore
import { Observable, of, Action } from "rxjs";
import { catchError, filter, map } from "rxjs/operators";
import { setCoins } from "../../game/homePage";

export const homePageEpics = (action$: Observable<Action>) =>
  action$.pipe(
    filter(setCoins.match),
    // filter((action: any) => action.type === setCoins.match),
    map((data) => {
      console.log(`set coins matched`, data);
      setCoins({ coins: 3000 });
    }),
    catchError((error) => of(() => console.log(error)))
  );
