
interface ConfigState {
  appVersion: string;
};

interface ConfigActions {
  updateAppVersion: (v: string) => void;
};

export type ConfigSlice = ConfigState & ConfigActions;