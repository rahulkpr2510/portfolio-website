"use client";
import { Section } from "./Section";
import { site } from "@/content/site";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Roles, timelines, and highlight projects."
    >
      <div className="relative flex flex-col gap-8">
        {site.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              y: -4,
              boxShadow: "0 12px 24px rgba(6,182,212,0.15)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="relative flex flex-col sm:flex-row sm:items-start gap-4 p-6 rounded-2xl border border-cyan-400/20 bg-black backdrop-blur-md shadow-md"
          >
            {/* Timeline accent */}
            <div className="absolute left-3 top-0 bottom-0 w-1 rounded-full bg-cyan-400/50 sm:left-6" />

            <div className="flex-1 sm:pl-6 relative z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                <h3 className="text-lg font-semibold text-white">
                  {exp.company}
                </h3>
                <span className="text-xs text-gray-400">{exp.period}</span>
              </div>

              <p className="text-sm text-cyan-200 mt-1 font-medium">
                {exp.role}
              </p>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
