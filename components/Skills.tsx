"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "./Marquee"; // Ensure path correct
import LogoPill from "./LogoPill";
import { site } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 space-y-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h2 className="text-6xl font-extrabold text-white tracking-tighter">
          Skills & Tools
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-white to-fuchsia-500" />
        <p className="text-zinc-400 max-w-lg mx-auto text-base mb-20">
          A mix of technologies I use daily to craft fast, scalable, and
          delightful digital experiences.
        </p>
      </motion.div>

      {/* Primary Skills Marquee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden backdrop-blur-xl 
          bg-gradient-to-r from-white/5 to-white/10 border border-white/10 shadow-2xl"
      >
        <Marquee speed={25} direction="left" className="py-4">
          {site.skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LogoPill>{skill}</LogoPill>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Secondary Tools Marquee */}
      {site.tools && site.tools.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden backdrop-blur-xl 
            bg-gradient-to-l from-white/5 to-white/10 border border-white/10 shadow-2xl"
        >
          <Marquee speed={30} direction="right" className="py-4">
            {site.tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LogoPill>{tool}</LogoPill>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      )}
    </section>
  );
}
