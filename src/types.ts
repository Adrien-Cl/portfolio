// ─── Types partagés du portfolio ─────────────────────────────────────────────

export type ProjectFilter = "dev" | "software" | "communication" | "infra";

export type ParcoursType = "formation" | "experience";

export interface Project {
  title: string;
  category: string;
  filter: ProjectFilter;
  desc: string;
  brief: string;
  imageFrame?: boolean;
  demarche: string[];
  realisation: string;
  autocritique: string;
  tech: string[];
  img: string;
  github?: string;
  link?: string;
}

export interface ParcoursEntry {
  type: ParcoursType;
  title: string;
  organization: string;
  date: string;
  desc: string;
  details: string[];
  logo?: string;
  responsabilites?: string[];
  livrables?: string[];
}
