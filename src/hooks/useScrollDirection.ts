import { useState, useEffect, useRef } from "react";

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      // On ne change l'état que si la direction change ET qu'on a scrollé de plus de 10px
      // (Évite les micro-sauts de la Navbar)
      if (direction !== scrollDir && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setScrollDir(direction);
      }

      // Toujours rester en "up" tout en haut
      if (currentScrollY <= 0) setScrollDir("up");

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDir]); // Dépendance stable

  return scrollDir;
};
