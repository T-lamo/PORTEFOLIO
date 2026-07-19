// src/types/navigation.ts
export interface NavLink {
  id: string;
  title: string;
}

export interface Screenshot {
  url: string;
  caption: string;
}

export type ProjectCategory = "fullstack" | "frontend" | "automation" | "systems";

export interface ProjectCategoryInfo {
  id: ProjectCategory;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: ProjectCategory;
  longDescription?: string;
  challenges?: string[];
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string; // Capture d'écran principale
  detailedScreenshots?: Screenshot[];
}
