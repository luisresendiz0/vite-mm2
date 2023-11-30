
interface ConfigState {
  appVersion: string;
  storeUpdateId: number;
};

interface ConfigActions {
  updateAppVersion: (v: string) => void;
  updateStoreUpdateId: (id: number) => void;
};

export type ConfigSlice = ConfigState & ConfigActions;