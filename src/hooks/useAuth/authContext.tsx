import { createContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import { User } from "../../types/User";

type AuthContextType = {
  user: User | null;
  token: string | null;
  identifier: string | null;
  login: (data: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  identifier: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage("user", "");
  const navigate = useNavigate();

  const login = useCallback(async (data: User) => {
    setUser(data);
    navigate("/dashboard");
  }, [navigate, setUser]);

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      token: user?.token,
      identifier: user?.identifier,
      login,
      logout,
    }),
    [login, logout, user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};