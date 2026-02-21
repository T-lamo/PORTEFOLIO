import { motion } from "framer-motion";

export const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 mx-auto max-w-7xl px-6 py-20"
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };
