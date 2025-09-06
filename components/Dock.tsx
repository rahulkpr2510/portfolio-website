"use client";
import { site } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const links = [
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.socials.x, label: "X", Icon: Twitter },
  { href: site.socials.mail, label: "Mail", Icon: Mail },
  { href: site.socials.leetcode, label: "LeetCode", Icon: Code2 },
];

export function Dock() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const dockRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Auto-hide dock on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      setIsVisible(!(isScrollingDown && currentScrollY > 100));
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={dockRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-3 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <motion.div
            className="pointer-events-auto relative flex gap-4 px-6 py-4
              rounded-3xl border border-white/10
              backdrop-blur-2xl bg-black/40
              shadow-[0_8px_30px_rgba(0,0,0,0.6)]
              transition-all duration-500 ease-out"
            animate={{
              boxShadow: [
                "0 0 25px rgba(255,255,255,0.05)",
                "0 0 40px rgba(255,255,255,0.1)",
                "0 0 25px rgba(255,255,255,0.05)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Ambient reflection */}
            <div className="absolute inset-x-0 -bottom-8 h-12 bg-gradient-to-t from-white/10 to-transparent blur-xl" />

            {links.map(({ href, label, Icon }, i) => (
              <motion.div
                key={label}
                className="relative group"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center justify-center relative"
                  whileHover={{ scale: 1.25, y: -8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="p-4 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.08]
                      shadow-md shadow-black/40 relative"
                    animate={{
                      boxShadow:
                        hovered === i
                          ? "0 0 20px rgba(255,255,255,0.3)"
                          : "0 4px 12px rgba(0,0,0,0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      size={22}
                      className={`text-white transition-colors duration-300 ${
                        hovered === i ? "text-zinc-100" : "text-zinc-300"
                      }`}
                    />
                  </motion.div>
                </motion.a>

                {/* Tooltip */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      }}
                      className="absolute -top-12 -translate-x-1/2
                        px-3 py-1.5 rounded-lg text-xs font-medium
                        bg-black/90 text-white shadow-lg border border-white/10"
                    >
                      {label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
