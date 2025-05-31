import { FormEvent } from "react";

import { Button, Card, CardBody, Form, Input } from "@heroui/react";

type RegisterFormProps = {
  handleRegister: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

export default function RegisterForm({
  handleRegister,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}: RegisterFormProps) {
  return (
    <div className="flex items-center justify-center rounded-md p-1">
      <Card className="rounded-2xl w-full shadow-none">
        <CardBody>
          <div className="flex items-center justify-center p-4">
            <p className="font-wobble text-4xl text-pink-400">REGISTER</p>
          </div>
          <Form onSubmit={handleRegister} className="space-y-4">
            <div className="w-full">
              <p className="block text-sm font-medium font-poppins text-gray-500">
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
                placeholder="moots@moots.com"
              />
            </div>
            <div className="w-full">
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
                className="mt-1 w-full font-poppins"
                placeholder="Enter your username"
              />
            </div>
            <div className="w-full">
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
            <Button
              type="submit"
              className="w-full bg-gray-500 hover:bg-gray-700 text-white rounded-md font-poppins font-semibold transition duration-300 ease-in-out"
            >
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
