import { create } from "zustand";
import { createAuthSlice } from "./slices/auth.slice";
import { createConfigSlice } from "./slices/config.slice";
import { Store } from "./types/store.type";

export const useStore = create<Store>()((...a) => ({
  ...createConfigSlice(...a),
  ...createAuthSlice(...a)
}));