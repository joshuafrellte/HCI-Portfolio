'use client';

import { useEffect, useState } from 'react';
import type { Variants } from 'framer-motion';

export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReduced;
}

export function useAnimationDuration(durationMs = 600): number {
  const prefersReduced = useReducedMotion();
  return prefersReduced ? 0 : durationMs;
}

export function useAnimationVariants(variants: Variants): Variants {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }

  return variants;
}