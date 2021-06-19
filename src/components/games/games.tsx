// @ts-nocheck
import React from 'react'
import { motion } from 'framer-motion'
import { homeLayout } from './motionSettings'
import { GamesViewModel } from './gamesViewModel'
import { GameSelection } from './components'
import './styles/_homeLayout.scss'

const Games = () => {
  const { singleRefs, draggableArea, dragging, startDragging, stopDragging } =
    GamesViewModel()

  return (
    <motion.div key="home" className="home" {...homeLayout}>
      {GameSelection({
        draggableArea,
        singleRefs,
        stopDragging,
        dragging,
        startDragging,
      })}
    </motion.div>
  )
}

export default Games
