// src/components/sections/ProjectModal.tsx
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Trophy,
  Target,
  Zap,
  Github,
  ExternalLink,
  Image as ImageIcon,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// Courbe douce type "ease-out-quint" : pas de rebond, une sortie nette mais fluide.
const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const screenshots = project.detailedScreenshots ?? [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrevScreenshot = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + screenshots.length) % screenshots.length
    );
  const showNextScreenshot = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % screenshots.length));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        else if (e.key === "ArrowLeft") showPrevScreenshot();
        else if (e.key === "ArrowRight") showNextScreenshot();
        return;
      }
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, lightboxIndex, screenshots.length]);

  return (
    /* Z-index élevé pour passer au dessus de tout */
    <div className="fixed inset-0 isolate z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Overlay sombre avec flou */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out bg-black/95 backdrop-blur-sm"
      />

      {/* Conteneur Modale */}
      <motion.div
        layoutId={`card-${project.title}`}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{
          duration: 0.4,
          ease: SMOOTH_EASE,
          layout: { duration: 0.4, ease: SMOOTH_EASE },
        }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card custom-scrollbar relative h-full max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2.5rem] border border-white/10 bg-[#050816] shadow-2xl"
      >
        {/* Header Sticky */}
        <div className="sticky top-0 z-[100] flex items-center justify-between border-b border-white/5 bg-[#050816]/90 p-6 backdrop-blur-lg">
          <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-black text-white">
            {project.title}
          </motion.h3>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary p-2 text-white/50 transition-colors"
              >
                <Github size={22} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary p-2 text-white/50 transition-colors"
              >
                <ExternalLink size={22} />
              </a>
            )}
            <button
              onClick={onClose}
              className="hover:bg-primary ml-4 rounded-full bg-white/10 p-2 text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* --- CONTENU DE LA MODALE --- */}
        <div className="p-8 md:p-12">
          {/* Section Introduction & Image principale */}
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
            <div className="h-fit overflow-hidden rounded-3xl border border-white/10 lg:col-span-3">
              <motion.img
                layoutId={`image-${project.title}`}
                src={project.image}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Section Challenges & Résultats */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-primary mb-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <Zap size={16} /> Challenges
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {(project.challenges || ["Optimisation", "Architecture"]).map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-white/60"
                  >
                    <span className="text-primary font-bold">0{i + 1}</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="from-primary/10 border-primary/20 rounded-3xl border bg-gradient-to-br p-8">
              <div className="mb-6 flex items-center gap-2 text-xs font-bold text-white uppercase">
                <Trophy size={16} /> Résultats
              </div>
              <p className="text-white/80">{project.results}</p>
            </div>
          </div>

          {/* --- LA GALERIE DE PHOTOS --- */}
          {screenshots.length > 0 && (
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <h4 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                  <ImageIcon size={14} /> Galerie Interactive
                </h4>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {screenshots.map((sh, i) => (
                  <div key={i} className="group space-y-4">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={`Agrandir la capture : ${sh.caption}`}
                      className="focus-visible:ring-primary/60 relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 focus-visible:ring-2 focus-visible:outline-none"
                    >
                      <img
                        src={sh.url}
                        alt={sh.caption}
                        className="h-auto w-full grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                        <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md">
                          <ZoomIn size={14} /> Agrandir
                        </span>
                      </div>
                    </button>
                    <p className="text-center text-sm font-medium text-white/40 italic">
                      <span className="text-primary/50 mr-2">//</span>
                      {sh.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>

      {/* --- LIGHTBOX : vue agrandie d'une capture --- */}
      <AnimatePresence>
        {lightboxIndex !== null && screenshots[lightboxIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[10000] flex cursor-zoom-out flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-10"
          >
            <button
              onClick={closeLightbox}
              aria-label="Fermer l'aperçu"
              className="absolute top-6 right-6 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrevScreenshot();
                  }}
                  aria-label="Capture précédente"
                  className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 md:left-8"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showNextScreenshot();
                  }}
                  aria-label="Capture suivante"
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 md:right-8"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              src={screenshots[lightboxIndex].url}
              alt={screenshots[lightboxIndex].caption}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[78vh] w-auto max-w-full cursor-default rounded-2xl object-contain shadow-2xl"
            />
            <p
              className="mt-6 max-w-2xl text-center text-sm text-white/60 italic"
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots[lightboxIndex].caption}
            </p>
            {screenshots.length > 1 && (
              <p
                className="mt-2 text-xs tracking-widest text-white/30 uppercase"
                onClick={(e) => e.stopPropagation()}
              >
                {lightboxIndex + 1} / {screenshots.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;
