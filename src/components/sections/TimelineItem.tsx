// src/components/sections/TimelineItem.tsx
import { memo } from "react";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Zap } from "lucide-react";

interface ExperienceProps {
  experience: {
    company: string;
    role: string;
    period: string;
    icon: string;
    description: string;
    keyTasks: string[];
    stack: string[];
  };
  index: number;
  isMobileLayout?: boolean;
}

const TimelineItem = memo(({ experience, index, isMobileLayout = false }: ExperienceProps) => {
  const isEven = index % 2 === 0;

  // --- RENDU MOBILE (Carte horizontale - CENTRÉE) ---
  if (isMobileLayout) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // text-center pour tout centrer
        className="glass-card flex h-full min-h-[420px] flex-col items-center rounded-[2.5rem] border border-white/10 bg-white/5 p-6 text-center shadow-xl"
      >
        {/* Centrage icône et texte */}
        <div className="mb-4 flex flex-col items-center gap-2">
          <div className="bg-primary/10 text-primary rounded-2xl p-4">
            {experience.icon === "work" ? <Briefcase size={28} /> : <GraduationCap size={28} />}
          </div>
          <div>
            <h3 className="text-xl leading-tight font-black tracking-tight text-white uppercase">
              {experience.role}
            </h3>
            <p className="text-primary text-sm font-bold tracking-wide">{experience.company}</p>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] tracking-widest text-white/40 uppercase">
          <Calendar size={12} />
          {experience.period}
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70 italic">
          "{experience.description}"
        </p>

        <div className="mb-4 w-full space-y-2">
          {experience.keyTasks.slice(0, 2).map((task, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-xs text-white/60">
              <Zap size={12} className="text-accent shrink-0" />
              <span className="line-clamp-2">{task}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap justify-center gap-2">
          {experience.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-primary/80 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] tracking-tight uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  // --- RENDU DESKTOP (Sidebar - CENTRÉE) ---
  return (
    <div className="relative flex w-full items-center justify-between">
      <div className={`flex w-full ${isEven ? "justify-start" : "justify-end"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="glass-card group hover:border-primary/40 flex w-[46%] flex-col items-center rounded-2xl border border-white/10 bg-black/40 p-5 text-center transition-all"
        >
          {/* Icone agrandie et centrée */}
          <div className="text-primary mb-3 rounded-xl bg-white/5 p-2.5 transition-transform group-hover:scale-110">
            {experience.icon === "work" ? <Briefcase size={18} /> : <GraduationCap size={18} />}
          </div>

          <div className="mb-3 flex flex-col items-center gap-1">
            {/* Titre et rôle plus gros */}
            <h3 className="text-[13px] leading-tight font-black tracking-wide text-white uppercase">
              {experience.role}
            </h3>
            <p className="text-primary text-[11px] font-bold">{experience.company}</p>

            {/* Badge période plus lisible */}
            <div className="mt-1 flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/40">
              <Calendar size={11} />
              <span>{experience.period}</span>
            </div>
          </div>

          {/* Description centrée et texte agrandi */}
          <p className="mb-4 px-1 text-[11px] leading-relaxed text-white/60 italic">
            "{experience.description}"
          </p>

          {/* Stack technique mieux espacée */}
          <div className="mt-auto flex flex-wrap justify-center gap-1.5">
            {experience.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-primary/70 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] tracking-tighter uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Point central (Bille lumineuse) */}
      <div className="border-primary bg-background absolute left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
        <div className="bg-accent h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_#00f2ff]" />
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;
