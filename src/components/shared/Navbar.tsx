// src/components/shared/Navbar.tsx

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

        {/* Desktop Navigation - ON FILTRE 'experience' ICI */}
        <LayoutGroup id="nav-pill">
          <ul className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-sm md:flex">
            {navLinks
              .filter((link) => link.id !== "experience") // Masqué sur Desktop
              .map((link, _index) => (
                <DesktopNavItem
                  key={link.id}
                  link={link}
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
            links={navLinks} // On garde tous les liens pour le mobile
            activeSection={activeSection}
            onClose={() => setIsOpen(false)}
            onSelect={handleNavClick}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// --- LOGO ---
const Logo = () => (
  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a href="#" className="group flex items-center gap-3">
      <div className="group-hover:border-primary/50 relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all">
        <img src="/logo.png" alt="Logo" className="h-full w-full object-contain p-1" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm leading-none font-black tracking-tighter text-white">
          AMOS<span className="text-primary">.</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Dev</span>
      </div>
    </a>
  </motion.div>
);

// --- DESKTOP ITEM ---
const DesktopNavItem = ({
  link,
  isActive,
  onClick,
}: {
  link: NavLink;
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
    >
      {link.title}
    </a>
    {isActive && (
      <motion.div
        layoutId="nav-active-bg"
        className="absolute inset-0 z-0 rounded-full border border-white/10 bg-white/10"
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
    )}
  </li>
);

// --- MOBILE MENU (Ajusté pour être moins massif) ---
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
    // Correction ici : h-[100dvh] pour éviter les bugs de barre d'adresse mobile
    // overflow-hidden pour empêcher le scroll parasite derrière
    className="bg-background/95 fixed inset-0 z-50 flex h-[100dvh] w-full flex-col items-center justify-center p-6 backdrop-blur-[15px]"
  >
    {/* Fond lumineux centré */}
    <div className="bg-primary/20 absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

    {/* Conteneur de la liste : on s'assure qu'il ne déborde pas */}
    <nav className="relative flex w-full flex-col items-center justify-center">
      <ul className="flex flex-col items-center gap-8">
        {links.map((link) => (
          <motion.li key={link.id} variants={linkVariants}>
            <a
              href={`#${link.id}`}
              onClick={() => {
                // Empêcher le comportement par défaut pour gérer le scroll manuellement
                onSelect(link.id);
                onClose();
              }}
              // Taille réduite text-3xl pour éviter les chevauchements sur petits écrans
              className={`block text-3xl font-black tracking-tight transition-all duration-300 sm:text-4xl ${
                activeSection === link.id
                  ? "text-primary scale-110"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  </motion.div>
);
