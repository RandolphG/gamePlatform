import { createSelector } from 'reselect'

export const getState = (state: any) => state.time

export const getDate = createSelector(getState, (time) => time.date)

export const getDayOfMonth = createSelector(getState, (time) => time.dayOfMonth)

export const getNumberOfMonth = createSelector(
  getState,
  (time) => time.numberOfMonth
)

export const getTime = createSelector(getState, (time) => time.time)
