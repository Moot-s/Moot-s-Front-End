import axios from "axios";
import { toast } from "sonner";

export const AuthController = () => {
    const apiUrl = import.meta.env.VITE_BACK_END_API_URL;
    const apiKey = import.meta.env.VITE_BACK_END_API_KEY;

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>, login: (data: { username: string; token: string }) => Promise<void>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        try {
            const response = await axios.post(apiUrl + '/auth/local', {
                username,
                password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                }
            });

            if (response.status !== 201) throw new Error("Invalid credentials");

            await login({ username: response.data.username, token: response.data.token });
        } catch (error) {
            toast.error("Invalid credentials", {
                description: "Please check your username and password and try again.",
            });
        }
    };

    return { handleLogin };
};

