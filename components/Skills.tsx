"use client";
import { Section } from "./Section";
import { site } from "@/content/site";
import { motion } from "framer-motion";
import Marquee from "./Marquee"; // Adjust path as needed

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      description="Technologies and tools I use to build exceptional digital experiences."
    >
      <div className="space-y-8">
        {/* Primary Skills Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden backdrop-blur-xl 
            bg-gradient-to-r from-white/5 to-white/10 
            border border-white/10 shadow-2xl"
        >
          <Marquee speed={25} direction="left" className="py-6">
            {site.skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="mx-4 px-6 py-3 rounded-xl backdrop-blur-md
                  bg-gradient-to-r from-white/10 to-white/5
                  border border-white/20 hover:border-white/30
                  transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="text-white/90 font-medium group-hover:text-white
                  transition-colors duration-300"
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Secondary Skills Marquee (Reverse Direction) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden backdrop-blur-xl 
            bg-gradient-to-l from-white/5 to-white/10 
            border border-white/10 shadow-2xl"
        >
          <Marquee speed={30} direction="right" className="py-6">
            {site.skills
              .slice()
              .reverse()
              .map((skill, index) => (
                <motion.div
                  key={skill}
                  className="mx-4 px-6 py-3 rounded-xl backdrop-blur-md
                  bg-gradient-to-l from-white/10 to-white/5
                  border border-white/20 hover:border-white/30
                  transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className="text-white/90 font-medium group-hover:text-white
                  transition-colors duration-300"
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
          </Marquee>
        </motion.div>
      </div>
    </Section>
  );
}
