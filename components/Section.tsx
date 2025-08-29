"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

export function Section({
  id,
  title,
  description,
  children,
  variant = "default",
}: {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  variant?: "default" | "accent" | "minimal";
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations for scroll effects
  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const backgroundY = useTransform(springScrollY, [0, 1], ["0%", "50%"]);
  const scale = useTransform(springScrollY, [0, 0.5, 1], [0.8, 1, 1.1]);

  // Mouse tracking for dynamic effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Intersection observer for enhanced in-view detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Variant-specific styling
  const getVariantClasses = () => {
    switch (variant) {
      case "accent":
        return "from-purple-500/25 via-pink-500/15 to-blue-500/20";
      case "minimal":
        return "from-gray-500/10 via-slate-500/5 to-zinc-500/10";
      default:
        return "from-indigo-500/20 via-purple-400/10 to-pink-500/15";
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "relative w-full py-24 sm:py-32 flex justify-center overflow-hidden",
        "min-h-screen flex items-center"
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
    >
      {/* Enhanced Background System */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient blobs with parallax */}
        <motion.div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%] 
            bg-gradient-to-tr ${getVariantClasses()} blur-3xl rounded-full opacity-60`}
          style={{ y: backgroundY }}
        />

        <motion.div
          className="absolute bottom-0 right-1/3 w-[50%] h-[50%] 
            bg-gradient-to-bl from-pink-500/20 via-fuchsia-400/10 to-cyan-500/15 
            blur-3xl rounded-full opacity-40"
          style={{
            y: useTransform(springScrollY, [0, 1], ["50%", "-20%"]),
            scale: scale,
          }}
        />

        {/* Dynamic mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255,255,255,0.06) 0%, 
              rgba(147,51,234,0.08) 30%, 
              rgba(236,72,153,0.04) 60%, 
              transparent 100%)`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            backgroundPosition: isInView ? ["0% 0%", "100% 100%"] : "0% 0%",
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="relative w-full max-w-6xl px-6 sm:px-10"
      >
        {/* Enhanced Title Section */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            {/* Title with sophisticated effects */}
            <motion.h2
              className="relative inline-block text-4xl sm:text-6xl font-bold tracking-tight mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Multi-layer text effect */}
              <span className="relative z-10 bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
                {title}
              </span>

              {/* Glow effect behind text */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 bg-clip-text text-transparent blur-sm"
                animate={{
                  opacity: isInView ? [0.5, 0.8, 0.5] : 0.5,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {title}
              </motion.span>

              {/* Enhanced underline with gradient animation */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  background: `linear-gradient(90deg, 
                    rgb(99, 102, 241) 0%, 
                    rgb(236, 72, 153) 50%, 
                    rgb(168, 85, 247) 100%)`,
                }}
              />

              {/* Animated particles around title */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  style={{
                    left: `${-10 + i * 120}%`,
                    top: `${-20 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7,
                  }}
                />
              ))}
            </motion.h2>

            {/* Enhanced Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto
                  bg-gradient-to-r from-white/80 via-white/70 to-white/60 bg-clip-text"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Enhanced Glass Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
          className="relative group"
        >
          {/* Main glass container */}
          <div
            className="relative backdrop-blur-2xl rounded-3xl p-8 sm:p-12 overflow-hidden
              border border-white/[0.08] shadow-2xl"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(255,255,255,0.08) 0%, 
                  rgba(255,255,255,0.02) 50%, 
                  rgba(0,0,0,0.1) 100%
                ),
                linear-gradient(135deg, 
                  rgba(255,255,255,0.06) 0%, 
                  rgba(255,255,255,0.02) 50%, 
                  rgba(0,0,0,0.05) 100%
                )
              `,
            }}
          >
            {/* Enhanced noise texture */}
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Subtle inner glow */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), 
                           inset 0 -1px 0 rgba(255,255,255,0.05)`,
              }}
            />

            {/* Dynamic border glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                transition: { duration: 0.3 },
              }}
              style={{
                background: `linear-gradient(135deg, 
                  rgba(147,51,234,0.2) 0%, 
                  rgba(236,72,153,0.2) 50%, 
                  rgba(59,130,246,0.2) 100%)`,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "xor",
                padding: "1px",
              }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Corner accent elements */}
            {[
              { position: "top-4 left-4", delay: 0 },
              { position: "top-4 right-4", delay: 0.1 },
              { position: "bottom-4 left-4", delay: 0.2 },
              { position: "bottom-4 right-4", delay: 0.3 },
            ].map((corner, i) => (
              <motion.div
                key={i}
                className={`absolute ${corner.position} w-2 h-2 rounded-full 
                  bg-gradient-to-r from-purple-400 to-pink-400 opacity-0`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.8, 0.4],
                }}
                transition={{
                  delay: corner.delay + 0.6,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Floating accent lines */}
          <motion.div
            className="absolute -top-1 left-8 right-8 h-[1px] bg-gradient-to-r 
              from-transparent via-white/20 to-transparent opacity-0"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />

          <motion.div
            className="absolute -bottom-1 left-8 right-8 h-[1px] bg-gradient-to-r 
              from-transparent via-purple-400/30 to-transparent opacity-0"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>
      </motion.div>

      {/* Ambient lighting effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse 800px 400px at 50% 100%, 
            rgba(147,51,234,0.03) 0%, 
            transparent 70%)`,
        }}
      />
    </section>
  );
}
