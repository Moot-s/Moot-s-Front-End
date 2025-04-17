import { Card, Button, CardBody, Input, Form } from "@heroui/react";
import { FormEvent } from 'react';

type LoginFormProps = {
  handleLogin: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

export default function LoginForm({ handleLogin, username, setUsername, password, setPassword }: LoginFormProps) {
  return (
    <div className="flex items-center justify-center rounded-md w-full p-1">
      <Card className="rounded-2xl w-full">
        <CardBody>
          <div className="flex items-center justify-center p-4">
            <p className="font-wobble text-5xl text-pink-400">LOGIN</p>
          </div>
          <Form onSubmit={handleLogin} className="space-y-4">
            <div>
              <p className="block text-sm font-medium font-poppins text-gray-500">
                Username
              </p>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                color="default"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full font-poppins "
                placeholder="Enter your user/email"
              />
            </div>
            <div>
              <p className="block text-sm font-medium font-poppins text-gray-500">
                Password
              </p>
              <Input
                id="password"
                name="password"
                type="password"
                color="default"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full font-poppins"
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full bg-gray-500 hover:bg-gray-700 text-white rounded-md font-poppins font-semibold transition duration-300 ease-in-out">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
