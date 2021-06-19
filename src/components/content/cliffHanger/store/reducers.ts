export const reducers = {
  setHighScore: (state: any, action: any) => {
    const { highScore } = action.payload

    return {
      ...state,
      highScore: {
        ...state.highScore,
        player: highScore.player,
        score: highScore.score,
      },
    }
  },
}
