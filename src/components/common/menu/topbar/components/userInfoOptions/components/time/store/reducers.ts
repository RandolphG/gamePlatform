// @ts-nocheck

export const reducers = {
  setDate: (state, action) => {
    const { date } = action.payload

    return { ...state, date }
  },
  setCurrentDateTime: (state, action) => {
    const { dayOfMonth, numberOfMonth, time } = action.payload

    return { ...state, dayOfMonth, numberOfMonth, time }
  },
}
