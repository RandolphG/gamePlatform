import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { getUserState } from '../../../app/userInfo'
import { CliffHangerGame } from './game'
import { setHighScore } from './store'
import './styles/_cliffHangerStyles.scss'

const CliffHanger = () => {
  const dispatch = useDispatch()
  const player = useSelector(getUserState)
  let gameInstance

  const setScore = (highScore: number) => dispatch(setHighScore({ highScore }))

  const HighScore = () => (
    <span className="highScore">
      <span>highScore:</span>
      <div id="highScore" />
    </span>
  )

  const Score = () => (
    <span className="score">
      <span>score:</span>
      <div id="score" />
    </span>
  )

  const Restart = () => <button id="restart">RESTART</button>

  const Instruction = () => (
    <>
      <div id="introduction">Hold down the mouse to stretch out a stick</div>
      <div id="perfect">DOUBLE SCORE</div>
    </>
  )

  const GameCanvas = () => <canvas id="game" width="375" height="375" />

  useEffect(() => {
    gameInstance = new CliffHangerGame(player.userName, setScore)
  })

  return (
    <motion.div className="container">
      <Score />
      <HighScore />
      <GameCanvas />
      <Instruction />
      <Restart />
    </motion.div>
  )
}

export default CliffHanger
