import { User } from "./User";

export enum Emotions {
  Angry = 'ANGRY',
  Sad = 'SAD',
  Calm = 'CALM',
  Worried = 'WORRIED',
  Happy = 'HAPPY',
  Embarrassed = 'EMBARRASSED',
  Uncomfortable = 'UNCOMFORTABLE',
  Confused = 'CONFUSED',
  Bored = 'BORED',
  Excited = 'EXCITED',
  Relaxed = 'RELAXED',
}

export interface Emotion {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  emotions: Emotions;
  createdOn: Date;
  updatedOn?: Date;
  entry: string;
  user?: User;
}
