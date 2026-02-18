import { useState, useEffect } from "react";

import { navLinks } from "@constants/index";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full py-4 transition-all duration-300 ${scrolled ? "bg-background/80 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-primary text-xl font-bold"
        >
          AD <span className="text-white">.dev</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-accent text-gray-300 transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setToggle(!toggle)}>{toggle ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface absolute top-full left-0 w-full p-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setToggle(false)}>
                <a href={`#${link.id}`} className="text-lg text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
