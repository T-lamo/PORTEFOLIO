import type { Variants } from "framer-motion";

export const menuVariants: Variants = {
  closed: {
    opacity: 0,
    // On enlève le mouvement vertical y: -20
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  opened: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Plus rapide
      delayChildren: 0.1,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export const linkVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.95, // Les liens rétrécissent très légèrement
  },
  opened: {
    opacity: 1,
    scale: 1, // Ils reviennent à leur taille normale
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
