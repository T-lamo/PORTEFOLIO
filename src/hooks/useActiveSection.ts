import { useState, useEffect, useRef } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  // On stabilise la chaîne de caractères pour éviter les warnings du linter
  const idsString = JSON.stringify(sectionIds);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
    // On utilise idsString qui est une string (valeur stable)
  }, [idsString, sectionIds]);

  return activeSection;
};
