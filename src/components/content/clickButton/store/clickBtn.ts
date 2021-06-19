import { createSlice } from '@reduxjs/toolkit'
import { reducers } from './reducers'
import { initialState } from './initialState'

const clickButtonSlice = createSlice({
  name: 'clickButton',
  initialState,
  reducers,
})

export const {
  setExtendedArm,
  setRotation,
  removeInnerHovered,
  setInnerHovered,
  setState,
  setDebugState,
  setGameOver,
  setCursorGrabbed,
} = clickButtonSlice.actions

export default clickButtonSlice.reducer
