"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";
import { navSections } from "@/data/nav";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neon-cyan/30 bg-[#1a0933]/80 text-neon-cyan shadow-[0_0_20px_rgba(0,217,255,0.1)]"
          : "border-b border-neon-cyan/20 bg-[#1a0933]/60 text-neon-cyan"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        aria-label="Primary"
        className="section-container flex h-16 items-center justify-between sm:h-20"
      >
        <motion.a
          href="#hero"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80 sm:gap-3 group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="flex h-10 w-10 items-center justify-center border border-neon-cyan/50 bg-transparent shadow-[0_0_10px_rgba(0,217,255,0.2)] group-hover:border-neon-magenta/70 group-hover:shadow-[0_0_10px_rgba(255,16,240,0.2)]"
            whileHover={{
              boxShadow: "0 0 20px rgba(255, 16, 240, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <FiTerminal
              className="h-5 w-5 text-neon-cyan group-hover:text-neon-magenta"
              aria-hidden="true"
            />
          </motion.span>
          <motion.span
            className="font-serif text-lg font-bold text-neon-cyan sm:text-xl tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            CYBER
          </motion.span>
        </motion.a>

        <ul className="flex max-w-[58vw] items-center gap-0.5 sm:max-w-none sm:gap-1">
          {navSections.map(({ id, label }, index) => {
            const isActive = activeSection === id;

            return (
              <li key={id} className="shrink-0">
                <motion.a
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-sm px-2.5 py-1.5 text-xs font-bold transition-all duration-200 sm:px-3 sm:text-sm uppercase tracking-wider ${
                    isActive
                      ? "bg-neon-cyan text-dark-purple shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                      : "text-neon-cyan hover:bg-neon-cyan/10 hover:border hover:border-neon-cyan/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {label}
                </motion.a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
