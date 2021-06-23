export const reducers = {
  setHighScore: (state: any, action: any) => {
    const { highScore } = action.payload;

    const requestBody = {
      query: `
        mutation {
          setHighScore(cliffHangerInput: {
            highScore: ${highScore.score}, highScorePlayer: "${highScore.player}"}) {
              highScore
              highScorePlayer
            }
          }
      `,
    };

    const body = JSON.stringify(requestBody);

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error("Failed");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));

    return {
      ...state,
      highScore: {
        ...state.highScore,
        player: highScore.player,
        score: highScore.score,
      },
    };
  },
};
