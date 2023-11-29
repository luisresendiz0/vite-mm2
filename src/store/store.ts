import { create } from "zustand";
import { createAuthSlice } from "./slices/auth.slice";
import { createConfigSlice } from "./slices/config.slice";
import { Store } from "./types/store.type";
import { persist } from "zustand/middleware";

export const useStore = create<Store>()(
  persist(
    (...a) => ({
      ...createConfigSlice(...a),
      ...createAuthSlice(...a)
    }),
    {
      name: "store"
    }
  )
);