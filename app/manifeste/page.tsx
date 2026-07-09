import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'Ce que nous croyons',
  "Les sept convictions qui fondent Professional Institute : le manifeste de l'institution.",
  '/manifeste'
);

const creeds = [
  {
    title: 'Le monde professionnel est devenu la plus vaste salle de classe au monde.',
    p1: "Pendant deux siècles, on a appris les métiers dans des salles fermées, à distance du monde qu'ils préparaient. Ce modèle appartient à une époque où le savoir était rare et où le monde était loin. Aucune de ces deux conditions n'existe encore.",
    p2: "Aujourd'hui, les meilleures leçons se donnent dans les entreprises, les laboratoires, les ateliers et les villes — partout où le travail se pratique. Notre rôle n'est pas de reproduire le monde professionnel en modèle réduit. Il est d'y conduire nos participants, et de transformer ce contact en apprentissage."
  },
  {
    title: "L'international n'est plus une expérience à vivre. C'est une compétence à acquérir.",
    p1: "Travailler entre les langues, entre les cultures et entre les fuseaux horaires n'est plus le privilège de quelques carrières : c'est la condition ordinaire du travail contemporain. Une chaîne d'approvisionnement, une équipe, un marché — tout est désormais international par défaut.",
    p2: "Cette compétence ne s'enseigne pas dans un manuel. Elle s'acquiert en travaillant réellement ailleurs : en présentant un projet dans une autre langue, en comprenant comment une décision se prend à Séoul, à Berlin ou à New York, en découvrant que sa propre façon de faire n'est qu'une façon parmi d'autres."
  },
  {
    title: "L'expérience précède la théorie.",
    p1: "On retient ce que l'on a vécu, éprouvé, pratiqué. La théorie n'est pas inutile — elle est seconde. Elle prend son sens lorsqu'elle vient nommer et organiser ce que l'expérience a déjà fait comprendre.",
    p2: "C'est pourquoi nos expériences d'apprentissage commencent par le réel : une visite, un cas, une rencontre, un problème posé par une organisation véritable. Les concepts arrivent ensuite, au moment où ils éclairent quelque chose que les participants ont déjà sous les yeux."
  },
  {
    title: "L'entreprise est une faculté.",
    p1: "Les personnes qui pratiquent un métier au plus haut niveau détiennent un savoir que nul programme ne peut remplacer. Un dirigeant qui raconte une décision difficile, une équipe qui ouvre ses portes, un fondateur qui explique un échec : voilà des enseignements.",
    p2: "Notre Faculty réunit des praticiens — entrepreneurs, cadres, experts, chercheurs, consultants — et notre pédagogie mobilise les organisations elles-mêmes comme lieux et comme voix de la formation. Nous ne demandons pas aux entreprises de soutenir l'éducation. Nous leur demandons d'enseigner."
  },
  {
    title: 'Une formation se conçoit.',
    p1: "Une grande expérience d'apprentissage ne s'improvise pas et ne s'achète pas sur catalogue. Elle se conçoit — comme on conçoit un bâtiment ou une œuvre : à partir d'une intention, d'un public, d'objectifs précis, puis d'une architecture de sessions, de rencontres, de cas et de restitutions qui se répondent.",
    p2: "C'est notre métier premier. Professional Institute est une institution de conception : nous assemblons, pour chaque groupe, la combinaison exacte de briques pédagogiques que ses objectifs exigent — et nous en garantissons la cohérence d'ensemble, quels que soient les lieux et les intervenants mobilisés."
  },
  {
    title: "L'intelligence artificielle change ce que travailler veut dire.",
    p1: "Chaque métier est en train d'être recomposé par l'IA — pas remplacé : recomposé. Les professionnels qui compteront demain ne seront pas ceux qui connaissent un outil, mais ceux qui auront appris à penser, décider et créer dans un monde où l'intelligence artificielle est partout.",
    p2: "Nous traitons l'IA comme une compétence professionnelle transversale, au même titre que l'anglais ou la finance : quelque chose qui s'apprend sérieusement, avec ses méthodes, ses limites, ses règles et sa culture."
  },
  {
    title: 'Une institution se construit sur des décennies.',
    p1: "Nous ne cherchons pas à suivre les modes de la formation. Nous cherchons à construire quelque chose qui existera encore dans cinquante ans : un réseau d'instituts, une pensée, une exigence, une communauté de partenaires et d'anciens participants.",
    p2: "Cela impose une discipline particulière : ne jamais promettre ce que nous ne délivrons pas, ne jamais sacrifier la qualité d'une expérience à sa croissance, et prendre chaque décision à l'échelle de temps des institutions — pas à celle des entreprises."
  }
];

export default function ManifestePage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Manifeste — Document fondateur</span>
          </div>
          <h1 className="d-xl2">Ce que nous croyons.</h1>
          <p className="lead">
            Sept convictions fondent tout ce que Professional Institute conçoit, enseigne et construit. Elles
            précèdent nos programmes, nos instituts et nos méthodes — et leur survivront.
          </p>
        </div>
      </header>

      <section style={{ paddingBottom: 'clamp(76px,9.5vw,140px)' }}>
        <div className="wrap">
          {creeds.map((c, i) => (
            <Reveal key={i}>
              <div className="creed-item">
                <span className="cn">Conviction {String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.p1}</p>
                  <p>{c.p2}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Doctrine
        label="En une phrase"
        quote="Nous ne construisons pas des écoles. Nous construisons une nouvelle génération d'institutions éducatives."
      >
        <LinkQ href="/reseau" inverted>
          Découvrir le réseau
        </LinkQ>
      </Doctrine>
    </>
  );
}
