'use client';

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

import { interests } from "@/data/interests";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function Interests() {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="interests-heading"
        index="05"
        title="Outside of Coding"
        description="A few interests that continue to inspire the way I think, learn, and create."
      />

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {interests.map((category) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.id}
              variants={itemVariants}
            >
              <Card className="h-full border-neon-cyan/40 p-6 transition-all hover:border-neon-cyan/80 duration-150 hover:shadow-[0_0_12px_rgba(0,255,255,0.7)]">
                <div className="flex items-center gap-3 border-b border-neon-cyan/30 pb-4">
                  <Icon
                    size={20}
                    className="text-neon-cyan"
                  />

                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-neon-magenta">
                    {category.title}
                  </h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-neutral-200"
                    >
                      <span className="text-neon-cyan">
                        &gt;
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}