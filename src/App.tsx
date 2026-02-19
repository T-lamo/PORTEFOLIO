import HeroSection from "@components/sections/Hero";
import ProjectsSection from "@components/sections/Projects";
import { Button } from "@components/shared/Button";
import { Navbar } from "@components/shared/Navbar";
import { Send } from "lucide-react";

// Imports des sections

/**
 * Composant Racine de l'application.
 * La structure utilise un overflow-x-hidden pour éviter les problèmes de layout
 * lors des animations d'entrée des composants motion.
 */
function App() {
  return (
    <main className="bg-background relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Barre de navigation fixe (Z-index élevé par défaut) */}
      <Navbar />

      <div className="flex w-full flex-col">
        {/* SECTION HERO (ID: about) */}
        <HeroSection />

        {/* SECTION PROJECTS (ID: projects) 
            Désormais encapsulée dans ProjectsSection avec gestion de modales
        */}
        <ProjectsSection />

        {/* SECTION CONTACT (ID: contact)
            Note : Tu pourras plus tard extraire cette section dans @components/sections/Contact.tsx
        */}
        <section
          id="contact"
          className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="text-4xl font-black tracking-widest uppercase md:text-6xl">Contact</h2>

          <div className="bg-primary mt-6 mb-10 h-1.5 w-24 rounded-full" />

          <p className="max-w-lg text-lg leading-relaxed text-white/50">
            Actuellement à la recherche d'une alternance en{" "}
            <span className="font-bold text-white">Data Engineering & IA</span>. Ouvert aux
            opportunités en CDI et projets ambitieux.
          </p>

          <div className="mt-12">
            <Button
              label="Discutons de votre projet"
              Icon={Send}
              variant="primary"
              onClick={() => (window.location.href = "mailto:amosdorceus2010@gmail.com")}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
