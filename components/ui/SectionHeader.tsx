'use client';

import { motion } from "framer-motion";;

interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
  index?: string;
  light?: boolean;
}

export default function SectionHeader({
  id,
  title,
  description,
  index,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.header
      className="flex flex-col items-start text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 } as never}
    >
      <div className="w-full">
        {index && (
          <motion.span
            className="text-sm font-bold uppercase tracking-widest text-neon-magenta mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 } as never}
          >
            {index}
          </motion.span>
        )}
        <motion.h2
          id={id}
          className={`font-serif text-4xl font-bold sm:text-5xl ${
            light ? "text-neon-cyan" : "text-neon-cyan"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 } as never}
          style={{ textShadow: "0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)" }}
        >
          {title}_
        </motion.h2>
        {description && (
          <motion.p
            className={`mt-4 text-base ${
              light ? "text-neutral-200" : "text-neutral-200"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 } as never}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.header>
  );
}
