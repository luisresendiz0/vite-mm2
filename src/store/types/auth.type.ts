interface User {
  email: string;
  role: string;
  permissions: string[]
}

interface AuthState {
  isAuthenticaded: boolean;
  user: User
};

interface AuthActions {
  signIn: () => void;
  signOut: () => void;
};

export type AuthSlice = AuthState & AuthActions;