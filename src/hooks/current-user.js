import { useContext } from "react";
import { AuthContext } from "../contexts/auth/auth-context.js";

export function useCurrentUser() {
  const { currentUser } = useContext(AuthContext);

  return currentUser;
}
