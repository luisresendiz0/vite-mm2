import { type AuthSlice } from "../types/auth.type";
import { SliceCreator } from "../types/creator.type";

export const createAuthSlice: SliceCreator<AuthSlice> = (set, get) => ({
  isAuthenticaded: false,

  signIn: async () => {
    set({ isAuthenticaded: true });

    get().updateAppVersion("2.1");
  },

  signOut: () => {
    set({ isAuthenticaded: false });
  }
});