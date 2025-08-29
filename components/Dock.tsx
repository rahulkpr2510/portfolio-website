"use client";
import { site } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const links = [
  {
    href: site.socials.github,
    label: "GitHub",
    Icon: Github,
    color: "from-purple-500 to-pink-500",
  },
  {
    href: site.socials.linkedin,
    label: "LinkedIn",
    Icon: Linkedin,
    color: "from-blue-500 to-cyan-500",
  },
  {
    href: site.socials.x,
    label: "X",
    Icon: Twitter,
    color: "from-gray-400 to-white",
  },
  {
    href: site.socials.mail,
    label: "Mail",
    Icon: Mail,
    color: "from-red-500 to-orange-500",
  },
  {
    href: site.socials.leetcode,
    label: "LeetCode",
    Icon: Code2,
    color: "from-yellow-500 to-amber-500",
  },
];

export function Dock() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dockRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for magnetic effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Spring animations for smooth interactions
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };

  return (
    <AnimatePresence>
      <motion.div
        ref={dockRef}
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
        }}
        className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        {/* Background with enhanced glassmorphism */}
        <motion.div
          className="pointer-events-auto relative overflow-hidden
              px-6 py-4 flex gap-3 rounded-[32px]
              backdrop-blur-2xl bg-gradient-to-r from-black/40 via-black/30 to-black/40
              dark:from-black/60 dark:via-black/40 dark:to-black/60
              border border-white/[0.08] dark:border-white/[0.05]
              shadow-2xl shadow-black/40
              transition-all duration-500 ease-out"
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          style={{
            background: `
                radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255,255,255,0.06), 
                  rgba(255,255,255,0.01)
                ),
                linear-gradient(135deg, 
                  rgba(0,0,0,0.7) 0%, 
                  rgba(20,20,20,0.8) 50%, 
                  rgba(0,0,0,0.9) 100%
                )
              `,
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Enhanced grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Dynamic glow effect */}
          <motion.div
            className="absolute inset-0 rounded-[32px] pointer-events-none"
            animate={{
              background:
                hovered !== null
                  ? `radial-gradient(circle at ${
                      (hovered + 1) * (100 / (links.length + 1))
                    }% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)`
                  : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Social links with enhanced animations */}
          {links.map(({ href, label, Icon, color }, i) => {
            const distance = mousePosition.x
              ? Math.abs(mousePosition.x - (i + 1) * 60)
              : 100;
            const magneticStrength = Math.max(0, (50 - distance) / 50);

            return (
              <motion.div
                key={label}
                initial={{ y: 20, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  ...springConfig,
                }}
                className="relative group"
              >
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="relative flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{
                    y: -8,
                    scale: 1.2,
                    rotate: [0, -2, 2, 0],
                  }}
                  whileTap={{
                    scale: 0.85,
                    rotate: 5,
                  }}
                  animate={{
                    x:
                      magneticStrength *
                      (mousePosition.x > (i + 1) * 60 ? 3 : -3),
                    y: magneticStrength * -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    rotate: { duration: 0.6 },
                  }}
                >
                  {/* Icon container with sophisticated effects */}
                  <motion.div
                    className={`
                        relative p-4 rounded-2xl flex items-center justify-center
                        backdrop-blur-md overflow-hidden
                        transition-all duration-500 ease-out
                      `}
                    style={{
                      background: `
                          linear-gradient(135deg, 
                            rgba(255,255,255,0.1) 0%, 
                            rgba(255,255,255,0.05) 50%, 
                            rgba(255,255,255,0.02) 100%
                          )
                        `,
                      boxShadow: `
                          inset 0 1px 0 rgba(255,255,255,0.1),
                          0 4px 20px rgba(0,0,0,0.3),
                          0 1px 2px rgba(0,0,0,0.2)
                        `,
                    }}
                    animate={{
                      boxShadow:
                        hovered === i
                          ? `
                            inset 0 1px 0 rgba(255,255,255,0.2),
                            0 8px 40px rgba(0,0,0,0.4),
                            0 4px 20px rgba(255,255,255,0.1)
                          `
                          : `
                            inset 0 1px 0 rgba(255,255,255,0.1),
                            0 4px 20px rgba(0,0,0,0.3),
                            0 1px 2px rgba(0,0,0,0.2)
                          `,
                    }}
                  >
                    {/* Dynamic gradient background */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${color} opacity-0`}
                      animate={{
                        opacity: hovered === i ? 0.2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Ripple effect on click */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={false}
                      whileTap={{
                        background: [
                          "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                          "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                          "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                        ],
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Icon with enhanced styling */}
                    <motion.div
                      animate={{
                        rotate: hovered === i ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        repeat: hovered === i ? Infinity : 0,
                        repeatDelay: 2,
                      }}
                    >
                      <Icon
                        size={22}
                        className="text-white/90 group-hover:text-white 
                            transition-all duration-300 ease-out
                            drop-shadow-lg"
                        style={{
                          filter:
                            hovered === i
                              ? `drop-shadow(0 0 8px rgba(255,255,255,0.4))`
                              : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Enhanced tooltip */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2
                            px-3 py-1.5 text-xs font-medium rounded-lg
                            bg-black/90 text-white whitespace-nowrap
                            backdrop-blur-md shadow-xl border border-white/10
                            before:content-[''] before:absolute before:top-full 
                            before:left-1/2 before:transform before:-translate-x-1/2
                            before:border-4 before:border-transparent 
                            before:border-t-black/90"
                      >
                        {label}

                        {/* Tooltip glow effect */}
                        <div className="absolute inset-0 rounded-lg bg-white/5 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              </motion.div>
            );
          })}

          {/* Ambient light effect */}
          <motion.div
            className="absolute inset-0 rounded-[32px] pointer-events-none"
            animate={{
              background: `radial-gradient(ellipse 200px 100px at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
