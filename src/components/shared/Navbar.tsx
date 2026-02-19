import { useState, useEffect, useCallback, useMemo } from "react";

import { navLinks } from "@constants";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";

import { menuVariants, linkVariants } from "@/constants/Navbar.animations";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScroll } from "@/hooks/useScroll";
import type { NavLink } from "@/types/index";

export const Navbar = () => {
  const isScrolled = useScroll(20);
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);
  const activeSectionFromScroll = useActiveSection(sectionIds);

  const [clickedSection, setClickedSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Dérivation d'état pour éviter les rendus en cascade
  const activeSection = clickedSection || activeSectionFromScroll || (navLinks[0]?.id ?? "about");

  if (clickedSection === activeSectionFromScroll && clickedSection !== null) {
    setClickedSection(null);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleNavClick = useCallback((id: string) => {
    setClickedSection(id);
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 z-50 w-full py-4 transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 border-b border-white/10 shadow-2xl backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />

        {/* Desktop Navigation - Style "Pill" Glassmorphism */}
        <LayoutGroup id="nav-pill">
          <ul className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-sm md:flex">
            {navLinks.map((link, index) => (
              <DesktopNavItem
                key={link.id}
                link={link}
                index={index}
                isActive={activeSection === link.id}
                onClick={() => handleNavClick(link.id)}
              />
            ))}
          </ul>
        </LayoutGroup>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-[60] cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur-md"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            links={navLinks}
            activeSection={activeSection}
            onClose={() => setIsOpen(false)}
            onSelect={handleNavClick}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// --- LOGO AVEC TON LOGO.PNG ---
const Logo = () => (
  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a href="#" className="group flex items-center gap-3">
      {/* Conteneur du logo */}
      <div className="group-hover:border-primary/50 relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all">
        <img
          src="/logo.png"
          alt="Amos Dorceus Logo"
          className="h-full w-full object-contain p-1" // 'contain' pour ne pas déformer
        />
      </div>

      {/* Texte à côté du logo */}
      <div className="flex flex-col justify-center">
        <span className="text-sm leading-none font-black tracking-tighter text-white">
          AMOS<span className="text-primary">.</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Dev</span>
      </div>
    </a>
  </motion.div>
);

const DesktopNavItem = ({
  link,
  isActive,
  onClick,
}: {
  link: NavLink;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <li className="relative">
    <a
      href={`#${link.id}`}
      onClick={onClick}
      className={`relative z-10 block px-4 py-2 text-[10px] font-bold uppercase transition-all duration-300 ${
        isActive ? "text-white" : "text-white/40 hover:text-white"
      }`}
      style={{ letterSpacing: isActive ? "0.2em" : "0.1em" }}
    >
      {link.title}
    </a>

    {isActive && (
      <motion.div
        layoutId="nav-active-bg"
        className="absolute inset-0 z-0 rounded-full border border-white/10 bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
    )}
  </li>
);

const MobileMenu = ({
  links,
  activeSection,
  onClose,
  onSelect,
}: {
  links: NavLink[];
  activeSection: string;
  onClose: () => void;
  onSelect: (id: string) => void;
}) => (
  <motion.div
    variants={menuVariants}
    initial="closed"
    animate="opened"
    exit="closed"
    className="bg-background/80 fixed inset-0 z-50 flex flex-col items-center justify-center p-6 backdrop-blur-[20px]"
  >
    <div className="bg-primary/20 absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

    <ul className="flex flex-col items-center gap-8">
      {links.map((link) => (
        <motion.li key={link.id} variants={linkVariants}>
          <a
            href={`#${link.id}`}
            onClick={() => {
              onSelect(link.id);
              onClose();
            }}
            className={`block text-4xl font-black tracking-tighter transition-all duration-300 sm:text-5xl ${
              activeSection === link.id ? "text-primary scale-110" : "text-white/20"
            }`}
          >
            {link.title}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);
