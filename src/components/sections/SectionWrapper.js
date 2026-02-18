import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const SectionWrapper = (Component, idName) => function HOC() {
    return (_jsxs(motion.section, { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.1 }, className: "relative z-0 mx-auto max-w-7xl px-6 py-20", id: idName, children: [_jsx("span", { className: "hash-span", id: idName, children: "\u00A0" }), _jsx(motion.div, { variants: {
                    hidden: { opacity: 0, y: 50 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", duration: 1.25, delay: 0.2 },
                    },
                }, children: _jsx(Component, {}) })] }));
};
