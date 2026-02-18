import { motion } from "framer-motion";

export const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-0 mx-auto max-w-7xl px-6 py-20"
        id={idName}
      >
        {/* Ancre pour la navigation */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 1.25, delay: 0.2 },
            },
          }}
        >
          <Component />
        </motion.div>
      </motion.section>
    );
  };
