import { Card, Button, CardBody, Input } from "@heroui/react";
import { FormEvent } from 'react';

type LoginFormProps = {
  handleLogin: (e: FormEvent<HTMLFormElement>, login: (data: { username: string; token: string; }) => Promise<void>) => Promise<void>;
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

export default function LoginForm({ handleLogin, username, setUsername, password, setPassword }: LoginFormProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-6 bg-white">
        <CardBody>
          <img src="/img/logo.png" alt="Logo" className="w-32 mx-auto mb-4" />
          <form onSubmit={(e) => handleLogin(e, import.meta.env.VITE_BACK_END_API_KEY)} className="space-y-4">
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Username
              </p>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                className="mt-1 w-full"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Password
              </p>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="mt-1 w-full"
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
