import { motion } from "framer-motion";
import { Terminal, Send } from "lucide-react";

import { heroTexts } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { CanvasContainer } from "../canvas/CanvasContainer";
import { Button } from "../shared/Button";
import { SectionWrapper } from "../shared/SectionWrapper";

// 1. On définit le composant avec un nom clair
const Hero = () => {
  const nameParts = heroTexts.name.split(" ");

  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center text-center">
      <CanvasContainer />

      <div className="relative z-10 w-full px-4">
        {/* Badge Terminal */}
        <motion.div
          variants={fadeIn("down", "spring", 0.2, 1)}
          className="glass-card text-accent border-accent/20 mb-8 inline-flex items-center gap-3 rounded-full border px-6 py-2 font-mono text-xs tracking-widest uppercase"
        >
          <Terminal size={16} className="text-primary" />
          <span className="animate-pulse">{heroTexts.subtitle}</span>
        </motion.div>

        {/* Titre Principal */}
        <motion.h1
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="text-6xl leading-[1.1] font-black tracking-tighter md:text-8xl lg:text-9xl"
        >
          <span className="text-white">{nameParts[0]}</span>{" "}
          <span className="text-primary relative italic">{nameParts[1]}</span>
        </motion.h1>

        {/* Rôle */}
        <motion.h2
          variants={fadeIn("up", "spring", 0.6, 1)}
          className="mt-6 text-xl font-bold tracking-[0.2em] text-white/80 uppercase"
        >
          {heroTexts.role}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/50 md:text-xl"
        >
          {heroTexts.description}
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeIn("up", "spring", 1, 1)}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button
            label={heroTexts.ctaPrimary}
            variant="primary"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Button
            label={heroTexts.ctaSecondary}
            Icon={Send}
            variant="outline"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </motion.div>
      </div>

      {/* Mouse Indicator */}
      <motion.div
        variants={fadeIn("", "tween", 1.5, 1)}
        className="absolute bottom-10 flex w-full items-center justify-center"
      >
        <a href="#projects">
          <div className="flex h-[50px] w-[30px] items-start justify-center rounded-3xl border-2 border-white/20 p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-primary h-2 w-2 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

// 2. On nomme explicitement le composant exporté pour le Fast Refresh
const HeroSection = SectionWrapper(Hero, "about");

export default HeroSection;
