'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to respect user's prefers-reduced-motion preference
 * Returns true if the user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReduced(mediaQuery.matches);

    // Listen for changes
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

/**
 * Hook to get animation duration based on reduced motion preference
 * Returns 0 if reduced motion is preferred, otherwise returns the provided duration
 */
export function useAnimationDuration(durationMs: number = 600): number {
  const prefersReduced = useReducedMotion();
  return prefersReduced ? 0 : durationMs;
}

/**
 * Hook to get animation variants that respect reduced motion
 * If reduced motion is preferred, returns variants without animations
 */
export function useAnimationVariants(variants: any) {
  const prefersReduced = useReducedMotion();
  
  if (prefersReduced) {
    // Return a simple variant that skips animations
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  
  return variants;
}
