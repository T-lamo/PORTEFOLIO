import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion";

export const SectionWrapper = (Component: React.FC, idName: string) => {
  // On nomme la fonction pour corriger "Fast refresh can't handle anonymous components"
  const HOC = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-0 mx-auto max-w-7xl px-6 py-20"
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

  return HOC;
};
