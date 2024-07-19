import { createContext } from "react";

export const AuthContext = createContext({
  currentUser: null,
  onLogin: () => undefined,
  onLogout: () => undefined,
});
