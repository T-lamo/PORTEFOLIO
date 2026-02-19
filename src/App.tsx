// src/App.tsx
import { useState } from "react";

import { CanvasContainer } from "@components/canvas/CanvasContainer";
import ContactSection from "@components/sections/Contact";
import ExperienceTimeline from "@components/sections/ExperienceTimeline";
import HeroSection from "@components/sections/Hero";
import ProjectModal from "@components/sections/ProjectModal";
import ProjectsSection from "@components/sections/Projects";
import { Navbar } from "@components/shared/Navbar";
import { AnimatePresence } from "framer-motion";

import type { Project } from "./types";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="bg-background relative min-h-screen w-full text-white">
      {/* 1. CANVAS GLOBAL : Toujours en fond, sur toute la page */}
      <CanvasContainer />

      <Navbar />

      {/* 2. LAYOUT PRINCIPAL */}
      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row">
        {/* COLONNE GAUCHE : Scroll principal (Hero, Projets, Contact) */}
        <div className="flex w-full flex-col lg:w-[60%] xl:w-[65%]">
          <HeroSection />
          <div className="space-y-32 px-6 pb-20 md:px-12">
            <ProjectsSection onSelectProject={setSelectedProject} />
            {/* INJECTION MOBILE : Apparaît uniquement sous LG */}
            <section id="experience" className="py-10 lg:hidden">
              <ExperienceTimeline isMobile={true} />
            </section>
            <ContactSection />
          </div>
        </div>

        {/* COLONNE DROITE : Sidebar Fixée avec retrait Navbar */}
        <aside className="hidden lg:block lg:w-[40%] xl:w-[35%]">
          {/* On s'assure que le conteneur parent ne bloque pas le scroll */}
          <div className="sticky top-24 h-[calc(100vh-8rem)] pr-6 pl-4">
            <ExperienceTimeline />
          </div>
        </aside>
      </div>

      {/* 3. MODALE : Réintégrée avec AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
