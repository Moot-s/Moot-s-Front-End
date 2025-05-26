import { User } from "./User";

export enum Emotions {
  ANGRY = 'ANGRY',
  SAD = 'SAD',
  CALM = 'CALM',
  WORRIED = 'WORRIED',
  HAPPY = 'HAPPY',
  EMBARRASSED = 'EMBARRASSED',
  UNCOMFORTABLE = 'UNCOMFORTABLE',
  CONFUSED = 'CONFUSED',
  BORED = 'BORED',
  EXCITED = 'EXCITED',
  SURPRISED = 'SURPRISED',
}

export const EmotionColors: Record<Emotions, string> = {
  [Emotions.ANGRY]: "bg-red-700",
  [Emotions.SAD]: "bg-blue-700",
  [Emotions.CALM]: "bg-teal-400",
  [Emotions.WORRIED]: "bg-orange-400",
  [Emotions.HAPPY]: "bg-yellow-400",
  [Emotions.EMBARRASSED]: "bg-pink-500",
  [Emotions.UNCOMFORTABLE]: "bg-amber-700",
  [Emotions.CONFUSED]: "bg-purple-500",
  [Emotions.BORED]: "bg-gray-400",
  [Emotions.EXCITED]: "bg-green-500",
  [Emotions.SURPRISED]: "bg-indigo-400",
};

export interface Emotion {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  emotions: Emotions;
  createdOn: Date;
  updatedOn?: Date;
  entry: string;
  user?: User;
}

export interface EmotionPayload {
  emotions: string;
  user: string;
  emotionDay: string;
}

