'use client';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Apparition simple au chargement (hero uniquement). */
export default function FadeIn({
  children,
  delay = 0,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
