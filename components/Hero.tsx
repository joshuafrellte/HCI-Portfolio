'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from "react-icons/fi";
import { highlights } from "@/data/highlights";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-padding-hero section-container mt-24 flex min-h-[88vh] flex-col justify-center"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-widest text-neon-magenta"
          >
            Cyberpunk E-Portfolio
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="mt-4 font-serif text-5xl font-bold leading-[1.1] text-neon-cyan sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)" }}
          >
            Joshua Frell Te
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 font-serif text-xl font-semibold text-neon-magenta sm:text-2xl"
          >
            Code, design, and digital experience.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base text-neon-cyan sm:text-lg"
          >
            BS Computer Science student at Mapúa Malayan Colleges Mindanao
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-lg text-base leading-relaxed text-neutral-300"
          >
            Building futuristic digital experiences at the intersection of code,
            design, and human behavior. Exploring the cyberpunk frontier.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects" variant="neon-cyan" size="md">
              View projects
            </Button>
            <Button href="#contact" variant="neon-magenta" size="md">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="flex h-56 w-56 items-center justify-center bg-[#001a33]/30 border-neon-magenta/50 hover:border-neon-magenta sm:h-64 sm:w-64">
            <motion.div
              role="img"
              aria-label="[Placeholder] Profile photo — replace with your headshot"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neon-magenta/10 to-neon-cyan/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="px-4 text-center text-sm text-neon-cyan">
                Your Photo Here
              </span>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      <motion.dl
        className="mt-16 grid grid-cols-2 gap-4 border-t border-neon-cyan/30 pt-10 sm:grid-cols-4 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {highlights.map(({ value, label }) => (
          <motion.div key={label} variants={itemVariants}>
            <dt className="text-sm text-neutral-400">{label}</dt>
            <dd className="mt-2 font-serif text-2xl font-bold tabular-nums text-neon-green sm:text-3xl" style={{ textShadow: "0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)" }}>
              {value}
            </dd>
          </motion.div>
        ))}
      </motion.dl>

      <motion.a
        href="#projects"
        className="mt-12 inline-flex items-center gap-2 self-center text-sm font-bold text-neon-cyan transition-all duration-200 hover:text-neon-magenta uppercase tracking-widest lg:mt-16"
        aria-label="Scroll to Projects section"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <FiArrowDown className="h-4 w-4" aria-hidden="true" />
        Explore
      </motion.a>
    </section>
  );
}
