'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const VISIBLE_COUNT = 0;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const alwaysVisible = others.slice(0, VISIBLE_COUNT);
  const collapsible = others.slice(VISIBLE_COUNT);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mt-4 section-padding section-container"
    >
      <SectionHeader
        id="projects-heading"
        index="01"
        title="Projects"
        description="Selected work highlighting problem-solving, technical implementation, and user-centered design."
      />

      <motion.div
        className="mt-12 space-y-4 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featured && (
          <motion.div variants={itemVariants}>
            <ProjectCard project={featured} featured />
          </motion.div>
        )}

        {alwaysVisible.length > 0 && (
          <motion.div
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {alwaysVisible.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {collapsible.length > 0 && (
          <>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="collapsible-projects"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" } as never}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 pt-4 sm:grid-cols-2 sm:gap-6 sm:pt-6 lg:grid-cols-3 xl:grid-cols-4">
                    {collapsible.map((project) => (
                      <div key={project.id}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="cursor-pointer inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon-cyan transition-all duration-200 hover:text-neon-magenta"
              >
                {expanded ? "Show less" : "More projects"}
                <motion.span
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 } as never}
                  className="inline-flex"
                >
                  <FiChevronDown className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              </button>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}