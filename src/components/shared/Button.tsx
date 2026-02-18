import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  label: string;
  Icon?: LucideIcon;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export const Button = ({ label, Icon, variant = "primary", onClick }: ButtonProps) => {
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all ${styles[variant]}`}
    >
      {label}
      {Icon && <Icon size={18} />}
    </motion.button>
  );
};
