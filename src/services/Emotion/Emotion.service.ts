
import { EmotionPayload } from "../../types/Emotion";

const getEmotionsAssignedToUser = async (
    token: string,
    userId: string
): Promise<void> => {
    const baseURL = import.meta.env.VITE_BACK_END_API_URL + '/user-emotion/' + userId;
    const url = new URL(baseURL);

    try {
        const resp = await fetch(url.href, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
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
    getEmotionsAssignedToUser,
    post
};
