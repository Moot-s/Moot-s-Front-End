import "./styles/auth.css";

import { useState } from "react";

import { Link } from "@heroui/react";

import { useAuth } from "../../../hooks/useAuth/useAuth";
import { AuthController } from "./Auth.controller";
import LoginForm from "./components/LoginForm/LoginForm.component";
import RegisterForm from "./components/RegisterForm/RegisterForm.component";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { handleLogin, handleRegister } = AuthController();

  return (
    <div className="min-h-screen flex transition-all font-sans bg-gradient-to-b from-pink-100 to-blue-100">
      <div className="w-full h-screen relative overflow-hidden">
        {/* Video solo visible en md+ */}
        <div className="hidden md:block">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover z-0 videoFrame"
            src="https://www.youtube.com/embed/p2iqBb3LpnA?autoplay=1&mute=1&loop=1&playlist=p2iqBb3LpnA&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&vq=hd1080p"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block md:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-200 to-blue-200 z-0"></div>
        <div className="flex items-center justify-center h-full relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="text-center m-2 md:m-5 md:mx-60 txtShadow flex-1">
              <img
                className="m-4 mx-auto w-20 md:w-40 hover:cursor-pointer"
                src="/img/logo.png"
              />
              <h1 className="text-xl md:text-5xl font-bold text-pink-300 font-poppins leading-tight">
                "Life is what happens while you're busy making other plans."
              </h1>
              <h2 className="text-base md:text-3xl font-bold drop-shadow-lg text-white mt-2 font-poppins">
                John Lennon
              </h2>
            </div>
            <div className="w-full max-w-xs md:max-w-md p-2 md:p-8">
              <div className="text-center mb-2 bg-white rounded-xl shadow-lg">
                {isRegister ? (
                  <RegisterForm
                    handleRegister={(e) => handleRegister(e)}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                  />
                ) : (
                  <LoginForm
                    handleLogin={(e) => handleLogin(e, login)}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                  />
                )}
                <div className="text-center p-2 md:p-4 font-poppins">
                  <div className="flex flex-row items-center justify-center text-gray-600 italic font-poppins m-2 md:m-4 text-sm md:text-base">
                    <p>
                      {isRegister
                        ? "You already have an account?"
                        : "Don't have an account?"}
                    </p>
                    <Link
                      onPress={() => setIsRegister(!isRegister)}
                      className="p-2 hover:cursor-pointer"
                    >
                      {isRegister ? "Login" : "Sign up"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
