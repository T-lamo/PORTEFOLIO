// App.tsx
import HeroSection from "@components/sections/Hero"; // Import du composant wrappé
import { Button } from "@components/shared/Button";
import { Navbar } from "@components/shared/Navbar";
import { Send } from "lucide-react";

function App() {
  return (
    <main className="bg-background relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Barre de navigation fixe */}
      <Navbar />

      <div className="flex w-full flex-col">
        {/* SECTION HERO (Inclut l'ID "about", le Canvas et le SectionWrapper) */}
        <HeroSection />

        {/* SECTION PROJECTS 
            Note : À terme, tu pourras créer @components/sections/Projects.tsx 
            et le wrapper comme le Hero.
        */}
        <section
          id="projects"
          className="bg-surface/30 flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-6"
        >
          <h2 className="text-center text-4xl font-black tracking-widest uppercase md:text-6xl">
            Projets <span className="text-primary">Sélectionnés</span>
          </h2>
          <div className="bg-primary mt-6 h-1.5 w-24 rounded-full" />

          <div className="mt-16 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Emplacement pour tes cartes de projets en Glassmorphism */}
            <div className="glass-card flex h-64 items-center justify-center rounded-3xl text-white/20 italic">
              Projet en cours de chargement...
            </div>
            <div className="glass-card flex h-64 items-center justify-center rounded-3xl text-white/20 italic">
              Projet en cours de chargement...
            </div>
          </div>
        </section>

        {/* SECTION CONTACT */}
        <section
          id="contact"
          className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="text-4xl font-black tracking-widest uppercase md:text-6xl">Contact</h2>
          <p className="mt-6 max-w-lg text-lg text-gray-400">
            Actuellement à la recherche d'une alternance en{" "}
            <span className="font-bold text-white">Data Engineering & IA</span>.
          </p>
          <div className="mt-10">
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
