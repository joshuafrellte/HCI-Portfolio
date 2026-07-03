import { Variants } from "framer-motion";

/* ─── Scroll-triggered animations ─── */

/** Fade-up reveal on scroll */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    } as never,
  },
};

/** Fade-in animation */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    } as never,
  },
};

/** Staggered container for children animations */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    } as never,
  },
};

/** Individual item for staggered animations */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    } as never,
  },
};

/* ─── Text animations ─── */

/** Text reveal - for headings */
export const textRevealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    } as never,
  },
};

export const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    } as never,
  },
};

/* ─── Hover animations ─── */

/** Card lift on hover */
export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 0 20px rgba(0, 217, 255, 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 0 40px rgba(0, 217, 255, 0.3)",
    transition: {
      duration: 0.3,
    } as never,
  },
};

/** Image scale on hover */
export const imageScaleVariants: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
    } as never,
  },
};

/* ─── Link animations ─── */

/** Animated underline link */
export const underlineVariants: Variants = {
  rest: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.3,
    } as never,
  },
};

/* ─── Container animations ─── */

/** Slide in from left */
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    } as never,
  },
};

/** Slide in from right */
export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    } as never,
  },
};

/** Scale in animation */
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    } as never,
  },
};
