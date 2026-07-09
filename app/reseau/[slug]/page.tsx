import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import { hubs, getHub, institutes } from '@/lib/hubs';
import { pageMeta } from '@/lib/seo';

export function generateStaticParams() {
  return hubs.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hub = getHub(params.slug);
  if (!hub) return {};
  return pageMeta(
    `${hub.city} — Professional Learning Hub`,
    hub.ambiance,
    `/reseau/${hub.slug}`
  );
}

export default function HubPage({ params }: { params: { slug: string } }) {
  const hub = getHub(params.slug);
  if (!hub) notFound();
  const inst = institutes[hub.instituteId];
  const others = hubs.filter((h) => h.instituteId === hub.instituteId && h.slug !== hub.slug);

  return (
    <>
      <header className="phero" style={{ paddingBottom: 'clamp(36px,5vw,60px)' }}>
        <div className="wrap">
          <div className="crumb">
            <Link href="/reseau" className="meta meta--laiton">
              Le réseau
            </Link>
            <span className="meta">{inst.name}</span>
          </div>
          <h1 className="d-xl2">{hub.city}</h1>
          <p className="lead">{hub.ambiance}</p>
          <div style={{ marginTop: 'clamp(22px,3vw,32px)', display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <span className="meta">{hub.coord}</span>
            <span className="meta meta--laiton">Professional Learning Hub</span>
          </div>
        </div>
      </header>

      {hub.img && (
        <section style={{ padding: 0 }}>
          <div className="wrap">
            <figure className="figure" style={{ marginTop: 0 }}>
              <div className="frame">
                <Image src={hub.img} alt={hub.alt ?? hub.city} fill sizes="100vw" className="object-cover" priority />
              </div>
              <figcaption>
                <span className="meta">
                  {hub.city} — {hub.coord}
                </span>
                <span className="meta">Plan architectural · I</span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <div className="grid-230">
            <Reveal>
              <span className="meta">01 — Le terrain</span>
            </Reveal>
            <div className="body-copy">
              {hub.story.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p style={i > 0 ? { marginTop: '1.15em' } : undefined}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid-230" style={{ marginTop: 'clamp(44px,5vw,64px)' }}>
            <Reveal>
              <span className="meta">02 — Les spécialisations</span>
            </Reveal>
            <div>
              <Reveal>
                <div style={{ fontFamily: 'var(--f-meta)', fontSize: 11.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', lineHeight: 2.4 }}>
                  {hub.specs.map((s) => (
                    <div key={s} style={{ borderBottom: '1px solid var(--hairline)', padding: '10px 0' }}>
                      {s}
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="idx-note">
                  Comme chaque hub du réseau, {hub.city} accueille des programmes dans toutes les disciplines. Les
                  spécialisations signalent ce que la ville enseigne mieux que toute autre — jamais une limite.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="prefoot section">
        <div className="wrap">
          <Reveal>
            <span className="meta meta--laiton">Concevoir un programme à {hub.city}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="d-l" style={{ marginTop: 16, maxWidth: '24ch' }}>
              Chaque programme commence par une conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="actions">
              <LinkQ href="/contact">Échanger avec notre équipe</LinkQ>
              <LinkQ href="/programs">Voir les programmes</LinkQ>
            </div>
          </Reveal>
          {others.length > 0 && (
            <Reveal delay={0.3}>
              <p className="idx-note" style={{ marginTop: 'clamp(36px,4vw,52px)' }}>
                Également au sein de {inst.name} :{' '}
                {others.map((o, i) => (
                  <span key={o.slug}>
                    <Link href={`/reseau/${o.slug}`} style={{ borderBottom: '1px solid var(--hairline)' }}>
                      {o.city}
                    </Link>
                    {i < others.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
