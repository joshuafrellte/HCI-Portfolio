'use client';

import { motion } from 'framer-motion';
import { skillCategories } from "@/data/skills";
import Card from "@/components/ui/Card";
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
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="skills-heading"
        index="02"
        title="Skills & Tech Stack"
        description="Technologies and competencies developed through coursework, projects, and self-directed learning."
      />

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map(({ name, skills }, index) => (
          <motion.div key={name} variants={itemVariants}>
            <Card className="p-4 sm:p-6 border-neon-magenta/50 hover:border-neon-green/70">
              <motion.span
                className="text-sm font-bold uppercase tracking-widest text-neon-magenta tabular-nums"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <motion.h3
                className="mt-3 font-serif text-xl font-bold text-neon-cyan"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
              >
                {name}
              </motion.h3>
              <motion.ul
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {skills.map((skill) => (
                  <li key={skill}>
                    <span className="archivum-chip text-xs hover:border-neon-magenta/100 cursor-pointer transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
