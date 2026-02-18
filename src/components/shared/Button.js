import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Button = ({ label, Icon, variant = "primary", onClick }) => {
    const styles = {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary: "bg-secondary text-white hover:opacity-90",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };
    return (_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: onClick, className: `flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all ${styles[variant]}`, children: [label, Icon && _jsx(Icon, { size: 18 })] }));
};
