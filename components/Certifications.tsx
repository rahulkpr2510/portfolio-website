"use client";

import { Section } from "./Section";
import { site } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";

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

function ProfessionalCard({ c }: { c: Cert }) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -3, scale: 1.02 }}
      className="group relative rounded-xl border border-gray-700 bg-black p-5 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-full"
      tabIndex={0}
      aria-label={`${c.name} issued by ${c.issuer}`}
    >
      <header className="flex items-center gap-3 mb-2">
        {c.badgeUrl && (
          <img
            src={c.badgeUrl}
            alt=""
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
              className="text-xs bg-black text-gray-200 px-2 py-1 rounded-full"
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
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            View →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Certifications() {
  const items: Cert[] = (site.certifications as any[]) || [];

  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Professional accomplishments and credentials."
    >
      <AnimatePresence initial={false}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((c, idx) => (
            <ProfessionalCard key={idx} c={c} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
