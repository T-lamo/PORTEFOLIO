// src/hooks/useScroll.ts
import { useState, useEffect, useCallback } from "react";

export const useScroll = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isOverThreshold = window.scrollY > threshold;
    setScrolled((prev) => (prev !== isOverThreshold ? isOverThreshold : prev));
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrolled;
};
