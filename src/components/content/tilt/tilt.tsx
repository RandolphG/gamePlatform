import React, { useEffect } from 'react'
import './styles/_tileStyles.scss'
import { TiltMaze } from './TiltMaze'

const Tilt = () => {
  useEffect(() => {
    console.log(`tiltMaze initialized`)
    const tilt = new TiltMaze()
  })

  return (
    <div id="center">
      <div id="game">
        <div id="maze">
          <div id="end" />
        </div>
        <div id="joystick">
          <div className="joystick-arrow" />
          <div className="joystick-arrow" />
          <div className="joystick-arrow" />
          <div className="joystick-arrow" />
          <div id="joystick-head" />
        </div>
        <div id="note">
          Click the joystick to start!
          <p>Move every ball to the center. Ready for hard mode? Press H</p>
        </div>
      </div>
    </div>
  )
}

export default Tilt
