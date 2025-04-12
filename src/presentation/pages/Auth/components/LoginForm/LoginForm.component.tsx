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
    <div className="flex items-center justify-center rounded-md">
      <Card className="rounded-2xl">
        <CardBody>
          <div className="text-2xl font-bold font-wobble p-2 text-center">
            <p className='text-pink-300'>Login</p>
          </div>
          <img className="m-6 mx-auto hover:cursor-pointer" src="/img/logo.png" />
          <Form onSubmit={handleLogin} className="space-y-4">
            <div>
              <p className="block text-sm font-medium font-poppins text-pink-700">
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
              <p className="block text-sm font-medium font-poppins text-pink-700">
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
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-poppins font-semibold transition duration-300 ease-in-out">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
