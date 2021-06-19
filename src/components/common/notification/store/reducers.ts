import { PayloadAction } from '@reduxjs/toolkit'
import { add, remove } from '../utils'

export const reducers = {
  onAddNotification: (state: any, action: any) => {
    const { title } = action.payload
    const message = `${title} added`

    return {
      ...state,
      notifications: add(state.notifications, message),
    }
  },
  onRemoveNotification: (state: any, action: any) => {
    return {
      ...state,
      notifications: remove(state.notifications, action.payload),
    }
  },
}
