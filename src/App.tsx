// App.tsx
import { Button } from "@components/shared/Button";
import { Navbar } from "@components/shared/Navbar";
import { heroTexts } from "@constants";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

function App() {
  return (
    <main className="bg-background relative min-h-screen w-full text-white">
      <Navbar />

      <div className="flex w-full flex-col">
        {/* SECTION ABOUT (Sert de Hero ici) */}
        <section
          id="about"
          className="flex h-screen flex-col items-center justify-center border-b border-white/10 px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-6xl font-black md:text-8xl"
          >
            {heroTexts.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary mb-6 text-xl font-bold tracking-[0.3em] uppercase md:text-2xl"
          >
            {heroTexts.role}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-400"
          >
            {heroTexts.description}
          </motion.p>
          <Button label="Me contacter" Icon={Send} variant="primary" />
        </section>

        {/* SECTION PROJECTS */}
        <section
          id="projects"
          className="bg-surface/30 flex h-screen flex-col items-center justify-center border-b border-white/10"
        >
          <h2 className="text-4xl font-black tracking-widest uppercase md:text-6xl">Projets</h2>
          <div className="bg-primary mt-4 h-1 w-20" />
          <p className="mt-8 text-gray-400 italic">Défilement en cours de détection...</p>
        </section>

        {/* SECTION CONTACT */}
        <section id="contact" className="flex h-screen flex-col items-center justify-center">
          <h2 className="text-4xl font-black tracking-widest uppercase md:text-6xl">Contact</h2>
          <p className="mt-6 text-gray-400">Prêt à démarrer un projet ?</p>
          <div className="mt-10">
            <Button label="Envoyer un message" Icon={Send} variant="outline" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
