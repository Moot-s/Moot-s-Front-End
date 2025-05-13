import { toast } from "sonner";
import { emotionService } from "../../../services/Emotion/Emotion.service";
import { EmotionPayload } from "../../../types/Emotion";

export const emotionController = {

    createEmotion: async (token: string, data: EmotionPayload): Promise<void> => {
        try {
            await emotionService.post(token, data);
            toast.success("Emoción guardada correctamente");
        } catch (error) {
            toast.error("Error al guardar la emoción:" + error);
        }
    },

};