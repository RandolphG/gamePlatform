import { createSelector } from "reselect";

export const getSettingsState = (state: any) => state.settings;

export const getModalState = createSelector(
  getSettingsState,
  (settings) => settings.showSettingsModal
);
