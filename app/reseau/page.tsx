import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import { hubsByInstitute, type Hub } from '@/lib/hubs';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Le réseau — Professional Learning Hubs',
  'Dix Professional Learning Hubs sur trois continents : American Professional Institute, European Professional Institute et le Global Learning Network.',
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
            <span className="meta">Le réseau — Professional Learning Hubs</span>
          </div>
          <h1 className="d-xl2">Dix villes. Trois continents. Un même niveau d&apos;exigence.</h1>
          <p className="lead">
            Le réseau Professional Institute s&apos;organise en Professional Learning Hubs — des environnements
            professionnels choisis pour ce qu&apos;ils enseignent. Chaque hub accueille des programmes dans toutes les
            disciplines ; sa spécialisation signale ce que sa ville fait mieux que toute autre, jamais une limite.
          </p>
        </div>
      </header>

      <WorldBand
        id="api"
        cls="world--api"
        q="American"
        title="Professional Institute"
        story="L'institut nord-américain du réseau. Trois hubs au cœur du continent où le travail se réinvente le plus vite — de la recherche en intelligence artificielle aux places financières, des écosystèmes créatifs aux portes de l'Amérique latine."
      />
      <HubRows hubs={hubsByInstitute('api')} />

      <WorldBand
        id="epi"
        cls="world--epi"
        q="European"
        title="Professional Institute"
        story="L'institut européen du réseau. Cinq hubs sur le continent de la profondeur : des maisons centenaires, des industries d'excellence, des institutions qui gouvernent le monde et des savoir-faire que personne d'autre ne détient."
      />
      <HubRows hubs={hubsByInstitute('epi')} />

      <WorldBand
        id="gln"
        cls="world--gln"
        q="Global"
        title="Learning Network"
        story="Au-delà de ses deux instituts, Professional Institute opère des hubs sur les terrains d'apprentissage qui comptent pour les décennies à venir — avec des partenaires établis, sous la conception et la coordination académique du groupe."
      />
      <HubRows hubs={hubsByInstitute('gln')} />

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <p className="idx-note">
              Dans chaque hub, les programmes sont conçus par Professional Institute et délivrés par notre Faculty et
              notre réseau — écoles partenaires, centres de langues reconnus, experts et entreprises — sous notre
              coordination académique.
            </p>
          </Reveal>

          <Reveal>
            <div className="coming">
              <span className="meta meta--laiton">Réseau en développement — Vision 2030</span>
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
                Ces hubs sont à l&apos;étude ou en préparation. Ils n&apos;accueillent pas encore de programmes — leur
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
