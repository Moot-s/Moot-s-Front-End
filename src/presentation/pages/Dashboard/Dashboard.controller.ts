import { useCallback } from "react";
import { toast } from "sonner";

import { emotionService } from "../../../services/Emotion/Emotion.service";
import { EmotionPayload } from "../../../types/Emotion";
import { User } from "../../../types/User";

type Props = {
  user: User | null;
};

const DashboardController = ({ user }: Props) => {
  const getEmotionsAssignedToUser = useCallback(async () => {
    try {
      const result = await emotionService.getEmotionsAssignedToUser(
        import.meta.env.VITE_BACK_END_API_KEY || "",
        String(user?.id),
      );
      console.log("Emociones obtenidas:", result);
      return result;
    } catch (error) {
      toast.error("Error al obtener las emociones: " + error);
    }
  }, [user?.id]);

  const createEmotion = useCallback(
    async (emotionName: string) => {
      const data: EmotionPayload = {
        emotions: emotionName.toUpperCase() as EmotionPayload["emotions"],
        user: String(user?.id),
        emotionDay: new Date().toISOString(),
      };

      try {
        const response = await emotionService.post(
          import.meta.env.VITE_BACK_END_API_KEY || "",
          data,
        );
        toast.success("Emoción guardada correctamente");
        window.location.reload();
        return response;
      } catch (error) {
        toast.error("Error al guardar la emoción: " + error);
      }
    },
    [user?.id],
  );

  return {
    getEmotionsAssignedToUser,
    createEmotion,
  };
};

export default DashboardController;
