"use client";

import { motion, useReducedMotion } from "motion/react";

// App Router templates remount on navigation, so this short entrance runs
// once per page without needing a custom router or loading screen.
export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ y: 0 }}
      initial={shouldReduceMotion ? false : { y: 8 }}
      transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}
