import { Button } from "@components/shared/Button"; // Le bouton qu'on a créé au début
import { Navbar } from "@components/shared/Navbar";
import { Send } from "lucide-react";

function App() {
  return (
    <main className="bg-background relative z-0 min-h-screen w-full">
      <Navbar />

      {/* Test temporaire pour voir si tout s'affiche */}
      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-6 text-6xl font-bold">
          Setup <span className="text-primary">Réussi</span>
        </h1>
        <Button label="Me contacter" Icon={Send} variant="primary" />
      </section>
    </main>
  );
}

export default App;
