import axios from "axios";
import { toast } from "sonner";
import { User } from "../../../types/User";

export const AuthController = () => {
  const apiUrl = import.meta.env.VITE_BACK_END_API_URL;

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    login: (data: User) => void
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;

    try {
      const response = await axios.post(
        apiUrl + "/auth/local",
        {
          identifier,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201 && response.status !== 200)
        throw new Error("Invalid credentials");

      const {
        jwt: token,
        user: { username: userFromResponse, id, email },
      } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("username", userFromResponse);

      await login({ username: userFromResponse, token, id, email });
      toast.success("Login successful", {
        description: "Welcome back to Moot's!",})
    } catch (error) {
      console.error(error)
      toast.error("Invalid credentials", {
        description:
          "Please check your username and password and try again.",
      });
    }
  };

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("identifier") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await axios.post(
        apiUrl + "/auth/local/register",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201 && response.status !== 200)
        throw new Error("Invalid credentials");

    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials", {
        description:
          "Please check your username and password and try again.",
      });
    }
  };

  return { handleLogin, handleRegister };
};
