import { JSX } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth/useAuth";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth" />;
}
