'use client';

import { motion, type Variants } from "framer-motion";;
import { skillCategories } from "@/data/skills";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    } as never,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    } as never,
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
        index="03"
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
        {skillCategories.map(({ name, icon: Icon, skills }) => (
          <motion.div key={name} variants={itemVariants}>
            <Card className="h-full p-4 sm:p-6 transition-all border-neon-magenta/50 hover:border-neon-magenta/90 duration-150 hover:shadow-[0_0_12px_rgba(255,0,110,0.7)]">
              <div className="flex items-center gap-3">
                <Icon
                  size={22}
                  className="text-neon-magenta"
                />

                <motion.h3
                  className="font-serif text-xl font-bold text-neon-cyan"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 } as never}
                >
                  {name}
                </motion.h3>
              </div>
              <motion.ul
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 } as never}
              >
                {skills.map(({ name, icon: SkillIcon }) => (
                  <li key={name}>
                    <span className="flex border border-neon-cyan bg-[#1a0933] px-2.5 py-1 text-sm font-medium text-neon-cyan items-center gap-2">
                      {SkillIcon && <SkillIcon size={13} />}
                      {name}
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
