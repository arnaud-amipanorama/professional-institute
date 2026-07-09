import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import { articles, getArticle, readingTime } from '@/lib/perspectives';
import { pageMeta } from '@/lib/seo';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return pageMeta(a.title, `${a.kind} — ${a.standfirst}`, `/perspectives/${a.slug}`);
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const minutes = readingTime(a);
  const others = articles.filter((x) => x.slug !== a.slug);

  return (
    <>
      <header className="phero" style={{ paddingBottom: 'clamp(28px,3.5vw,44px)' }}>
        <div className="wrap">
          <div className="crumb">
            <Link href="/perspectives" className="meta meta--laiton">
              Perspectives
            </Link>
            <span className="meta">
              {a.kind} · {a.issue}
            </span>
          </div>
          <h1 className="d-xl2" style={{ maxWidth: '24ch' }}>
            {a.title}.
          </h1>
          <p className="lead">{a.standfirst}</p>
          <div style={{ marginTop: 'clamp(18px,2.4vw,26px)', display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <span className="meta">Professional Institute</span>
            <span className="meta">{minutes} min de lecture</span>
          </div>
        </div>
      </header>

      <hr className="hairline" />

      <article>
        {a.sections.map((sec, i) => (
          <div key={sec.label}>
            <section style={{ padding: i === 0 ? 'clamp(40px,5vw,64px) 0 clamp(30px,3.6vw,48px)' : '0 0 clamp(30px,3.6vw,48px)' }}>
              <div className="wrap">
                <div className="grid-230">
                  <Reveal>
                    <span className="meta">{sec.label}</span>
                  </Reveal>
                  <div className="body-copy">
                    {sec.paragraphs.map((p, j) => (
                      <Reveal key={j} delay={j * 0.06}>
                        <p style={j > 0 ? { marginTop: '1.15em' } : undefined}>{p}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {a.pull && a.pull.after === i && (
              <section className="doctrine" style={{ padding: 'clamp(56px,6.5vw,88px) 0', margin: 'clamp(16px,2vw,28px) 0 clamp(40px,4.5vw,60px)' }}>
                <div className="wrap">
                  <Reveal>
                    <blockquote style={{ margin: 0 }}>{a.pull.text}</blockquote>
                  </Reveal>
                </div>
              </section>
            )}
          </div>
        ))}

        <section className="revue" style={{ padding: 'clamp(40px,5vw,64px) 0' }}>
          <div className="wrap">
            <Reveal>
              <span className="meta" style={{ display: 'block', marginBottom: 22 }}>
                Également dans cette édition
              </span>
            </Reveal>
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.08}>
                <Link href={`/perspectives/${o.slug}`} className="persp-row" style={{ display: 'grid' }}>
                  <span className="kind">{o.kind}</span>
                  <h3>{o.title}</h3>
                  <span className="date">{readingTime(o)} min</span>
                </Link>
              </Reveal>
            ))}
            <Reveal>
              <div style={{ marginTop: 30 }}>
                <LinkQ href="/perspectives">Retour à la revue</LinkQ>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
    </>
  );
}
