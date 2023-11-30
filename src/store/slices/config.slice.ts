import { ConfigSlice } from "../types/config.type";
import { type SliceCreator } from "../types/creator.type";

export const createConfigSlice: SliceCreator<ConfigSlice> = (set) => ({
  appVersion: "0.0.1",
  storeUpdateId: 0,

  updateAppVersion: (newVersion) => {
    set({ appVersion: newVersion });
  },

  updateStoreUpdateId: (storeUpdateId) => {
    set({ storeUpdateId })
  }
});