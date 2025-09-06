"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code } from "lucide-react";
import { site } from "@/content/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20 space-y-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h2 className="text-6xl font-extrabold text-white tracking-tighter">
          My Journey
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-white to-fuchsia-500" />
        <p className="text-zinc-400 max-w-lg mx-auto text-base">
          A quick look at the roles and projects that shaped me as a developer.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-fuchsia-500/30 pl-6 space-y-12">
        {site.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Node icon */}
            <span
              className="absolute -left-[40px] top-2 flex h-8 w-8 items-center 
              justify-center rounded-full border border-fuchsia-600/30 
              bg-black/80 text-fuchsia-500 group-hover:scale-110 
              transition-transform duration-300"
            >
              <Briefcase size={16} />
            </span>

            {/* Card */}
            <div
              className="rounded-2xl border border-white/10 bg-gradient-to-r 
              from-white/5 to-white/10 p-6 backdrop-blur-md shadow-md 
              hover:border-fuchsia-400/30 transition"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role} @ {exp.company}
                </h3>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
