"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

// Social links definition
const socialLinks = [
  { label: "Mail", href: "mailto:rahul@example.com", Icon: Mail },
  {
    label: "Twitter",
    href: "https://twitter.com/rahulkapoor2510",
    Icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahulkpr2510",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rahulkapoor2510",
    Icon: Instagram,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setHasError(false);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Message sent! I'll reply soon 🎉");
        if (formRef.current) formRef.current.reset();
      } else {
        setStatus("Something went wrong, try again.");
        setHasError(true);
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 space-y-16">
      {/* Headline & Blurb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h2 className="text-6xl font-extrabold text-white tracking-tighter">
          Say Hi 👋
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-white to-fuchsia-500" />
        <p className="text-zinc-400 max-w-lg mx-auto text-base">
          Collaboration? Brainstorming? Startup advice? Drop your thoughts below
          and let’s chat.
        </p>
      </motion.div>

      {/* Form & Social Grid */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Left: Inquiry Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-sm backdrop-blur-sm"
        >
          <p className="text-zinc-400 mt-2 text-sm">
            Share a few details and I’ll get back with a scoped plan.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {["name", "email", "company"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={
                  field === "company" ? "Project Idea" : `Your ${field}`
                }
                className="w-full rounded-md px-3 py-2 bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 
                           focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-500 transition-all"
              />
            ))}

            <textarea
              name="message"
              rows={5}
              placeholder="Briefly describe what you want to build."
              className="w-full rounded-md px-3 py-2 bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 
                         focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-500/40 transition-all"
            />

            <div className="flex items-center justify-between">
              <button
                disabled={loading}
                type="submit"
                className="px-4 py-2 rounded-md border border-zinc-700 text-sm text-zinc-200 hover:border-fuchsia-400/40 hover:text-fuchsia-300 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status && (
              <motion.div
                className="text-sm text-zinc-300 mt-2"
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {status}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Decorative Glow */}
        <motion.div
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-sky-400/15 blur-2xl pointer-events-none opacity-80"
          animate={{ scaleX: [1, 1.05, 1], opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        {/* --- Social Connect --- */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-zinc-900/60 to-zinc-900/40 rounded-3xl p-8 border border-fuchsia-900/20 shadow-lg"
        >
          <p className="text-zinc-400 font-medium mb-1 text-center">
            Or connect instantly:
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {socialLinks.map(({ href, Icon, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-300/20 text-white shadow-inner 
                  hover:scale-110 hover:shadow-xl hover:text-fuchsia-300 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
          {/* Direct email link */}
          <motion.a
            href="mailto:rahul@example.com"
            className="mt-4 bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 text-transparent font-semibold inline-flex items-center gap-2 transition-all"
            whileHover={{ scale: 1.04 }}
          >
            <Mail className="w-5 h-5" />
            rahulkpr1972@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
