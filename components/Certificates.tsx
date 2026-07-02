'use client';

import { motion } from 'framer-motion';
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
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="certificates-heading"
        index="04"
        title="Certificates"
        description="Credentials and completed courses that complement my academic work."
      />

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certificates.map((certificate) => (
          <motion.div key={certificate.id} variants={itemVariants}>
            <CertificateCard certificate={certificate} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
