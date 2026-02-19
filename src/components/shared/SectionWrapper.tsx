// src/components/shared/SectionWrapper.tsx
import React from "react";

import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion";

export const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) => {
  const HOC = (props: P) => {
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
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};
