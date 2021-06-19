import React, { useEffect } from 'react'
import './styles/_style.scss'
import { Main } from './Main'
import { LogoutButton } from '../../dashboard/components'

const Rabbit = () => {
  useEffect(() => {
    const Game = new Main()

    Game.init()

    console.log(
      `Game Status`,
      Main.gameStatus,
      `\nHero Status`,
      Game && Game.hero && Game.hero.status
    )
  })

  const renderStats = () => (
    <div className="stats">
      <div className="statsContainer">
        <span className="statsLabel">Scene polyCount:</span>
        <div id="polyCountValue">000</div>
      </div>
      <div className="statsContainer">
        Active Draw Calls:
        <div id="drawCallsValue">000</div>
      </div>
      <div className="statsContainer">
        Textures in Memory:
        <div id="texturesInMemoryValue">000</div>
      </div>
      <div className="statsContainer">
        Geometries in Memory:
        <div id="geometriesInMemoryValue">000</div>
      </div>
    </div>
  )

  const distance = () => (
    <div id="dist">
      <div className="label">distance</div>
      <div id="distValue">000</div>
    </div>
  )

  const highScore = () => (
    <div id="highScore">
      HighScore:
      <div id="highScoreValue">000</div>
    </div>
  )

  const instruction = () => (
    <div id="instructions">
      Click to jump
      <span className="lightInstructions">
        — Grab the carrots / avoid the hedgehogs
      </span>
      <button id="button">sound</button>
    </div>
  )

  return (
    <div id="world">
      <div id="gameoverInstructions">Game Over</div>
      {renderStats()}
      {distance()}
      {highScore()}
      {instruction()}
      <LogoutButton />
    </div>
  )
}

export default Rabbit
