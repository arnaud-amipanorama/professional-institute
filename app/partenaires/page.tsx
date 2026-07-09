import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Partenaires institutionnels',
  'Rejoindre le réseau Professional Institute : entreprises, établissements, institutions, praticiens.',
  '/partenaires'
);

const publics = [
  { n: 'N—01', t: 'Entreprises', d: 'Accueillir un groupe, faire intervenir un dirigeant, animer une masterclass, co-construire un cas : les entreprises partenaires sont la faculté vivante de nos programmes.' },
  { n: 'N—02', t: "Établissements d'enseignement", d: "Écoles, CFA et universités qui intègrent nos expériences d'apprentissage à leurs parcours — de la semaine d'immersion au programme complet." },
  { n: 'N—03', t: 'Institutions', d: 'Organismes publics, chambres consulaires et organisations internationales engagés dans le développement des compétences internationales.' },
  { n: 'N—04', t: 'Praticiens', d: 'Entrepreneurs, cadres, experts, chercheurs et consultants qui rejoignent notre Faculty et interviennent au sein de nos sessions.' }
];

const ways = [
  { n: 'R—01', t: 'Accueillir', d: "Ouvrir vos portes à une délégation : une visite, une rencontre d'équipes, une présentation de votre activité." },
  { n: 'R—02', t: 'Enseigner', d: 'Rejoindre la Faculty : animer une masterclass, un atelier ou une étude de cas dans votre domaine d\'expertise.' },
  { n: 'R—03', t: 'Co-concevoir', d: 'Construire avec nous un programme, une expedition ou une publication au croisement de vos enjeux et de notre pédagogie.' }
];

export default function PartenairesPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Partenaires institutionnels</span>
          </div>
          <h1 className="d-xl2">Une institution existe par celles et ceux qui la rejoignent.</h1>
          <p className="lead">
            Le réseau Professional Institute se construit avec des partenaires institutionnels qui partagent une même
            conviction sur l&apos;avenir de la formation professionnelle. Chacun y tient un rôle précis — accueillir,
            enseigner, prescrire, co-concevoir.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="publics" style={{ marginTop: 0 }}>
            {publics.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1} className="public">
                <span className="meta meta--laiton">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Doctrine label="Principe" quote="Nous ne demandons pas aux entreprises de soutenir l'éducation. Nous leur demandons d'enseigner." refText="Manifeste, conviction 04" />

      <section>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">Rejoindre le réseau</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Trois façons de commencer.</h2>
            </Reveal>
          </div>
          {ways.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.08}>
              <div className="step">
                <span className="n">{w.n}</span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div style={{ marginTop: 'clamp(40px,5vw,56px)' }}>
              <LinkQ href="/contact">Devenir partenaire institutionnel</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
