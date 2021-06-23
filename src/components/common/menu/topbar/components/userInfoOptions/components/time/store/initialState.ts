export interface IInitialState {
  date: Date;
  dayOfMonth: string;
  numberOfMonth: string;
  time: string;
}

export const initialState: IInitialState = {
  date: new Date(),
  dayOfMonth: "",
  numberOfMonth: "",
  time: "",
};
