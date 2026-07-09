'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  captionLeft: string;
  captionRight: string;
};

/** Figure éditoriale avec parallax léger (amplitude <= 8%). */
export default function ParallaxFigure({ src, alt, captionLeft, captionRight }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <figure className="figure">
      <div ref={ref} className="frame">
        <motion.div style={{ y, scale: 1.08 }} className="absolute inset-0">
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </motion.div>
      </div>
      <figcaption>
        <span className="meta">{captionLeft}</span>
        <span className="meta">{captionRight}</span>
      </figcaption>
    </figure>
  );
}
