import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'AI & Emerging Skills',
  "Apprendre à travailler dans un monde où l'intelligence artificielle devient omniprésente : les parcours IA de Professional Institute.",
  '/ai-emerging-skills'
);

const functions = [
  ['IA pour le marketing', 'F—01'],
  ['IA pour la communication', 'F—02'],
  ['IA pour les ressources humaines', 'F—03'],
  ['IA pour les ventes', 'F—04'],
  ['IA pour la formation', 'F—05'],
  ['IA pour la recherche', 'F—06'],
  ['IA pour la veille', 'F—07'],
  ['IA pour la création de contenu', 'F—08'],
  ['IA pour la productivité', 'F—09'],
  ['IA et management', 'F—10'],
  ['IA et stratégie', 'F—11'],
  ['Automatisation & agents', 'F—12']
];

const governance = [
  { n: 'G—01', t: 'Limites & biais', d: "Ce que les systèmes ne savent pas faire, les erreurs qu'ils produisent, les biais qu'ils reproduisent — et comment garder le jugement humain au centre." },
  { n: 'G—02', t: 'Confidentialité & bonnes pratiques', d: "Ce qui peut être confié à un système d'IA et ce qui ne le peut pas : données, propriété intellectuelle, règles d'usage professionnelles." },
  { n: 'G—03', t: 'Gouvernance', d: "Comment une organisation encadre, outille et pilote l'usage de l'IA : chartes, choix d'outils, formation des équipes, conformité." },
  { n: 'G—04', t: 'Intégration', d: 'Passer des usages individuels à la transformation des processus : par où commencer, comment mesurer, quels métiers recomposer en premier.' }
];

export default function AIPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Programs</span>
            <span className="meta">AI &amp; Emerging Skills</span>
          </div>
          <h1 className="d-xl2">L&apos;IA n&apos;est pas un outil à apprendre. C&apos;est un monde dans lequel apprendre à travailler.</h1>
          <p className="lead">
            L&apos;intelligence artificielle est devenue une compétence professionnelle transversale — au même titre
            que l&apos;anglais ou la finance. Professional Institute conçoit des parcours qui préparent chaque métier
            à cette recomposition, avec sérieux, méthode et recul.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-230">
            <Reveal>
              <span className="meta">01 — Le socle</span>
            </Reveal>
            <div className="body-copy">
              <Reveal>
                <p className="lead" style={{ marginBottom: '1.3em' }}>Comprendre avant d&apos;utiliser.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Tout parcours commence par un socle commun : les fondamentaux de l&apos;IA générative, le panorama
                  des outils et de leurs usages réels, la pratique du prompt engineering et les principes de
                  l&apos;automatisation. Non pas pour former des techniciens — pour donner à chaque professionnel les
                  moyens de juger ce que ces systèmes savent faire, ne savent pas faire, et changent dans son métier.
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
              <span className="meta">02 — Par fonction</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">L&apos;IA appliquée à chaque métier.</h2>
            </Reveal>
          </div>
          <Reveal>
            <ul className="mlist">
              {functions.map(([label, tag]) => (
                <li key={label}>
                  {label} <span className="tag">{tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="idx-note">
              Chaque parcours est construit pour un public précis — participants en formation, équipes en poste,
              dirigeants — et s&apos;appuie sur les cas et les outils de son métier, pas sur des démonstrations
              génériques.
            </p>
          </Reveal>
        </div>
      </section>

      <Doctrine quote="Les professionnels qui compteront demain ne seront pas ceux qui connaissent un outil." refText="Manifeste, conviction 06">
        <LinkQ href="/manifeste" inverted>
          Lire le manifeste
        </LinkQ>
      </Doctrine>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">03 — Le recul</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Une institution enseigne aussi les limites.</h2>
            </Reveal>
          </div>
          {governance.map((g, i) => (
            <Reveal key={g.n} delay={i * 0.08}>
              <div className="step">
                <span className="n">{g.n}</span>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="revue section">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">04 — Les formats</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Du workshop d&apos;une journée à l&apos;expedition IA.</h2>
            </Reveal>
          </div>
          <div className="bricks">
            <Reveal className="brick">
              <span className="meta meta--laiton">AI—01</span>
              <h3>Workshops</h3>
              <p>Une journée ou une demi-journée pratique, sur un usage ou une fonction précise.</p>
            </Reveal>
            <Reveal delay={0.08} className="brick">
              <span className="meta meta--laiton">AI—02</span>
              <h3>Parcours</h3>
              <p>Plusieurs sessions progressives, du socle commun aux applications métier, pour un groupe constitué.</p>
            </Reveal>
            <Reveal delay={0.16} className="brick">
              <span className="meta meta--laiton">AI—03</span>
              <h3>AI Learning Expedition</h3>
              <p>Une immersion complète dans un écosystème d&apos;intelligence artificielle — Montréal, capitale mondiale de la recherche en IA, est notre terrain de prédilection.</p>
            </Reveal>
          </div>
          <Reveal>
            <div style={{ marginTop: 'clamp(40px,5vw,56px)' }}>
              <LinkQ href="/contact">Concevoir un parcours IA</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
