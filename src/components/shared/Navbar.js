import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("nav", { className: `fixed z-50 w-full py-4 transition-all duration-300 ${scrolled ? "bg-background/80 shadow-lg backdrop-blur-md" : "bg-transparent"}`, children: [_jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [_jsxs(motion.div, { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 }, className: "text-primary text-xl font-bold", children: ["AD ", _jsx("span", { className: "text-white", children: ".dev" })] }), _jsx("ul", { className: "hidden gap-8 md:flex", children: navLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: `#${link.id}`, className: "hover:text-accent text-gray-300 transition-colors", children: link.title }) }, link.id))) }), _jsx("div", { className: "flex items-center md:hidden", children: _jsx("button", { onClick: () => setToggle(!toggle), children: toggle ? _jsx(X, {}) : _jsx(Menu, {}) }) })] }), toggle && (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "bg-surface absolute top-full left-0 w-full p-6 md:hidden", children: _jsx("ul", { className: "flex flex-col gap-4", children: navLinks.map((link) => (_jsx("li", { onClick: () => setToggle(false), children: _jsx("a", { href: `#${link.id}`, className: "text-lg text-white", children: link.title }) }, link.id))) }) }))] }));
};
