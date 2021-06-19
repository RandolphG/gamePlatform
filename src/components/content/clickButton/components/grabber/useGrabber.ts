/* @ts-nocheck */
import { useEffect, useState } from 'react'
import { useMousePosition, usePosition } from '../hooks'
import { ASSETS } from '../../utils'

export type state = 'waiting' | 'stalking' | 'grabbing' | 'grabbed' | 'shaka'

export const useGrabber = (
  state: state,
  gameOver: boolean,
  extended: boolean
) => {
  const mousePos = useMousePosition()
  const [ref, position] = usePosition()
  const [rotation, setRotation] = useState(0)

  let x: number
  let y: number
  let angle: number
  let wrapperStyle: { transform: string }

  useEffect(() => {
    /* Calculate rotation of armWrapper */
    if (position) {
      // @ts-ignore
      x = position.left + position.width * 0.5
      // @ts-ignore
      y = position.top + position.height * 0.5

      angle = gameOver
        ? 0
        : Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI)

      /* Ensure value is within acceptable range (-75 to 75) */
      setRotation(Math.min(Math.max(parseInt(angle.toString()), -79), 79))
    }
  }, [position, ref])

  const grabberClass = `grabber grabber--${state} ${
    extended && 'grabber--extended'
  }`

  const handImageSrc = ASSETS[state]

  wrapperStyle = { transform: `rotate(${rotation}deg)` }

  return {
    grabberClass,
    handImageSrc,
    wrapperStyle,
    ref,
  }
}
