"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";

type Cert = {
  name: string;
  issuer: string;
  period: string;
  description: string;
  url?: string;
  badgeUrl?: string;
  skills?: string[];
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function CertificationCard({ c }: { c: Cert }) {
  return (
    <motion.article
      variants={card}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: "0 12px 24px rgba(6,182,212,0.15)",
      }}
      className="group relative flex flex-col rounded-2xl border border-white/10 
                 bg-gradient-to-r from-white/5 to-white/10 p-5 shadow-md backdrop-blur-md 
                 transition-all duration-200 h-full"
      tabIndex={0}
      aria-label={`${c.name} issued by ${c.issuer}`}
    >
      <header className="flex items-center gap-3 mb-3">
        {c.badgeUrl && (
          <img
            src={c.badgeUrl}
            alt={`${c.name} badge`}
            className="h-10 w-10 object-contain rounded-md"
            loading="lazy"
          />
        )}
        <div className="flex flex-col min-w-0">
          <h3 className="text-white font-semibold text-base md:text-lg line-clamp-2">
            {c.name}
          </h3>
          <p className="text-gray-400 text-sm">{c.issuer}</p>
        </div>
      </header>

      <p className="text-gray-300 text-sm mb-3">{c.description}</p>

      {c.skills?.length && (
        <div className="flex flex-wrap gap-2 mb-3">
          {c.skills.slice(0, 6).map((s, i) => (
            <span
              key={i}
              className="text-xs bg-black/50 text-gray-200 px-2 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
        <span>{c.period}</span>
        {c.url && (
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
          >
            View →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  const items: Cert[] = (site.certifications as any[]) || [];

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-20 space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <h2 className="text-6xl font-extrabold text-white tracking-tighter">
          Certifications
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-white to-fuchsia-500" />
        <p className="text-zinc-400 max-w-lg mx-auto text-base">
          Professional accomplishments and credentials I’ve earned over time.
        </p>
      </motion.div>

      {/* Cards */}
      <AnimatePresence initial={false}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((c, idx) => (
            <CertificationCard key={idx} c={c} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
