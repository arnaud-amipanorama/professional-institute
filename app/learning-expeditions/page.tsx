import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Learning Expeditions',
  'La ville devient le programme : la philosophie pédagogique des Learning Expeditions de Professional Institute.',
  '/learning-expeditions'
);

const components = [
  ['Sessions pédagogiques', 'Structurer'],
  ['Masterclasses', 'Approfondir'],
  ['Ateliers', 'Pratiquer'],
  ['Études de cas', 'Analyser'],
  ['Rencontres professionnelles', 'Échanger'],
  ["Visites d'entreprises", 'Observer'],
  ['Conférences', 'Élargir'],
  ['Échanges avec des entrepreneurs', 'Confronter'],
  ['Travaux de groupe', 'Construire'],
  ['Restitutions finales', 'Ancrer']
];

const steps = [
  { n: 'T—01', t: 'Le cadrage', d: "L'expedition s'ouvre par une mise en perspective : le secteur, la ville, les questions que le groupe vient y travailler. Chacun sait ce qu'il vient chercher." },
  { n: 'T—02', t: "L'immersion", d: "Le cœur de l'expérience : visites, rencontres, masterclasses et ateliers s'enchaînent selon l'architecture conçue en amont. Les sessions pédagogiques donnent les clés de lecture de ce que le groupe observe." },
  { n: 'T—03', t: 'La confrontation', d: 'Études de cas et travaux de groupe : les participants confrontent ce qu\'ils ont vu à leurs propres pratiques, métiers et organisations.' },
  { n: 'T—04', t: 'La restitution', d: "L'expedition se conclut par une restitution finale — analyses, recommandations, engagements. Ce qui a été appris est formulé, présenté et emporté." }
];

export default function ExpeditionsPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Programs</span>
            <span className="meta">Learning Expeditions</span>
          </div>
          <h1 className="d-xl2">La ville devient le programme.</h1>
          <p className="lead">
            Une Learning Expedition est une expérience de formation immersive organisée autour d&apos;une ville,
            d&apos;un secteur d&apos;activité ou d&apos;un enjeu professionnel. Ce n&apos;est pas un format parmi
            d&apos;autres : c&apos;est notre philosophie pédagogique portée à son intensité maximale.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-230">
            <Reveal>
              <span className="meta">01 — Le principe</span>
            </Reveal>
            <div className="body-copy">
              <Reveal>
                <p className="lead" style={{ marginBottom: '1.3em' }}>Le monde professionnel devient une salle de classe.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Pendant une expedition, le groupe ne se déplace pas pour assister à des cours ailleurs : la ville
                  elle-même, ses entreprises, ses institutions et ses praticiens constituent le programme. Chaque
                  journée articule des temps d&apos;apprentissage structurés et des temps d&apos;immersion — et
                  c&apos;est leur alternance qui produit la compréhension.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p style={{ marginTop: '1.15em' }}>
                  Une expedition se conçoit toujours autour d&apos;un fil : un secteur (l&apos;hospitalité à Séville,
                  la finance à Londres, l&apos;IA à Montréal), un enjeu (la transformation d&apos;une industrie,
                  l&apos;internationalisation d&apos;un métier) ou une question posée par le groupe lui-même.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">02 — Les composantes</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Ce qu&apos;une expedition peut combiner.</h2>
            </Reveal>
          </div>
          <Reveal>
            <ul className="mlist">
              {components.map(([label, tag]) => (
                <li key={label}>
                  {label} <span className="tag">{tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="idx-note">
              La combinaison exacte dépend des objectifs du groupe, de la durée et du hub choisi. Aucune expedition ne
              ressemble à une autre — c&apos;est précisément le principe.
            </p>
          </Reveal>
        </div>
      </section>

      <Doctrine tall quote="On ne visite pas une ville. On apprend ce qu'elle sait faire." refText="Learning Expeditions — principe fondateur" />

      <section>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">03 — L&apos;anatomie</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Le rythme d&apos;une expedition.</h2>
            </Reveal>
          </div>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="step">
                <span className="n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="prefoot section">
        <div className="wrap">
          <Reveal>
            <span className="meta meta--laiton">Concevoir une expedition</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="d-l" style={{ marginTop: 16, maxWidth: '24ch' }}>
              Dix hubs, tous les secteurs, un fil à définir ensemble.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="actions">
              <LinkQ href="/contact">Échanger avec notre équipe</LinkQ>
              <LinkQ href="/reseau">Explorer les hubs</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
