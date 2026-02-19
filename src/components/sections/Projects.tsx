// src/components/sections/Projects.tsx
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal"; // À créer ensuite
import { projects } from "../../constants";
import type { Project } from "../../types";
import { SectionWrapper } from "../shared/SectionWrapper";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full">
      <motion.div className="flex flex-col items-center">
        <h2 className="text-4xl font-black tracking-widest uppercase md:text-6xl">
          Projets <span className="text-primary">Sélectionnés</span>
        </h2>
        <div className="bg-primary mt-6 h-1.5 w-24 rounded-full" />
      </motion.div>

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            project={project as Project}
            onClick={() => setSelectedProject(project as Project)}
          />
        ))}
      </div>

      {/* Gestion de la Modale */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectsSection = SectionWrapper(Projects, "projects");
export default ProjectsSection;
