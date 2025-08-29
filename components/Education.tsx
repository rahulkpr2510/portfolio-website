"use client";
import { Section } from "./Section";
import { site } from "@/content/site";
import { motion } from "framer-motion";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      description="Institutes, courses, and key highlights."
      variant="minimal"
    >
      <div className="flex flex-col gap-6">
        {site.education.map((ed, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="relative flex flex-col p-6 rounded-2xl border border-gray-700 bg-black shadow-md"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-6 w-14 h-1 rounded-full bg-gray-600" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 relative z-10">
              {/* Optional logo */}
              {/* {ed.logoUrl && (
                <img
                  src={ed.logoUrl}
                  alt={`${ed.institute} logo`}
                  className="h-10 w-10 rounded-md object-contain grayscale"
                />
              )} */}

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h3 className="text-lg font-semibold text-white">
                    {ed.institute}
                  </h3>
                  <span className="text-xs text-gray-400">{ed.period}</span>
                </div>
                <p className="text-sm text-gray-300 font-medium mt-1">
                  {ed.course}
                </p>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {ed.description}
                </p>

                {ed.projects?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ed.projects.map((p, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-200 border border-gray-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
