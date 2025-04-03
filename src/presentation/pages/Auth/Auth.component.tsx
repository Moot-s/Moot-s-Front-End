import { AuthController } from "./Auth.controller";
import LoginForm from "./components/LoginForm/LoginForm.component";



export default function AuthPage() {
  const { handleLogin } = AuthController()

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-[url(/img/loginBg.png)]">
        <LoginForm handleLogin={handleLogin} />
    </div>
  )
}
