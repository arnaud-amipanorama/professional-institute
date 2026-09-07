import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import { hubsByInstitute, type Hub } from '@/lib/hubs';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Le réseau, Villes de référence',
  'Dix villes de référence sur trois continents : American Professional Institute, European Professional Institute et le Global Learning Network.',
  '/reseau'
);

function HubRows({ hubs }: { hubs: Hub[] }) {
  return (
    <section style={{ padding: 'clamp(40px,5vw,64px) 0 clamp(60px,7vw,90px)' }}>
      <div className="wrap">
        {hubs.map((h) => (
          <Reveal key={h.slug}>
            <div className="hub-row">
              <div>
                <Link href={`/reseau/${h.slug}`} className="city-name" style={{ display: 'inline-block' }}>
                  {h.city}
                </Link>
                <span className="coord">{h.coord}</span>
              </div>
              <p className="amb">{h.ambiance}</p>
              <div className="specs">
                {h.specs.map((s) => (
                  <span key={s}>
                    {s}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WorldBand({ id, cls, q, title, story }: { id: string; cls: string; q: string; title: string; story: string }) {
  return (
    <section className={`world ${cls}`} id={id} style={{ padding: 'clamp(70px,8vw,110px) 0' }}>
      <div className="wrap">
        <Reveal>
          <span className="q">{q}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ maxWidth: '14ch' }}>{title}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="story">{story}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function ReseauPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Le réseau, Villes de référence</span>
          </div>
          <h1 className="d-xl2">Dix villes de référence. Trois continents. Une même exigence.</h1>
          <p className="lead">
            Professional Institute développe un réseau de villes et de partenaires locaux. Les destinations sont
            activées selon les programmes, les calendriers et les objectifs de chaque groupe. Leur spécialisation
            indique ce qu&apos;elles peuvent apporter à une expérience, jamais une limite.
          </p>
        </div>
      </header>

      <WorldBand
        id="api"
        cls="world--api"
        q="American"
        title="Professional Institute"
        story="Le pôle du réseau en Amérique du Nord. Montréal, New York et Miami offrent trois environnements de référence : recherche en intelligence artificielle, finance, écosystèmes créatifs et commerce international. Les programmes y sont activés selon les projets et les partenaires disponibles."
      />
      <HubRows hubs={hubsByInstitute('api')} />

      <WorldBand
        id="epi"
        cls="world--epi"
        q="European"
        title="Professional Institute"
        story="Le pôle européen du réseau. Séville, Londres, Berlin, Rome et Malte permettent de travailler l'industrie, l'hospitalité, les institutions, les langues et les cultures professionnelles européennes."
      />
      <HubRows hubs={hubsByInstitute('epi')} />

      <WorldBand
        id="gln"
        cls="world--gln"
        q="Global"
        title="Learning Network"
        story="En complément de ses deux instituts, Global Learning Network étend progressivement le réseau vers de nouveaux terrains d'apprentissage, avec des partenaires locaux et une conception pédagogique adaptée à chaque projet."
      />
      <HubRows hubs={hubsByInstitute('gln')} />

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <p className="idx-note">
              Dans le réseau, les programmes sont conçus par Professional Institute et mobilisent, selon les projets,
              des écoles partenaires, des centres de langues, des experts et des entreprises. Notre rôle : garantir
              la cohérence pédagogique et la coordination d&apos;ensemble.
            </p>
          </Reveal>

          <Reveal>
            <div className="coming">
              <span className="meta meta--laiton">Réseau en développement, Vision 2030</span>
              <div className="coming-list">
                <span>Bucharest</span>
                <span className="sep">·</span>
                <span>Budapest</span>
                <span className="sep">·</span>
                <span>Kraków</span>
                <span className="sep">·</span>
                <span>Cape Town</span>
                <span className="sep">·</span>
                <span>Dubai</span>
                <span className="sep">·</span>
                <span>Tokyo</span>
              </div>
              <p>
                Ces projets de villes sont à l&apos;étude ou en préparation. Ils n&apos;accueillent pas encore de programmes, leur
                ouverture sera annoncée dans Perspectives.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 'clamp(44px,5vw,64px)' }}>
              <LinkQ href="/programs">Découvrir les programmes</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
