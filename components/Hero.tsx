'use client';

import { motion, type Variants } from "framer-motion";;
import { FiArrowDown } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { LuTerminal } from "react-icons/lu";
import Image from "next/image";
import Button from "@/components/ui/Button";

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

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-padding-hero section-container mt-24 flex min-h-[88vh] flex-col justify-center"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-widest text-neon-magenta"
          >
            Yo Choom! Name&apos;s_
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="mt-4 font-serif text-5xl font-bold leading-[1.1] text-neon-yellow sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 0 2px rgba(255, 211, 0, 1), 0 0 6px rgba(255, 211, 0, 1)" }}
          >
            Joshua Frell Te
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 font-serif text-xl font-semibold text-neon-magenta sm:text-2xl"
          >
            Netrunner... well, software developer.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base text-neon-cyan sm:text-lg"
          >
            BS Computer Science student at Mapúa Malayan Colleges Mindanao
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-lg text-base leading-relaxed text-neutral-200"
          >
            Technology shapes people as much as people shape technology. I&apos;m interested in building software that understands both.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects" variant="neon-cyan" size="md" className="flex gap-3 w-[210px]">
              <LuTerminal />
              View projects
            </Button>
            <Button href="#contact" variant="neon-magenta" size="md" className="flex gap-3 w-[210px]">
              <AiOutlineMail />
              Got a gig?
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 } as never}
        >
          <motion.svg
            className="pointer-events-none absolute -z-10 h-[460px] w-[460px] sm:h-[520px] sm:w-[520px]"
            viewBox="0 0 520 520"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 } as never}
          >
            <g fill="none" strokeWidth="1.5">
              {[
                "M260,260 L260,80 L360,80 L360,40",
                "M260,260 L420,260 L420,160 L460,160",
                "M260,260 L420,360 L460,360",
                "M260,260 L260,440 L180,440 L180,480",
                "M260,260 L100,340 L60,340",
                "M260,260 L80,200 L80,100 L40,100",
                "M260,260 L160,120 L120,120 L120,60",
                "M140,260 L40,260 L40,220",
                "M380,260 L480,260 L480,300",
                "M200,160 L140,160 L140,80 L100,80",
                "M320,160 L380,160 L380,80 L420,80",
                "M200,360 L140,360 L140,440 L100,440",
                "M320,360 L380,360 L380,440",
                "M260,140 L260,40",
                "M260,380 L260,460 L300,460",
                "M280,220 L340,180 L400,180 L400,120",
                "M300,200 L360,200 L360,140 L420,140 L420,100",
                "M320,240 L380,240 L440,240 L440,200",
                "M300,140 L300,60 L260,60",
                "M340,260 L440,260 L440,320",
                "M280,180 L320,140 L320,80",
                "M240,140 L200,100 L200,60 L240,20",
              ].map((d, i) => (
                <motion.path
                  key={d}
                  d={d}
                  stroke={i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-magenta)"}
                  strokeDasharray="6 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: [0, 0.7, 0.4, 0.7],
                  }}
                  transition={{
                    pathLength: { delay: 0.7 + i * 0.05, duration: 1.1, ease: "easeOut" },
                    opacity: { delay: 0.7 + i * 0.05, duration: 3, repeat: Infinity, ease: "easeInOut" },
                  } as never}
                />
              ))}
              {[
                [360, 40], [460, 160], [460, 360], [180, 480], [60, 340], [40, 100], [120, 60],
                [40, 220], [480, 300], [100, 80], [420, 80], [100, 440], [380, 440], [260, 40], [300, 460],
                [400, 120], [420, 100], [440, 200], [260, 60], [440, 320], [320, 80], [240, 20],
              ].map(([cx, cy], i) => (
                <motion.circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill={i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-magenta)"}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: 1 }}
                  transition={{
                    scale: { delay: 1.4 + i * 0.05, duration: 0.4 },
                    opacity: { delay: 1.4 + i * 0.05, duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  } as never}
                />
              ))}
            </g>
          </motion.svg>

          <div
            role="img"
            aria-label="Profile photo"
            className="relative h-96 w-96"
            style={{
              maskImage: "radial-gradient(circle, black 55%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 85%)",
            }}
          >
            <Image
              src="/profilepicforportfolio-removebg-preview.png"
              alt=""
              fill
              sizes="384px"
              className="object-cover"
              style={{ mixBlendMode: "screen", filter: "brightness(0.9) saturate(1.3) hue-rotate(160deg)", transform: "translate(-24px, 8px)" }}
              aria-hidden="true"
              loading="eager"
            />
            <Image
              src="/profilepicforportfolio-removebg-preview.png"
              alt=""
              fill
              sizes="384px"
              className="object-cover opacity-100"
              loading="eager"
            />
            <Image
              src="/profilepicforportfolio-removebg-preview.png"
              alt=""
              fill
              sizes="384px"
              className="object-cover"
              style={{ mixBlendMode: "screen", filter: "brightness(0.4) saturate(2.5) hue-rotate(-20deg)", transform: "translate(24px, -8px)" }}
              aria-hidden="true"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* <motion.dl
        className="mt-16 grid grid-cols-2 gap-4 border-t border-neon-cyan/30 pt-10 sm:grid-cols-4 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {highlights.map(({ value, label }) => (
          <motion.div key={label} variants={itemVariants}>
            <dt className="text-sm text-neutral-300">{label}</dt>
            <dd className="mt-2 font-serif text-2xl font-bold tabular-nums text-neon-green sm:text-3xl" style={{ textShadow: "0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)" }}>
              {value}
            </dd>
          </motion.div>
        ))}
      </motion.dl> */}

      <motion.a
        href="#projects"
        className="mt-16 inline-flex items-center gap-2 self-center text-sm font-bold text-neon-cyan transition-all duration-200 hover:text-neon-magenta uppercase tracking-widest lg:mt-32"
        aria-label="Scroll to Projects section"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity } as never}
        whileHover={{ scale: 1.1 }}
      >
        <FiArrowDown className="h-4 w-4" aria-hidden="true" />
        Explore
      </motion.a>
    </section>
  );
}