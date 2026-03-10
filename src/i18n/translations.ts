import { fr } from "./fr";
import { en } from "./en";

export const translations = { fr, en } as const;

export type Lang = keyof typeof translations;
export type Translations = typeof fr;
