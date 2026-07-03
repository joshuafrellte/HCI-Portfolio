'use client';

import { motion, type Variants } from "framer-motion";;
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Button from "@/components/ui/Button";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:jfte@mcm.edu.ph",
    display: "jfte@mcm.edu.ph",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/joshuafrellte",
    display: "github.com/joshuafrellte",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-frell-te-70b343327/",
    display: "linkedin.com/joshua-frell-te",
    icon: FiLinkedin,
  },
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

export default function Footer() {
  return (
    <>
      {/* Contact CTA band */}
      <motion.section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative bg-gradient-to-b from-[#1a0933]/50 to-[#001a33]/50 px-4 py-16 border-t border-neon-cyan/20 shadow-[0_0_50px_rgba(0,217,255,0.1)] sm:px-6 sm:py-20 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 } as never}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-magenta/5 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity } as never}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity } as never}
          />
        </div>

        <motion.div
          className="mx-auto max-w-7xl text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            id="contact-heading"
            variants={itemVariants}
            className="font-serif text-4xl font-bold text-neon-cyan sm:text-5xl"
            style={{ textShadow: "0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)" }}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-3 font-serif text-lg font-semibold text-neon-magenta sm:text-xl"
          >
            Open to collaborations, internships, and research conversations.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-xl text-base text-neutral-200"
          >
            Whether you have a project in mind or want to full-stack web development, software
            design, or academic work, I&apos;d like to hear from you.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button href="mailto:jfte@mcm.edu.ph" variant="neon-magenta" size="md">
              Send an email
            </Button>
            <Button
              href="www.linkedin.com/in/joshua-frell-te-70b343327/"
              variant="neon-cyan"
              size="md"
            >
              LinkedIn profile
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer links & legal */}
      <motion.footer
        className="border-t border-neon-cyan/20 bg-[#1a0933]/30 px-4 py-12 sm:px-6 lg:px-8 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 } as never}
      >
        <div className="mx-auto max-w-7xl">
          <motion.ul
            className="grid gap-4 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactLinks.map(({ label, href, display, icon: Icon }) => (
              <motion.li key={label} variants={itemVariants}>
                <motion.a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-start gap-3 transition-all duration-200"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 } as never}
                  >
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-neon-magenta group-hover:text-neon-cyan"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-neon-magenta group-hover:text-neon-cyan transition-colors">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm text-neutral-300 group-hover:text-neon-cyan transition-colors group-hover:underline group-hover:underline-offset-4">
                      {display}
                    </span>
                  </span>
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-10 border-t border-neon-cyan/20 pt-6 text-xs text-neutral-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 } as never}
          >
            © {new Date().getFullYear()} Joshua Frell Te. Cyberpunk e-portfolio
            powered by Framer Motion, Embla, and neon dreams.
          </motion.p>
        </div>
      </motion.footer>
    </>
  );
}
