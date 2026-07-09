import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Professional Visits & Immersions',
  "Observer une organisation est une manière d'apprendre : les immersions professionnelles chez Professional Institute.",
  '/professional-visits'
);

const forms = [
  { n: 'V—01', t: "La visite d'entreprise", d: 'Une organisation accueille le groupe dans ses locaux : découverte du fonctionnement, échanges avec les équipes, observation du travail réel.' },
  { n: 'V—02', t: "L'intervention de dirigeant", d: "Un dirigeant ou un cadre vient à la rencontre de la délégation : parcours, décisions, vision d'un secteur." },
  { n: 'V—03', t: 'La rencontre startup', d: 'Un fondateur présente son activité, son marché, ses choix — et se prête au jeu des questions.' },
  { n: 'V—04', t: "L'incubateur ou l'écosystème", d: "Un incubateur, un accélérateur ou un lieu d'innovation ouvre ses portes et raconte comment naissent les entreprises de son territoire." },
  { n: 'V—05', t: "L'institution", d: "Une administration, une organisation internationale ou une association professionnelle reçoit le groupe et explique son rôle dans l'écosystème." },
  { n: 'V—06', t: 'La masterclass en entreprise', d: "Une organisation anime une session pédagogique complète autour de son métier, de ses méthodes ou d'un cas qu'elle a vécu." },
  { n: 'V—07', t: "L'échange d'expert", d: 'Un expert indépendant — consultant, chercheur, praticien — travaille avec les participants sur une question précise.' }
];

const network = [
  ['Startups', 'Écosystèmes'],
  ['PME', 'Territoires'],
  ['ETI', 'Industries'],
  ['Grands groupes', 'Global'],
  ['Cabinets', 'Conseil'],
  ['Incubateurs', 'Innovation'],
  ['Administrations', 'Public'],
  ['Institutions', 'International'],
  ['Associations professionnelles', 'Secteurs'],
  ['Experts indépendants', 'Faculty']
];

export default function VisitsPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Programs</span>
            <span className="meta">Professional Visits &amp; Immersions</span>
          </div>
          <h1 className="d-xl2">Observer une organisation est une manière d&apos;apprendre.</h1>
          <p className="lead">
            Comprendre comment une entreprise fonctionne, échanger avec ses équipes, confronter les pratiques : pour
            nous, c&apos;est un enseignement aussi important qu&apos;un cours. Les immersions professionnelles sont
            l&apos;un des fondements de la pédagogie Professional Institute.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">01 — Les formes</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Une immersion peut prendre plusieurs visages.</h2>
            </Reveal>
          </div>
          {forms.map((f, i) => (
            <Reveal key={f.n} delay={(i % 4) * 0.06}>
              <div className="step">
                <span className="n">{f.n}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="idx-note">
              Selon les objectifs du programme, plusieurs immersions peuvent être organisées dans une même semaine, et
              s&apos;articulent toujours avec les sessions pédagogiques qui les préparent et les exploitent.
            </p>
          </Reveal>
        </div>
      </section>

      <Doctrine quote="L'entreprise est une faculté." refText="Manifeste, conviction 04">
        <LinkQ href="/manifeste" inverted>
          Lire le manifeste
        </LinkQ>
      </Doctrine>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">02 — Le réseau mobilisé</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Dix familles d&apos;organisations, sur trois continents.</h2>
            </Reveal>
          </div>
          <Reveal>
            <ul className="mlist">
              {network.map(([label, tag]) => (
                <li key={label}>
                  {label} <span className="tag">{tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid-230" style={{ marginTop: 'clamp(40px,5vw,60px)' }}>
            <Reveal>
              <span className="meta">Note de méthode</span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="body-copy">
                <p>
                  Le réseau mobilisé varie selon les programmes, les calendriers et les disponibilités des
                  organisations. Nous concevons chaque immersion à partir des objectifs pédagogiques du groupe —
                  jamais à partir d&apos;une liste figée d&apos;entreprises. C&apos;est cette exigence qui garantit
                  que chaque rencontre a une raison d&apos;être dans le programme.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="prefoot section">
        <div className="wrap">
          <Reveal>
            <span className="meta meta--laiton">Ouvrir vos portes</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="d-l" style={{ marginTop: 16, maxWidth: '24ch' }}>
              Votre organisation peut devenir un lieu d&apos;apprentissage.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="actions">
              <LinkQ href="/partenaires">Devenir partenaire institutionnel</LinkQ>
              <LinkQ href="/contact">Échanger avec notre équipe</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
