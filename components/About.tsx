'use client';

import { motion } from 'framer-motion';
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const facts = [
  { label: "School", value: "Mapúa Malayan Colleges Mindanao" },
  { label: "Year Level", value: "2nd Year" },
  { label: "Focus Area", value: "HCI & Web Development" },
];

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
        className="mt-12 grid gap-6 lg:grid-cols-[1fr_280px] lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <Card className="p-4 sm:p-6 border-neon-magenta/50 hover:border-neon-magenta/100">
            <div className="space-y-5 text-base leading-relaxed text-neutral-200">
              <p>
                I am a Computer Science student with an interest in full stack web development, 
                UI/UX design, and machine learning. Looking forward, I would also love to dive into
                the fields of cybersecurity, artificial intelligence, and electronics.
              </p>
              <p>
                Through coursework and personal projects, I have explored front-end development, user research methods, and
                iterative prototyping — always with an eye toward clarity and
                accessibility.
              </p>
              <p>
                I am currently looking for opportunities
                to collaborate on meaningful projects, internships, and research
                that bridge technical skill with user-centered thinking.
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
              At a glance
            </h3>
            <dl className="mt-4 space-y-4">
              {facts.map(({ label, value }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
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
