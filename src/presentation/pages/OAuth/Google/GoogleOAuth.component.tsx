import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth/useAuth";

export default function GoogleOAuth() {
  const navigate = useNavigate();

  const { login } = useAuth();

  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const res = await axios.get(
          `/api/auth/google/callback${location.search}`,
        );
        const { jwt, user } = res.data;

        localStorage.setItem("token", jwt);
        login({ ...user, token: jwt });

        navigate("/");
      } catch (err) {
        console.error("Error en la autenticación con Google:", err);
      }
    };

    fetchGoogleData();
  }, []);

  return <div>Redirigiendo...</div>;
}
