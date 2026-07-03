'use client';

import { motion } from 'framer-motion';
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding section-container"
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

        {others.length > 0 && (
          <motion.div
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {others.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
