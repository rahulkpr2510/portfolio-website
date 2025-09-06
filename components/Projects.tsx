// components/Work.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, ExternalLink } from "lucide-react";
import { site } from "@/content/site";

// Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Work() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h2 className="text-6xl font-extrabold text-white tracking-tighter">
          Selected Work
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-white to-fuchsia-500" />
        <p className="text-zinc-400 max-w-lg mx-auto text-base">
          Proof over promises — projects with measurable impact.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-6"
      >
        {site.projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0px 10px 35px rgba(236, 72, 153, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 hover:border-fuchsia-500/50 transition-all cursor-pointer flex flex-col gap-4 overflow-hidden"
            onClick={() => window.open(p.link, "_blank")}
          >
            {/* Preview Image */}
            <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 relative">
              <motion.img
                src={p.imageUrl}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Title + Actions */}
            <div className="px-2">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold tracking-tight text-lg">
                  {p.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={p.repo}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-md border border-zinc-700 text-zinc-400 hover:text-white hover:border-fuchsia-500/50 transition-colors"
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                  {p.link !== "#" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(p.link, "_blank");
                      }}
                      className="p-1.5 rounded-md border border-zinc-700 text-zinc-400 hover:text-white hover:border-fuchsia-500/50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-sm text-zinc-400">{p.summary}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 px-2">
              {p.tags.map((t) => (
                <motion.div
                  key={t}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs rounded-md border border-zinc-700 bg-zinc-800/70 text-zinc-300 px-2 py-0.5"
                >
                  {t}
                </motion.div>
              ))}
            </div>

            {/* Impacts */}
            <div className="flex flex-col gap-1 text-xs text-zinc-400 px-2 pb-3 mt-auto">
              {p.impact.map((i, idx) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="inline-flex items-center gap-1"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> {i}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
