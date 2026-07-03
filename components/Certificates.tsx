'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
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

export default function Certificates() {
  const [expanded, setExpanded] = useState(false);

  const featuredCertificates = certificates.slice(0, 3);
  const remainingCertificates = certificates.slice(3);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="certificates-heading"
        index="02"
        title="Certificates"
        description="Credentials and completed courses that complement my academic work."
      />

      {/* Featured */}
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredCertificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            variants={itemVariants}
            className="h-full"
          >
            <CertificateCard certificate={certificate} />
          </motion.div>
        ))}
      </motion.div>

      {/* Collapsible */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.35,
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                opacity: { duration: 0.15 },
                height: { duration: 0.3 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              className="h-full mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {remainingCertificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  className="h-full"
                >
                  <CertificateCard certificate={certificate} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon-cyan transition-all duration-200 hover:text-neon-magenta"
        >
          {expanded ? "Show Less" : "Show More"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <FiChevronDown className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </button>
      </div>
    </section>
  );
}