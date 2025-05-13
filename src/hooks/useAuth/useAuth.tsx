import { useContext } from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return authContext;
};