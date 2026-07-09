'use client';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/** Reveal au scroll — opacité + translation, une seule fois. */
export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
