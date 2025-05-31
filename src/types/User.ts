import { EmotionPayload } from "./Emotion";

export interface User {
  documentId: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
  identifier?: string;
  emotions?: EmotionPayload[];
  token?: string;
  id?: number;
}
