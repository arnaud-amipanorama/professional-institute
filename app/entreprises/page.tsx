import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Entreprises — Corporate Learning',
  'Séminaires, learning expeditions et immersions internationales pour les entreprises.',
  '/entreprises'
);

const reasons = [
  { n: 'E—01', t: 'Un séminaire', d: "Réunir une équipe hors de ses murs, autour d'un contenu conçu — pas seulement d'un lieu." },
  { n: 'E—02', t: 'Une learning expedition', d: "Explorer un écosystème — l'IA à Montréal, l'hospitalité à Marrakech, l'industrie à Berlin — pour en rapporter des décisions." },
  { n: 'E—03', t: 'Une réflexion stratégique', d: "Sortir du quotidien pour travailler une question de fond, avec des méthodes d'intelligence collective et des regards extérieurs." },
  { n: 'E—04', t: 'Une immersion internationale', d: "Confronter ses pratiques à celles d'un autre marché, d'une autre culture de travail, d'un autre continent." },
  { n: 'E—05', t: 'Un benchmark', d: 'Observer comment d\'autres organisations résolvent les problèmes que vous vous posez.' },
  { n: 'E—06', t: 'Une montée en compétences', d: "Former une équipe — IA, management, communication, langues — dans un cadre qui accélère l'apprentissage." }
];

const mix = [
  ['Ateliers', 'Pratiquer'],
  ['Visites professionnelles', 'Observer'],
  ['Rencontres de dirigeants', 'Échanger'],
  ['Conférences', 'Élargir'],
  ['Études de cas', 'Analyser'],
  ['Temps de réflexion', 'Prendre du recul'],
  ['Intelligence collective', 'Décider'],
  ['Restitution finale', 'Ancrer']
];

export default function EntreprisesPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Entreprises — Corporate Learning</span>
          </div>
          <h1 className="d-xl2">Vos équipes apprennent mieux au contact d&apos;autres mondes.</h1>
          <p className="lead">
            Séminaires, learning expeditions, immersions internationales : Professional Institute conçoit pour les
            entreprises des expériences d&apos;apprentissage qui confrontent leurs équipes à d&apos;autres
            organisations, d&apos;autres écosystèmes et d&apos;autres façons de travailler.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">01 — Les raisons de venir</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Ce qu&apos;une entreprise vient chercher chez nous.</h2>
            </Reveal>
          </div>
          <div className="bricks">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={(i % 3) * 0.08} className="brick">
                <span className="meta meta--laiton">{r.n}</span>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Doctrine label="Principe" quote="Apprendre directement auprès d'autres organisations et d'autres environnements." />

      <section>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">02 — La composition</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Chaque programme d&apos;entreprise mélange les registres.</h2>
            </Reveal>
          </div>
          <Reveal>
            <ul className="mlist">
              {mix.map(([label, tag]) => (
                <li key={label}>
                  {label} <span className="tag">{tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid-230" style={{ marginTop: 'clamp(40px,5vw,60px)' }}>
            <Reveal>
              <span className="meta">Note</span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="body-copy">
                <p>
                  Le programme se conçoit à partir de vos objectifs — jamais d&apos;un format standard. Il peut se
                  dérouler dans l&apos;un de nos dix Professional Learning Hubs, sur plusieurs hubs, ou associer vos
                  propres sites au parcours. Professional Institute en assure la conception pédagogique, la
                  coordination et la cohérence de bout en bout.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="prefoot section">
        <div className="wrap">
          <Reveal>
            <span className="meta meta--laiton">Concevoir avec nous</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="d-l" style={{ marginTop: 16, maxWidth: '24ch' }}>
              Parlez-nous de vos équipes et de vos enjeux.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="actions">
              <LinkQ href="/contact">Échanger avec notre équipe</LinkQ>
              <LinkQ href="/ai-emerging-skills">Voir les parcours IA</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
