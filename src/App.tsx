import { CanvasContainer } from "@components/canvas/CanvasContainer";
import ContactSection from "@components/sections/Contact"; // Nouvel import
import HeroSection from "@components/sections/Hero";
import ProjectsSection from "@components/sections/Projects";
import { Navbar } from "@components/shared/Navbar";

function App() {
  return (
    <main className="bg-background relative min-h-screen w-full overflow-x-hidden text-white">
      <CanvasContainer />
      <Navbar />

      <div className="flex w-full flex-col gap-20">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
