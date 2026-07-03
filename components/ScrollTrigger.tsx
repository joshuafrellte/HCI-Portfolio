'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface ScrollTriggerProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  once?: boolean; // Only animate once
  delay?: number;
}

/**
 * ScrollTrigger component - wraps content and triggers animations on scroll
 * Uses whileInView for scroll-triggered animations
 */
export function ScrollTrigger({
  children,
  variants,
  className = '',
  once = true,
  delay = 0,
}: ScrollTriggerProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? 'visible' : 'hidden'}
      whileInView={prefersReduced ? 'visible' : 'visible'}
      variants={variants}
      viewport={{ once, margin: '-100px' }}
      transition={{ delay: prefersReduced ? 0 : delay } as never}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * StaggeredGrid component - creates a staggered animation effect for grid children
 */
export function StaggeredGrid({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggeredGridProps) {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : staggerDelay,
        delayChildren: prefersReduced ? 0 : 0.2,
      } as never,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0 : 0.5,
      } as never,
    },
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: '-100px' }}
    >
      {childrenArray.map((child, index) => (
        <motion.div variants={itemVariants} key={index}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// interface AnimatedTextProps {
//   text: string;
//   className?: string;
//   as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
//   delay?: number;
// }

/**
 * AnimatedText component - splits text into characters and animates them
 */
// export function AnimatedText({
//   text,
//   className = '',
//   as: Component = 'h1',
//   delay = 0,
// }: AnimatedTextProps) {
//   const prefersReduced = useReducedMotion();

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: prefersReduced ? 0 : 0.05,
//         delayChildren: prefersReduced ? 0 : delay,
//       } as never,
//     },
//   };

//   const charVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: prefersReduced ? 0 : 0.4 },
//     } as never,
//   };

//   const AnimatedComponent = motion[Component as keyof typeof motion] as never;

//   return (
//     <AnimatedComponent
//       className={className}
//       initial="hidden"
//       whileInView="visible"
//       variants={containerVariants}
//       viewport={{ once: true, margin: '-100px' }}
//     >
//       {text.split('').map((char, index) => (
//         <motion.span key={index} variants={charVariants}>
//           {char}
//         </motion.span>
//       ))}
//     </AnimatedComponent>
//   );
// }
