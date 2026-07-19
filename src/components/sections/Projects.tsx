// src/components/sections/Projects.tsx
import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ProjectCard } from "./ProjectCard";
import { projectCategories, projects } from "../../constants";
import type { Project, ProjectCategory } from "../../types";
import { SectionWrapper } from "../shared/SectionWrapper";

type CategoryFilter = ProjectCategory | "all";

const filters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Tous" },
  ...projectCategories,
];

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects = ({ onSelectProject }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const counts = useMemo(() => {
    const byCategory = new Map<CategoryFilter, number>([["all", projects.length]]);
    for (const project of projects) {
      byCategory.set(project.category, (byCategory.get(project.category) ?? 0) + 1);
    }
    return byCategory;
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full">
      <motion.div className="flex flex-col items-center">
        <h2 className="text-4xl font-black tracking-widest uppercase md:text-6xl">
          Projets <span className="text-primary">Sélectionnés</span>
        </h2>
        <div className="bg-primary mt-6 h-1.5 w-24 rounded-full" />
      </motion.div>

      {/* Filtres par catégorie — scroll horizontal sur mobile, centrés sur desktop */}
      <div className="mt-12 flex w-full gap-3 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.id)}
              className={`focus-visible:ring-primary/60 relative shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none ${
                isActive
                  ? "border-transparent text-white"
                  : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-category-pill"
                  className="bg-primary shadow-primary/30 absolute inset-0 rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">
                {filter.label}
                <span className={`ml-1.5 ${isActive ? "opacity-70" : "opacity-50"}`}>
                  · {counts.get(filter.id) ?? 0}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              project={project}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ProjectsSection = SectionWrapper(Projects, "projects");
export default ProjectsSection;
