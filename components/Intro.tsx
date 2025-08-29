"use client";
import { site } from "@/content/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Section } from "./Section";
import { useState, useRef, useEffect } from "react";

export function Intro() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based subtle parallax
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -20]);
  const y2 = useTransform(scrollY, [0, 300], [0, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <Section id="intro">
      <div
        ref={sectionRef}
        className="relative min-h-[70vh] flex items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.02) 0%, transparent 50%)`,
        }}
      >
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 grid gap-12 lg:grid-cols-2 items-center w-full"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm">
              Available for Work
            </span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ y: y1 }}
            >
              <span className="block text-white">{site.hero.title}</span>
            </motion.h1>

            <p className="text-white/70 text-lg max-w-lg leading-relaxed">
              {site.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              {site.hero.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white/10 text-white/80 backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={site.hero.ctaHref}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold text-lg hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{site.hero.ctaText}</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Code2 size={18} />
                View Work
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            style={{ y: y2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gradient-to-br from-purple-900/10 to-pink-900/10 flex items-center justify-center shadow-lg">
              <img
                src="/PICTURE.png" // Replace with your image path
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />

              {/* Optional subtle ring for elegance */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
