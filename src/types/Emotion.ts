import { User } from "./User";

export enum Emotions {
  ANGRY = "ANGRY",
  BORED = "BORED",
  CALM = "CALM",
  CONFUSED = "CONFUSED",
  EMBARRASSED = "EMBARRASSED",
  EXCITED = "EXCITED",
  HAPPY = "HAPPY",
  SAD = "SAD",
  SURPRISED = "SURPRISED",
  UNCOMFORTABLE = "UNCOMFORTABLE",
  WORRIED = "WORRIED",
}

export interface Emotion {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  emotions: Emotions;
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

export interface EmotionAssigned {
  id: number;
  documentId: string;
  emotions: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  emotionDay: string;
  user: {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string | null;
    confirmationToken: string | null;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
  };
  createdBy: any;
  updatedBy: any;
  localizations: any[];
}
