import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import { articles, readingTime } from '@/lib/perspectives';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Perspectives — La revue',
  "Idées, analyses et études de cas sur l'avenir de la formation professionnelle.",
  '/perspectives'
);

const upcoming = [
  { kind: 'Étude de cas', t: "Apprendre un métier à Montréal : ce que l'immersion change réellement" },
  { kind: 'Analyse', t: 'Ce que les compétences globales veulent dire — et comment elles s\u2019évaluent' }
];

export default function PerspectivesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="revue" style={{ padding: 'calc(76px + clamp(36px,5vw,64px)) 0 clamp(58px,7vw,100px)' }}>
        <div className="wrap">
          <Reveal>
            <div className="revue-mast">
              <div>
                <h1 className="mast-title">Perspectives</h1>
                <p className="sub">
                  La revue de Professional Institute — idées, analyses et études de cas sur l&apos;avenir de la
                  formation professionnelle.
                </p>
              </div>
              <div className="ed">
                <span className="meta">Édition inaugurale</span>
                <span className="meta">Été 2026 — N° 01</span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Link href={`/perspectives/${featured.slug}`} className="featured" style={{ display: 'grid' }}>
              <span className="kind">{featured.kind} — En couverture</span>
              <div>
                <h3>{featured.title}</h3>
                <p className="stand">{featured.standfirst}</p>
                <span className="meta fmeta">
                  Professional Institute — {readingTime(featured)} min de lecture
                </span>
              </div>
            </Link>
          </Reveal>

          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i + 1) * 0.08}>
              <Link href={`/perspectives/${a.slug}`} className="persp-row" style={{ display: 'grid' }}>
                <span className="kind">{a.kind}</span>
                <h3>{a.title}</h3>
                <span className="date">{readingTime(a)} min</span>
              </Link>
            </Reveal>
          ))}

          <Reveal>
            <div style={{ marginTop: 'clamp(28px,3.5vw,42px)' }}>
              <span className="meta meta--laiton" style={{ display: 'block', marginBottom: 8 }}>
                À paraître
              </span>
              {upcoming.map((u) => (
                <div key={u.t} className="persp-row" style={{ display: 'grid', opacity: 0.62 }}>
                  <span className="kind">{u.kind}</span>
                  <h3>{u.t}</h3>
                  <span className="date">À paraître</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', alignItems: 'baseline' }}>
              <span className="meta">Perspectives paraît en français et en anglais.</span>
              <LinkQ href="/contact">Recevoir les prochaines éditions</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,6vw,80px) 0' }}>
        <div className="wrap">
          <div className="grid-230">
            <Reveal>
              <span className="meta">Note éditoriale</span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="body-copy">
                <p>
                  Perspectives publie ce que Professional Institute pense : des essais, des analyses et des études de
                  cas issus de nos programmes, de notre Faculty et de notre réseau. La revue est le lieu où notre
                  doctrine se travaille en public. Ses annonces — nouveaux hubs, nouveaux programmes, nouvelles
                  publications — y paraissent en premier.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
