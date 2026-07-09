'use client';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Titre révélé ligne par ligne, par masque. Réservé au hero. */
export default function HeroTitle({ lines }: { lines: string[] }) {
  return (
    <h1 className="d-xl" style={{ maxWidth: '15ch' }}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.13 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
