import { type AuthSlice } from "../types/auth.type";
import { SliceCreator } from "../types/creator.type";

export const createAuthSlice: SliceCreator<AuthSlice> = (set, get) => ({
  isAuthenticaded: false,
  user: {
    email: "",
    role: "",
    permissions: []
  },

  signIn: () => {
    set({
      isAuthenticaded: true,
      user: {
        email: "luis.resendiz@gmail.com",
        role: "admin",
        permissions: ["stores.create", "stores.update", "stores.delete"]
      }
    });
  },

  signOut: () => {
    set({ isAuthenticaded: false });
  }
});