// src/types/navigation.ts
export interface NavLink {
  id: string;
  title: string;
}

export interface Screenshot {
  url: string;
  caption: string;
}
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  longDescription?: string;
  challenges?: string[];
  results?: string;
  githubUrl: string;
  liveUrl: string;
  image: string; // Capture d'écran principale
  detailedScreenshots?: Screenshot[];
}
