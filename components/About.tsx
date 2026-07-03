'use client';

import { motion, type Variants } from "framer-motion";;
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const facts = [
  { label: "Status", value: "Available for projects" },
  { label: "Role", value: "Full Stack Dev" },
  { label: "Location", value: "Davao, Philippines" },
  { label: "Currently", value: "Sharpening backend skills" },
  { label: "Focus", value: "Next.js • Express.js • UI/UX Design" },
];

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
      duration: 0.6,
    } as never,
  },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="about-heading"
        index="04"
        title="About"
        description="Background, academic focus, and the work I am building toward."
      />

      <motion.div
        className="h-full mt-12 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full p-4 sm:p-6 border-neon-magenta/50 hover:border-neon-magenta/100">
            <div className="space-y-5 text-base leading-relaxed text-neutral-200">
              <p>
                I am a Computer Science student with an interest in full stack web development, 
                UI/UX design, and machine learning. Looking forward, I would also love to dive into
                the fields of cybersecurity, artificial intelligence, and electronics.
              </p>
              <p>
                Through coursework and personal projects, I have developed a deep understanding 
                and took control of my strengths and weaknesses to improve self-sufficiency,
                collaboration skills, and my taste for human-centered designs.
              </p>
              <p>
                I am always looking for opportunities to collaborate on meaningful projects, 
                internships, and research where I can bridge my technical skills
                with empathetic, accessible, and most importantly, cool designs. 
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.aside
          aria-label="Quick facts"
          variants={itemVariants}
        >
          <Card className="h-fit p-4 sm:p-6 border-neon-cyan/50 hover:border-neon-green/70">
            <h3 className="border-b border-neon-cyan/30 pb-4 font-sans text-sm font-bold uppercase tracking-wider text-neon-magenta">
              TL;DR
            </h3>
            <dl className="mt-4 space-y-4">
              {facts.map(({ label, value }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 } as never}
                >
                  <dt className="text-sm text-neutral-300">{label}</dt>
                  <dd className="mt-0.5 font-bold text-neon-cyan">
                    {value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </Card>
        </motion.aside>
      </motion.div>
    </section>
  );
}
