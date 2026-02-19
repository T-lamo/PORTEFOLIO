// src/components/sections/ExperienceTimeline.tsx
import { useRef, useEffect, useState } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import TimelineItem from "./TimelineItem";
import { experiences } from "../../constants";

interface ExperienceTimelineProps {
  isMobile?: boolean;
}

const ExperienceTimeline = ({ isMobile = false }: ExperienceTimelineProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = droite/bas, -1 = gauche/haut
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Animation verticale (Desktop uniquement)
  const { scrollYProgress } = useScroll({
    container: isMobile ? undefined : scrollContainerRef,
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const springDotTop = useSpring(dotTop, { stiffness: 500, damping: 50 });

  // 2. Logique d'Auto-Scroll (Vertical sur Desktop / Horizontal sur Mobile)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoScrolling) {
      interval = setInterval(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        if (isMobile) {
          // --- AUTO-SCROLL HORIZONTAL (MOBILE) ---
          const maxScrollX = container.scrollWidth - container.clientWidth;
          const currentScrollX = container.scrollLeft;

          if (currentScrollX >= maxScrollX - 1 && direction === 1) setDirection(-1);
          else if (currentScrollX <= 1 && direction === -1) setDirection(1);

          container.scrollBy({ left: direction * 0.8, behavior: "auto" });
        } else {
          // --- AUTO-SCROLL VERTICAL (DESKTOP) ---
          const maxScrollY = container.scrollHeight - container.clientHeight;
          const currentScrollY = container.scrollTop;

          if (currentScrollY >= maxScrollY - 1 && direction === 1) setDirection(-1);
          else if (currentScrollY <= 1 && direction === -1) setDirection(1);

          container.scrollBy({ top: direction * 0.6, behavior: "auto" });
        }
      }, 25);
    }

    return () => clearInterval(interval);
  }, [isAutoScrolling, direction, isMobile]);

  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  // --- RENDU MOBILE ---
  if (isMobile) {
    return (
      <section id="experience" className="w-full overflow-hidden py-16">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-3xl font-black tracking-widest text-white uppercase">
            Mon <span className="text-primary">Parcours</span>
          </h2>
          <div className="bg-primary mt-3 h-1 w-12 rounded-full" />
        </div>

        <div
          ref={scrollContainerRef}
          onWheel={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experiences.map((exp, index) => (
            <div key={index} className="w-[85vw] flex-shrink-0 sm:w-[400px]">
              <TimelineItem experience={exp} index={index} isMobileLayout={true} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // --- RENDU DESKTOP ---
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="z-30 flex flex-col items-center border-b border-white/5 bg-black/30 p-6">
        <h2 className="text-center text-2xl font-black tracking-widest text-white uppercase">
          Mon <span className="text-primary">Parcours</span>
        </h2>
        <div className="bg-primary mt-4 h-1 w-16 rounded-full" />
      </div>

      <div
        ref={scrollContainerRef}
        onWheel={handleUserInteraction}
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
        className="custom-scrollbar relative flex-1 overflow-x-hidden overflow-y-auto p-6"
      >
        <div className="relative mx-auto w-full pb-20">
          <div className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 rounded-full bg-white/10">
            <motion.div
              className="from-primary to-accent absolute top-0 w-full origin-top bg-gradient-to-b shadow-[0_0_15px_#6366f1]"
              style={{ height: "100%", scaleY }}
            />
          </div>
          <motion.div
            className="bg-accent absolute left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full shadow-[0_0_20px_#00f2ff]"
            style={{ top: springDotTop }}
          />
          <div className="space-y-20 pt-10">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
