import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm.component';
import RegisterForm from './components/RegisterForm/RegisterForm.component';
import { Button, Link } from '@heroui/react';
import { AuthController } from './Auth.controller';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import './styles/auth.css';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { handleLogin, handleRegister } = AuthController();

  return (
    <div className="min-h-screen flex transition-all font-sans">
  <div className="w-full h-screen relative videoBg overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
    <iframe
      className="absolute top-0 left-0 w-full h-full object-cover z-0 videoFrame"
      src="https://www.youtube.com/embed/p2iqBb3LpnA?autoplay=1&mute=1&loop=1&playlist=p2iqBb3LpnA&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&vq=hd1080p"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
    <div className="flex items-center justify-center h-full relative z-10">
      <div className="text-center m-5 mx-60 txtShadow">
        <img className="m-6 mx-auto hover:cursor-pointer" src="/img/logo.png" />
        <h1 className="text-5xl font-bold text-pink-300 font-poppins">"Life is what happens while you're busy making other plans."</h1>
        <h2 className="text-3xl font-bold drop-shadow-lg text-white mt-2 font-poppins">John Lennon</h2>
        <p className="mt-4 text-lg drop-shadow-lg text-white"></p>
      </div>
      <div className="w-full max-w-md p-8">
          <div className="text-center mb-2 bg-white rounded-xl">
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
            <div className='text-center p-4 font-poppins'>
              <Button
                type="button"
                onClick={() => window.location.href = import.meta.env.VITE_GOOGLE_OAUTH_URL}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                  src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                  className="h-[18px] w-[18px] " />Continue with
                Google
              </Button>
              <div className='flex flex-row items-center justify-center text-gray-600 italic font-poppins m-4'>
                <p>{isRegister ? 'You already have an account?' : "Don't have an account?"}</p>
                <Link onPress={() => setIsRegister(!isRegister)} className='p-2 hover:cursor-pointer'>{isRegister ? 'Login' : "Sign up"}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
