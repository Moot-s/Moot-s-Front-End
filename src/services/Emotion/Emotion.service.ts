import { toast } from "sonner";
import { Emotion, EmotionPayload } from "../../types/Emotion";

const getAll = async (token: string): Promise<Emotion[]> => {
    const baseURL = import.meta.env.VITE_BACK_END_API_URL + '/v1/crm/s/client';
    const url = new URL(baseURL);

    try {
        const resp = await fetch(url.href, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!resp.ok) {
            toast.error(`Error fetching response: ${resp.statusText}`);
        }

        const response: Emotion[] = await resp.json();
        return response;
    } catch (error) {
        throw error;
    }
};

const get = async (token: string, id: string): Promise<Emotion[]> => {
    const baseURL = import.meta.env.VITE_BACK_END_API_URL + '/v1/crm/s/client' + `/${id}`;
    const url = new URL(baseURL);

    try {
        const resp = await fetch(url.href, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!resp.ok) {
            toast.error(`Error fetching response: ${resp.statusText}`);
        }

        const response: Emotion[] = await resp.json();
        return response;
    } catch (error) {
        throw error;
    }
};

const post = async (
    token: string,
    emotionData: EmotionPayload
): Promise<void> => {
    const baseURL = import.meta.env.VITE_BACK_END_API_URL + '/emotions';
    const url = new URL(baseURL);

    try {
        const resp = await fetch(url.href, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ data: emotionData }),
        });

        if (!resp.ok) {
            const errorText = await resp.text();
            throw new Error(`Error ${resp.status}: ${errorText}`);
        }

        const result = await resp.json();
        return result;

    } catch (error) {
        throw error;
    }
};

export const emotionService = {
    getAll,
    get,
    post
};
