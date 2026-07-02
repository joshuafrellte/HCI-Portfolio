'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from "react-icons/fi";
import type { Certificate } from "@/data/certificates";
import Card from "@/components/ui/Card";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const { title, issuer, date, imageUrl, link } = certificate;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        interactive
        className="flex flex-col overflow-hidden border-neon-green/50 hover:border-neon-magenta/70"
      >
        <motion.div
          className="flex aspect-[4/3] items-center justify-center border-b border-neon-cyan/30 bg-gradient-to-br from-neon-green/5 to-neon-magenta/5"
          role="img"
          aria-label={`${title} certificate image placeholder`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-sm text-neon-cyan/50">Certificate image</span>
          )}
        </motion.div>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <motion.h3
            className="font-serif text-xl font-bold text-neon-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="mt-2 text-sm text-neutral-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {issuer}
          </motion.p>
          <motion.p
            className="mt-1 text-sm text-neutral-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {date}
          </motion.p>

          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-neon-magenta transition-all duration-200 hover:text-neon-green hover:gap-2 uppercase tracking-wider"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              View certificate
              <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
