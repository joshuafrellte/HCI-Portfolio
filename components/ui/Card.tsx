'use client';

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({
  children,
  className = "",
  interactive = false,
}: CardProps) {
  return (
    <motion.div
      className={`border border-solid border-neon-cyan/50 bg-[#1a1a2e]/50 backdrop-blur-sm hover:border-neon-cyan/100 shadow-archivum-sm ${
        interactive
          ? "transition-all duration-300 hover:shadow-archivum-lg hover:bg-[#1a1a2e]/70"
          : ""
      } rounded-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 } as never}
      whileHover={interactive ? { y: -4, boxShadow: "0 0 40px rgba(0, 217, 255, 0.3)" } : undefined}
    >
      {children}
    </motion.div>
  );
}
