"use client";

import { Section } from "./Section";
import { site } from "@/content/site";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Twitter } from "lucide-react";

type Btn = { label: string; href: string; icon: React.ReactNode };

const buttons: Btn[] = [
  {
    label: "Mail",
    href: `${site.cta.buttons[0].href}`,
    icon: <Mail size={20} />,
  },
  {
    label: "Twitter",
    href: site.cta.buttons[1].href,
    icon: <Twitter size={20} />,
  },
];

function ElegantButton({ b, i }: { b: Btn; i: number }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useTransform(my, [-40, 40], [6, -6]);
  const rotY = useTransform(mx, [-40, 40], [-6, 6]);
  const scale = useTransform(mx, [-100, 100], [0.98, 1.02]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(x / 6);
    my.set(y / 6);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={b.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rotX as any,
        rotateY: rotY as any,
        scale: scale as any,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="group relative flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-black px-8 py-4 font-semibold text-white shadow-lg shadow-gray-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
      aria-label={b.label}
    >
      <span className="relative z-10 flex items-center gap-2">
        {b.icon}
        {b.label}
      </span>
      {/* subtle gradient glow */}
      <motion.span
        aria-hidden="true"
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-40 transition-all duration-300"
        style={{
          background:
            "linear-gradient(45deg, rgba(6,182,212,0.2), rgba(99,102,241,0.2))",
        }}
      />
    </motion.a>
  );
}

export function CTA() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      description="Feel free to reach out via mail or Twitter. Always happy to chat!"
    >
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {buttons.map((b, i) => (
          <ElegantButton key={i} b={b} i={i} />
        ))}
      </motion.div>
    </Section>
  );
}
