"use client";
import { site } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "#intro", label: "Intro", color: "from-blue-500 to-cyan-500" },
  { href: "#skills", label: "Skills", color: "from-purple-500 to-pink-500" },
  {
    href: "#experience",
    label: "Experience",
    color: "from-green-500 to-emerald-500",
  },
  { href: "#projects", label: "Projects", color: "from-orange-500 to-red-500" },
  {
    href: "#education",
    label: "Education",
    color: "from-indigo-500 to-purple-500",
  },
  {
    href: "#certifications",
    label: "Certifications",
    color: "from-yellow-500 to-orange-500",
  },
  { href: "#blogs", label: "Blogs", color: "from-pink-500 to-rose-500" },
  { href: "#contact", label: "Contact", color: "from-teal-500 to-blue-500" },
];

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track scroll for enhanced background blur
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = links.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for magnetic effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="container py-3">
        <motion.nav
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            staggerChildren: 0.1,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          className={`
            relative overflow-hidden rounded-2xl px-6 py-4
            flex items-center justify-between
            backdrop-blur-2xl transition-all duration-500 ease-out
            border border-white/[0.08] dark:border-white/[0.05]
            ${
              scrolled
                ? "bg-black/80 dark:bg-black/90 shadow-2xl shadow-black/40"
                : "bg-black/40 dark:bg-black/60 shadow-xl shadow-black/20"
            }
          `}
          style={{
            background: `
              radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(255,255,255,0.04), 
                rgba(255,255,255,0.01)
              ),
              linear-gradient(135deg, 
                rgba(0,0,0,0.8) 0%, 
                rgba(20,20,20,0.9) 50%, 
                rgba(0,0,0,0.95) 100%
              )
            `,
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Enhanced grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Site name with enhanced styling */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative z-10"
          >
            <motion.span
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent
                drop-shadow-lg cursor-pointer select-none"
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => router.push("/")}
            >
              {site.name}

              {/* Subtle glow effect behind text */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.05 }}
            className="hidden lg:flex items-center gap-1"
          >
            {links.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <motion.li
                  key={link.href}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className={`
                      relative px-4 py-2 rounded-xl text-sm font-medium 
                      transition-all duration-300 group cursor-pointer
                      ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Dynamic background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${link.color} opacity-0 blur-sm`}
                      whileHover={{ opacity: 0.15 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/5 border border-white/10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      whileHover={{
                        boxShadow: `0 0 20px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <span className="relative z-10">{link.label}</span>
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-10 p-2 rounded-xl 
              bg-white/5 hover:bg-white/10 border border-white/10
              transition-all duration-300 group"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X size={20} className="text-white/90" />
              ) : (
                <Menu size={20} className="text-white/90" />
              )}
            </motion.div>

            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Ambient light effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{
              background: `radial-gradient(ellipse 300px 100px at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)`,
            }}
          />
        </motion.nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={closeMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-full left-0 right-0 mt-2 mx-4 z-50 lg:hidden
                  backdrop-blur-2xl bg-black/90 rounded-2xl
                  border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
              >
                {/* Mobile menu background effects */}
                <div
                  className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: { transition: { staggerChildren: 0.05 } },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className="relative z-10 p-4"
                >
                  {links.map((link, index) => {
                    const isActive = activeSection === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        variants={{
                          open: { opacity: 1, y: 0, scale: 1 },
                          closed: { opacity: 0, y: -10, scale: 0.95 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <motion.a
                          href={link.href}
                          onClick={closeMenu}
                          className={`
                            group flex items-center justify-between p-4 rounded-xl
                            transition-all duration-300 relative overflow-hidden
                            ${
                              isActive
                                ? "bg-white/10 text-white border border-white/20"
                                : "text-white/80 hover:text-white hover:bg-white/5"
                            }
                          `}
                          whileHover={{
                            x: 8,
                            backgroundColor: "rgba(255,255,255,0.08)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          {/* Dynamic gradient background */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0`}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                          />

                          <span className="font-medium relative z-10">
                            {link.label}
                          </span>

                          <motion.div
                            className="text-white/40 group-hover:text-white/80"
                            whileHover={{ x: 4 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          >
                            <ChevronRight size={18} />
                          </motion.div>

                          {/* Hover line effect */}
                          <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      </motion.div>
                    );
                  })}
                </motion.nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
