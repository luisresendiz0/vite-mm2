
interface AuthState {
  isAuthenticaded: boolean;
};

interface AuthActions {
  signIn: () => void;
  signOut: () => void;
};

export type AuthSlice = AuthState & AuthActions;