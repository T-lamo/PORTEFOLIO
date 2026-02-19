// src/components/sections/ProjectModal.tsx
import { useEffect } from "react";

import { motion } from "framer-motion";
import { X, Trophy, Target, Zap, Github, ExternalLink, Image as ImageIcon } from "lucide-react";

import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    // Bloquer le scroll du body quand la modale est ouverte
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Container Modale - Élargi à max-w-6xl */}
      <motion.div
        layoutId={`card-${project.title}`}
        className="glass-card bg-surface custom-scrollbar relative h-full max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] shadow-2xl"
      >
        {/* Header fixe avec bouton fermer */}
        <div className="bg-surface/80 sticky top-0 z-20 flex items-center justify-between border-b border-white/5 p-6 backdrop-blur-lg">
          <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-black text-white">
            {project.title}
          </motion.h3>
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              className="hover:text-primary text-white/50 transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              className="hover:text-primary text-white/50 transition-colors"
            >
              <ExternalLink size={22} />
            </a>
            <button
              onClick={onClose}
              className="ml-4 rounded-full bg-white/5 p-2 text-white/50 transition-all hover:bg-white/10 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-8 md:p-12">
          {/* Section Introduction & Image Principale */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <section>
                <div className="text-accent mb-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                  <Target size={14} /> Le Contexte
                </div>
                <p className="text-lg leading-relaxed text-white/70 italic">
                  "{project.description}"
                </p>
                <p className="mt-4 leading-relaxed text-white/60">{project.longDescription}</p>
              </section>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 border-primary/20 text-primary rounded-full border px-3 py-1 font-mono text-xs uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:col-span-3">
              <motion.img
                layoutId={`image-${project.title}`}
                src={project.image}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Section Expertise & Challenges */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-primary mb-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <Zap size={16} /> Challenges Techniques
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {(
                  project.challenges || ["Optimisation React", "Architecture Modulaire", "SEO"]
                ).map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-white/60"
                  >
                    <span className="text-primary mt-0.5 font-bold">0{i + 1}</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="from-primary/10 border-primary/20 rounded-3xl border bg-gradient-to-br to-transparent p-8">
              <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-widest text-white uppercase">
                <Trophy size={16} /> Impact & Résultats
              </div>
              <p className="leading-relaxed text-white/80">
                {project.results ||
                  "Livraison d'une interface haute performance avec un score Lighthouse optimal."}
              </p>
            </div>
          </div>

          {/* Section Galerie de Screenshots avec Captions */}
          {project.detailedScreenshots && project.detailedScreenshots.length > 0 && (
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <h4 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                  <ImageIcon size={14} /> Galerie Interactive
                </h4>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {project.detailedScreenshots.map((sh, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group space-y-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={sh.url}
                        alt={sh.caption}
                        className="h-auto w-full grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    </div>
                    <p className="group-hover:text-primary/80 text-center text-sm font-medium text-white/40 transition-colors">
                      <span className="text-primary/50 mr-2">//</span>
                      {sh.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
