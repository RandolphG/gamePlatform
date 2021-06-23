export const reducers = {
  setLogin: (state, action) => {
    const { isLoggedIn } = action.payload;
    return { ...state, isLoggedIn };
  },
  setName: (state, action) => {
    const { credentials } = action.payload;
    return { ...state, userName: credentials.reporter };
  },
  setGame: (state, action) => {
    const { game } = action.payload;
    return {
      ...state,
      game,
    };
  },
  setHighScore: (state, action) => {
    const { highScore } = action.payload;
    return {
      ...state,
      highScore,
    };
  },
  addGamePlayed: (state, action) => {
    const { gameName } = action.payload;
    return { ...state, gameName };
  },
  setActiveRoute: (state, action) => {
    const { activeRoute } = action.payload;
    return { ...state, activeRoute };
  },
};
