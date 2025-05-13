import { toast } from "sonner";
import { emotionService } from "../../../../../services/Emotion/Emotion.service";
import { EmotionPayload } from "../../../../../types/Emotion";

export const emotionController = {
    createEmotion: async (token: string, userId: string, emotionName: string): Promise<void> => {
        
        const data: EmotionPayload = {
            emotions: emotionName,
            entry: "",
            userId: userId,
            emotionDay: new Date().toISOString(),
        };
        try {
            await emotionService.post(token, data);
            toast.success("Emoción guardada correctamente");
        } catch (error) {
            toast.error("Error al guardar la emoción: " + error);
        }
    },
};
