"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

const links = [
  { href: "#intro", label: "Intro" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = links.find(({ href }) => {
        const el = document.getElementById(href.slice(1));
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      setActiveSection(current?.href || "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-black tracking-tighter cursor-pointer bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 text-transparent bg-clip-text"
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {site.name}
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md bg-black hover:bg-black/50"
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          {isMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-black/90 backdrop-blur-md border-t border-gray-800"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative text-base font-medium ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-auto h-[2px] bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
