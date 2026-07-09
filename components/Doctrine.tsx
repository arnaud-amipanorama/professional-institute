import Reveal from './Reveal';

type Props = {
  quote: string;
  refText?: string;
  tall?: boolean;
  children?: React.ReactNode;
  label?: string;
};

/** Bande doctrinale bleue — citation qui respire. */
export default function Doctrine({ quote, refText, tall, children, label = 'Doctrine' }: Props) {
  return (
    <section className={`doctrine ${tall ? 'doctrine--tall' : ''}`}>
      <div className="wrap">
        <Reveal>
          <span className="meta">{label}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote>{quote}</blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div>
            {refText && <span className="num">{refText}&nbsp;&nbsp;·&nbsp;&nbsp;</span>}
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
