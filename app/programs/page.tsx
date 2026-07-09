import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Programs & Solutions',
  "Onze briques pédagogiques, des combinaisons infinies : la conception d'expériences d'apprentissage par Professional Institute.",
  '/programs'
);

const bricks = [
  { n: 'B—01', t: 'Professional Programs', d: "Programmes structurés autour d'un métier, d'un secteur ou d'une compétence, sur une ou plusieurs semaines." },
  { n: 'B—02', t: 'Language Learning', d: 'Langues professionnelles et communication en contexte de travail, délivrées avec des centres de langues reconnus.' },
  { n: 'B—03', t: 'AI Learning', d: "Parcours d'intelligence artificielle appliquée, du socle commun aux usages par fonction." },
  { n: 'B—04', t: 'Executive Education', d: 'Immersions et programmes de perspective pour dirigeants, cadres et entrepreneurs.' },
  { n: 'B—05', t: 'Corporate Learning', d: 'Développement des compétences pour les organisations : management, transformation, innovation.' },
  { n: 'B—06', t: 'Learning Expeditions', d: "Expériences immersives organisées autour d'une ville, d'un secteur ou d'un enjeu professionnel." },
  { n: 'B—07', t: 'Professional Visits', d: "Immersions au sein d'organisations : visites, rencontres de dirigeants, masterclasses en entreprise." },
  { n: 'B—08', t: 'Case Studies', d: 'Études de cas réelles, travaillées avec les organisations qui les ont vécues.' },
  { n: 'B—09', t: 'Workshops', d: 'Ateliers pratiques en petits groupes, animés par des praticiens.' },
  { n: 'B—10', t: 'Conferences', d: "Interventions d'experts, d'entrepreneurs et de chercheurs, en session plénière." },
  { n: 'B—11', t: 'Custom Learning Solutions', d: 'Conception entièrement sur mesure, pour les entreprises, institutions, écoles et administrations.' }
];

const steps = [
  { n: 'É—01', t: 'Les objectifs', d: "Tout commence par le groupe : son niveau, son métier, ses enjeux, ce que l'expérience doit changer pour lui. Nous définissons ensemble des objectifs d'apprentissage précis." },
  { n: 'É—02', t: "L'architecture", d: 'Nos ingénieurs pédagogiques assemblent les briques : progression, sessions, rencontres, cas, temps de travail et de restitution. Le hub est choisi pour ce qu\'il enseigne.' },
  { n: 'É—03', t: 'La délivrance', d: 'Faculty, écoles partenaires, experts et entreprises interviennent selon le programme, sous la coordination académique de Professional Institute.' },
  { n: 'É—04', t: 'La restitution', d: "Chaque expérience se conclut par une restitution : ce qui a été appris, ce qui sera appliqué, ce qui reste à approfondir. L'apprentissage se mesure à ce qu'il change." }
];

export default function ProgramsPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Programs &amp; Solutions</span>
          </div>
          <h1 className="d-xl2">Nous ne vendons pas un catalogue. Nous concevons des expériences.</h1>
          <p className="lead">
            Professional Institute est une institution de conception pédagogique. Chaque programme est construit à
            partir des objectifs d&apos;un groupe — établissement, entreprise ou institution — en assemblant les
            briques d&apos;apprentissage que ces objectifs exigent.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-230">
            <Reveal>
              <span className="meta">01 — Le modèle</span>
            </Reveal>
            <div className="body-copy">
              <Reveal>
                <p className="lead" style={{ marginBottom: '1.3em' }}>Concevoir, coordonner, garantir.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Nos ingénieurs pédagogiques et coordinateurs académiques conçoivent l&apos;architecture de chaque
                  programme : objectifs, progression, sessions, rencontres, restitutions. Selon les projets, la
                  délivrance mobilise notre Faculty, des écoles partenaires, des centres de langues reconnus, des
                  experts, des universités ou des entreprises.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p style={{ marginTop: '1.15em' }}>
                  Quels que soient les intervenants et les lieux, Professional Institute conserve trois choses : la
                  conception pédagogique, la cohérence académique et la coordination globale. C&apos;est ce qui
                  garantit qu&apos;une expérience signée Professional Institute reste une expérience Professional
                  Institute — à Montréal comme à Séoul.
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
              <span className="meta">02 — Les briques</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Onze briques pédagogiques. Des combinaisons infinies.</h2>
            </Reveal>
          </div>
          <div className="bricks">
            {bricks.map((b, i) => (
              <Reveal key={b.n} delay={(i % 3) * 0.08} className="brick">
                <span className="meta meta--laiton">{b.n}</span>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="idx-note">
              Toutes les briques se combinent. Une semaine peut associer sessions, visites professionnelles, étude de
              cas et restitution finale ; un programme d&apos;un semestre peut alterner apprentissage de langue,
              immersions et workshops. La combinaison découle toujours des objectifs — jamais l&apos;inverse.
            </p>
          </Reveal>
        </div>
      </section>

      <Doctrine label="Méthode" quote="Un programme n'est pas une liste d'activités. C'est une architecture." />

      <section>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">03 — La conception</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Comment un programme se construit.</h2>
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

      <section className="revue" style={{ padding: 'clamp(60px,7vw,100px) 0' }}>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">04 — Approfondir</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Trois piliers de notre pédagogie ont leur propre page.</h2>
            </Reveal>
          </div>
          {[
            { href: '/learning-expeditions', n: 'I', t: 'Learning Expeditions', d: 'Notre philosophie pédagogique : la ville et le secteur comme salle de classe.' },
            { href: '/professional-visits', n: 'II', t: 'Professional Visits & Immersions', d: "Pourquoi observer une organisation est une manière d'apprendre aussi importante qu'un cours." },
            { href: '/ai-emerging-skills', n: 'III', t: 'AI & Emerging Skills', d: "Apprendre à travailler dans un monde où l'intelligence artificielle devient omniprésente." }
          ].map((r, i) => (
            <Reveal key={r.href} delay={i * 0.08}>
              <Link href={r.href} className="idx-row" style={{ display: "grid" }}>
                <span className="n">{r.n}</span>
                <h3>{r.t}</h3>
                <p className="about">{r.d}</p>
                <span className="go">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="prefoot section">
        <div className="wrap">
          <Reveal>
            <span className="meta meta--laiton">Concevoir avec nous</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="d-l" style={{ marginTop: 16, maxWidth: '22ch' }}>
              Chaque programme commence par une conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="actions">
              <LinkQ href="/contact">Échanger avec notre équipe</LinkQ>
              <LinkQ href="/reseau">Choisir un hub</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
