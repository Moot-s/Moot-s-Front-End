import { Card, Button, CardBody, Input, Form } from "@heroui/react";
import { FormEvent } from "react";

type RegisterFormProps = {
  handleLogin: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

export default function RegisterForm({
  handleLogin,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}: RegisterFormProps) {
  return (
    <div className="flex items-center justify-center p-4 rounded-md">
      <Card className="rounded-2xl w-full">
        <CardBody>
          <div className="text-2xl font-bold font-wobble p-2 text-center">
            <p className='text-blue-300'>Register</p>
          </div>
          <img className="m-6 mx-auto hover:cursor-pointer" src="/img/logo.png" />
          <Form onSubmit={handleLogin} className="space-y-4">
            <div>
              <p className="block text-sm font-medium font-poppins text-blue-700">
                Email
              </p>
              <Input
                id="email"
                name="email"
                type="text"
                color="default"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full font-poppins"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <p className="block text-sm font-medium font-poppins text-blue-700">
                Username
              </p>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                color="default"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full font-poppins"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <p className="block text-sm font-medium font-poppins text-blue-700">
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
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-poppins font-semibold transition duration-300 ease-in-out"
            >
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
