"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, ExternalLink, Handshake } from "lucide-react";

const METRICS = [
  { label: "Projects", value: "10+" },
  { label: "Experience", value: "3+ yrs" },
  { label: "Domains", value: "Web, Mobile, AI/ML" },
  { label: "DSA", value: "50+ Problems" },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-900" />

        {/* Subtle floating glows */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <motion.div className="space-y-6">
            <Badge
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:scale-105 transition-transform rounded-xl"
            >
              Full-Stack Engineer • React • Next.js • DevOps
            </Badge>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Rahul
              </span>{" "}
              👋
              <br />I build{" "}
              <motion.span className="bg-gradient-to-r from-white to-fuchsia-500 bg-clip-text text-transparent">
                fast, scalable
              </motion.span>{" "}
              web & mobile apps.
            </motion.h1>

            <p className="text-zinc-400 md:text-lg max-w-xl">
              Developer-minded 3rd-year engineering student creating products
              with a balance of clean design, performance-first code, and user
              delight.
            </p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  asChild
                  className="gap-2 bg-white text-black hover:bg-zinc-200"
                >
                  <a href="#projects">
                    <Rocket className="h-4 w-4" /> View My Work
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                >
                  <a href="#contact">
                    <Handshake className="h-4 w-4" /> Let’s Collaborate
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Metrics */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {METRICS.map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 p-4 bg-zinc-950/50 backdrop-blur"
                >
                  <motion.p
                    className="text-xs md:text-sm font-semibold tabular-nums"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {m.value}
                  </motion.p>
                  <p className="text-xs text-zinc-400">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 p-10 shadow-2xl backdrop-blur-xl w-full max-w-md pb-24">
              <div className="flex flex-col items-center gap-6 text-center">
                {/* Profile Image with Gradient Glow */}
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-100 via-zinc-500 to-zinc-800 blur-2xl opacity-30"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative size-60 rounded-full overflow-hidden ring-4 ring-zinc-700 shadow-lg">
                    <img
                      src="/rahul-kapoor.png" // replace with your image path
                      alt="Rahul Kapoor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Minimal Text */}
                <h3 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 text-transparent tracking-tighter">
                  Rahul Kapoor
                </h3>
                <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
                  Always learning, always tinkering — chasing that “aha!” moment
                  in code.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
