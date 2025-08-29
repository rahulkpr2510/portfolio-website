"use client";
import { Section } from "./Section";
import { site } from "@/content/site";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { formatTools } from "@/lib/utils";
import { useState, useRef } from "react";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Get subtle gradient for cards
  const getProjectGradient = (index: number) => {
    const gradients = [
      "from-purple-600 to-pink-400", // soft purple → soft pink
      "from-blue-600 to-cyan-400", // muted blue → gentle cyan
      "from-green-600 to-emerald-400", // soft green → soft emerald
      "from-orange-500 to-red-400", // warm orange → soft red
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="A curated collection of my best work with a focus on clean design and clarity."
    >
      <div ref={projectsRef}>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {site.projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              gradient={getProjectGradient(index)}
              isHovered={hoveredProject === index}
              onHover={() => setHoveredProject(index)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
  gradient,
  onHover,
  onLeave,
}: {
  project: any;
  index: number;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const tools = formatTools(project.tools);

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 
          bg-white/5 shadow-md p-6 flex flex-col gap-4 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3
              className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
            >
              {project.name}
            </h3>
            <div
              className={`inline-flex items-center gap-1 px-2 py-1 mt-1 rounded-full text-xs font-medium
              bg-gradient-to-r ${gradient} text-white/90`}
            >
              <Code2 size={12} />
              Featured
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {tools.split(" • ").map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs font-medium rounded-lg
                bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
            >
              {tool.trim()}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 font-medium
                transition-all duration-200"
            >
              <Github size={16} />
              Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                bg-gradient-to-r ${gradient} text-white font-medium transition-all duration-200`}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
