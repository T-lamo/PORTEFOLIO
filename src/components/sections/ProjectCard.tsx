// src/components/sections/ProjectCard.tsx
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import type { Project } from "../../types";
import { fadeIn } from "../../utils/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="glass-card group relative cursor-pointer overflow-hidden rounded-3xl p-6" // Augmentation du padding (p-6)
      onClick={onClick}
      layoutId={`card-${project.title}`}
      whileHover={{ y: -10 }} // On lève la carte entière pour éviter que le titre "colle" au haut
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Container Image avec Overlay */}
      <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
        <motion.img
          layoutId={`image-${project.title}`}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" // Scale réduit à 105 pour être plus subtil
        />

        {/* Overlay avec liens - Visible uniquement au hover */}
        <div className="bg-background/40 absolute inset-0 flex items-center justify-center gap-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, "_blank");
            }}
            className="bg-primary/90 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
            title="GitHub Code"
          >
            <Github size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveUrl, "_blank");
            }}
            className="text-primary flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
            title="Live Demo"
          >
            <ExternalLink size={24} />
          </button>
        </div>
      </div>

      {/* Contenu Texte - Ajout de marges pour éviter le chevauchement */}
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="group-hover:text-primary text-2xl font-bold text-white transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-white/60">{project.description}</p>
      </div>

      {/* Tags avec Glassmorphism individuel */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-primary/90 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium tracking-wider uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
