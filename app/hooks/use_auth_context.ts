import { useContext } from "react";
import { AuthContext } from "~/context/auth_provider";

export default function useAuthContext() {
  return useContext(AuthContext);
}
