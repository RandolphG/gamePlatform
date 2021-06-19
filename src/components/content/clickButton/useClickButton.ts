import { useDispatch, useSelector } from 'react-redux'
import {
  gameOverState,
  getDebugState,
  isCursorGrabbed,
  setCursorGrabbed,
  setDebugState,
  setGameOver,
} from './store'

export const useClickButton = () => {
  const dispatch = useDispatch()
  const debug = useSelector(getDebugState)
  const cursorGrabbed = useSelector(isCursorGrabbed)
  const gameOver = useSelector(gameOverState)

  const screenStyle = cursorGrabbed ? { cursor: 'none' } : {}
  const appClass = debug ? 'app app--debug' : 'app'

  function handleToggleDebug() {
    dispatch(setDebugState({ debug: !debug }))
  }

  function handleCursorGrabbed() {
    setCursorGrabbed(true)
    setTimeout(() => {
      setCursorGrabbed(false)
    }, 2000)
  }

  function handleButtonClicked() {
    setGameOver(true)
    setTimeout(() => {
      setGameOver(false)
    }, 4000)
  }

  return {
    handleButtonClicked,
    handleCursorGrabbed,
    handleToggleDebug,
    screenStyle,
    appClass,
    gameOver,
    cursorGrabbed,
  }
}
