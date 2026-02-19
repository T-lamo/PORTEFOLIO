// src/components/sections/ProjectCard.tsx
import { motion } from "framer-motion";
import { Github, ExternalLink, Linkedin } from "lucide-react";

import type { Project } from "../../types";
import { fadeIn } from "../../utils/motion";

interface ProjectCardProps {
  project: Project & { linkedinUrl?: string };
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      // La carte elle-même déclenche l'ouverture des détails (onClick)
      className="glass-card group hover:border-primary/30 relative flex cursor-pointer flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/5 p-6 text-center transition-all duration-500"
      onClick={onClick}
      layoutId={`card-${project.title}`}
      whileHover={{ y: -10 }}
    >
      {/* Container Image avec Overlay */}
      <div className="relative mb-6 h-[230px] w-full overflow-hidden rounded-[1.8rem] shadow-2xl">
        <motion.img
          layoutId={`image-${project.title}`}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay avec liens - On utilise cursor-default sur le fond pour ne pas confondre avec le bouton */}
        <div className="absolute inset-0 z-10 flex cursor-default items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          {/* GitHub : cursor-pointer forcé */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, "_blank");
            }}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
            title="GitHub"
          >
            <Github size={20} />
          </button>

          {/* LinkedIn : cursor-pointer forcé */}
          {project.linkedinUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.linkedinUrl, "_blank");
              }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#0077b5] transition-all duration-300 hover:scale-110 hover:bg-[#0077b5] hover:text-white"
              title="LinkedIn"
            >
              <Linkedin size={20} fill="currentColor" />
            </button>
          )}

          {/* Live Link : cursor-pointer forcé */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveUrl, "_blank");
            }}
            className="bg-primary shadow-primary/20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
            title="Voir le projet"
          >
            <ExternalLink size={24} />
          </button>
        </div>
      </div>

      {/* Contenu Texte Centré */}
      <div className="flex w-full flex-col items-center gap-3 px-2">
        <h3 className="group-hover:text-primary text-2xl font-black tracking-tight text-white uppercase transition-colors">
          {project.title}
        </h3>

        <p className="line-clamp-2 max-w-[90%] text-sm leading-relaxed text-white/50 italic">
          {project.description}
        </p>
      </div>

      {/* Tags Centrés */}
      <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-primary/70 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-widest uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Indicateur d'interaction en bas */}
      <div className="group-hover:text-primary/50 mt-4 flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase transition-colors">
        <span className="cursor-pointer">Voir les détails</span>
      </div>
    </motion.div>
  );
};
