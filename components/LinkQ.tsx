import Link from 'next/link';

type Props = { href: string; children: React.ReactNode; inverted?: boolean };

/** Lien discret de la maison — souligné hairline, flèche. */
export default function LinkQ({ href, children, inverted }: Props) {
  return (
    <Link href={href} className={`link-q ${inverted ? 'link-q--inv' : ''}`}>
      {children} <span className="arrow">→</span>
    </Link>
  );
}
