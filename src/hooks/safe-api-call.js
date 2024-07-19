import { useNavigate } from "react-router-dom";
import { apiCall } from "../utils/api-call.js";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth/auth-context.js";

export function useSafeApiCall() {
  const navigate = useNavigate();
  const { onLogout } = useContext(AuthContext);

  return async (method, path, payload) => {
    try {
      return await apiCall(method, path, payload);
    } catch (error) {
      switch (error.error) {
        case "TOKEN_EXPIRED": {
          onLogout();
          toast.error(
            "Su sesión ha expirado, por favor inicie sesión nuevamente"
          );
          navigate("/login");
          break;
        }
        case "TRAVEL_NOT_FOUND": {
          toast.error("El viaje que busca no fue encontrado");
          navigate("/");
          break;
        }
      }
      throw error;
    }
  };
}
