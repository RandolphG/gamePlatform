export const reducers = {
  showSettings: (state: any) => {
    return { ...state, showSettingsModal: true };
  },
  hideSettings: (state: any) => {
    return { ...state, showSettingsModal: false };
  },
};
