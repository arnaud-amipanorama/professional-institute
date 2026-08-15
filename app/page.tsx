import Image from 'next/image';
import Link from 'next/link';
import HeroTitle from '@/components/HeroTitle';
import FadeIn from '@/components/FadeIn';
import Reveal from '@/components/Reveal';
import LinkQ from '@/components/LinkQ';
import Doctrine from '@/components/Doctrine';
import Atlas from '@/components/Atlas';
import ParallaxFigure from '@/components/ParallaxFigure';

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — OUVERTURE DE MANIFESTE ============ */}
      <header className="hero">
        <div className="wrap">
          <FadeIn delay={0}>
            <div className="meta meta--laiton" style={{ marginBottom: 'clamp(22px,3.4vh,38px)' }}>
              Manifeste — Extrait 01
            </div>
          </FadeIn>
          <HeroTitle
            lines={['Le monde forme', 'ceux qui le', 'parcourent.']}
          />
          <FadeIn delay={0.75}>
            <p className="lead" style={{ marginTop: 'clamp(26px,3.6vh,42px)' }}>
              Professional Institute développe un réseau international de formation professionnelle. Nous concevons
              des expériences d&apos;apprentissage immersives et sur mesure, au contact des villes, des entreprises et
              des institutions où les métiers évoluent.
            </p>
          </FadeIn>
          <FadeIn delay={0.95}>
            <div style={{ marginTop: 'clamp(30px,4vh,48px)', display: 'flex', gap: 36, flexWrap: 'wrap' }}>
              <LinkQ href="/manifeste">Lire le manifeste</LinkQ>
              <LinkQ href="/reseau">Découvrir le réseau</LinkQ>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={1.25} className="hero-foot">
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', width: '100%' }}>
            <span className="meta">10 villes de référence — 3 continents</span>
            <span className="meta">Défiler ↓</span>
          </div>
        </FadeIn>
      </header>

      <hr className="hairline" />

      {/* ============ 01 L'INSTITUTION ============ */}
      <section className="section" id="institution">
        <div className="wrap">
          <div className="grid-230">
            <Reveal>
              <span className="meta">01 — L&apos;institution</span>
            </Reveal>
            <div className="body-copy">
              <Reveal>
                <h2 className="d-l" style={{ marginBottom: 34, maxWidth: '22ch' }}>
                  Nous développons un réseau de formation internationale, construit autour du réel.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead" style={{ marginBottom: '1.3em' }}>
                  Des programmes internationaux, professionnels et flexibles, conçus avec les entreprises et les
                  partenaires locaux.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  La formation professionnelle a longtemps séparé le lieu où l&apos;on apprend du lieu où l&apos;on
                  travaille. Nous croyons que cette séparation n&apos;a plus de sens. Les compétences qui comptent —
                  la maîtrise d&apos;un métier, l&apos;aisance internationale, la capacité à travailler entre les
                  cultures — s&apos;acquièrent dans le monde réel, au contact de celles et ceux qui le font.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p style={{ marginTop: '1.15em' }}>
                  C&apos;est pourquoi nos programmes ne sont jamais standardisés. Ils sont conçus avec des entreprises,
                  délivrés par des praticiens et adaptés aux villes, aux partenaires et aux objectifs de chaque
                  groupe.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div style={{ marginTop: 36 }}>
                  <LinkQ href="/manifeste">Ce que nous croyons</LinkQ>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <ParallaxFigure
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2880"
              alt="Un praticien s'adresse à une promotion de participants lors d'une masterclass"
              captionLeft="Masterclass — un praticien face à sa promotion · I"
              captionRight="Fig. 01"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ DOCTRINE ============ */}
      <Doctrine
        tall
        quote="L'international n'est plus une expérience à vivre. C'est une compétence à acquérir."
        refText="Manifeste, conviction 02"
      >
        <LinkQ href="/manifeste" inverted>
          Lire l&apos;intégralité
        </LinkQ>
      </Doctrine>

      {/* ============ 02 LES INSTITUTS ============ */}
      <section className="world world--api" id="institutes" style={{ padding: 'clamp(84px,10vw,150px) 0' }}>
        <div className="wrap">
          <div className="world-grid">
            <div>
              <Reveal>
                <span className="q">American</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2>
                  Professional
                  <br />
                  Institute
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="story">
                  <p>
                    L&apos;Amérique du Nord réunit certains des écosystèmes les plus stimulants pour observer les métiers
                    en transformation : recherche en intelligence artificielle à Montréal, finance à New York et
                    commerce international à Miami.
                  </p>
                  <p>
                    American Professional Institute développe des programmes ancrés dans ces environnements. Les
                    villes et partenaires sont mobilisés selon les objectifs pédagogiques, le calendrier et le profil
                    de chaque groupe.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="cta">
                  <LinkQ href="/reseau#api" inverted>
                    Explorer l&apos;institut
                  </LinkQ>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="visual">
              <div className="frame">
                <Image
                  src="https://images.unsplash.com/photo-1522083165195-3424ed129620?w=1400&q=80"
                  alt="Manhattan vue du ciel au crépuscule"
                  fill
                  sizes="(min-width: 980px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="vmeta">
                <span className="meta">Montréal · New York · Miami</span>
                <span className="meta">3 villes de référence</span>
              </div>
              <div className="themes">
                <div className="theme"><span>Innovation &amp; Technologie</span><em>I</em></div>
                <div className="theme"><span>Business &amp; Finance</span><em>II</em></div>
                <div className="theme"><span>Intelligence artificielle</span><em>III</em></div>
                <div className="theme"><span>Entrepreneuriat</span><em>IV</em></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="world world--epi" style={{ padding: 'clamp(84px,10vw,150px) 0' }}>
        <div className="wrap">
          <div className="world-grid">
            <div>
              <Reveal>
                <span className="q">European</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2>
                  Professional
                  <br />
                  Institute
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="story">
                  <p>
                    L&apos;Europe associe des savoir-faire établis, des industries d&apos;excellence et des institutions qui
                    structurent durablement les métiers.
                  </p>
                  <p>
                    European Professional Institute développe des expériences autour du luxe, de l&apos;industrie, du
                    patrimoine et de la diplomatie, en lien avec les villes et les organisations qui les incarnent.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="cta">
                  <LinkQ href="/reseau#epi" inverted>
                    Explorer l&apos;institut
                  </LinkQ>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="visual">
              <div className="frame">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/3840px-Sevilla_Cathedral_-_Southeast.jpg"
                  alt="La cathédrale de Séville et la Giralda"
                  fill
                  sizes="(min-width: 980px) 45vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '68% center' }}
                />
              </div>
              <div className="vmeta">
                <span className="meta">Séville · Londres · Berlin · Rome · Malte</span>
                <span className="meta">5 villes de référence</span>
              </div>
              <div className="themes">
                <div className="theme"><span>Industrie &amp; Savoir-faire</span><em>I</em></div>
                <div className="theme"><span>Luxe &amp; Patrimoine</span><em>II</em></div>
                <div className="theme"><span>Diplomatie &amp; Institutions</span><em>III</em></div>
                <div className="theme"><span>Création &amp; Culture</span><em>IV</em></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="world world--gln" style={{ padding: 'clamp(60px,7vw,100px) 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 28, flexWrap: 'wrap' }}>
            <div>
              <Reveal>
                <span className="q">Global</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)' }}>Learning Network</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="story" style={{ marginTop: 20, maxWidth: '46ch' }}>
                  Au-delà des deux instituts, Global Learning Network ouvre progressivement de nouveaux terrains
                  d&apos;apprentissage — Marrakech et Séoul aujourd&apos;hui, d&apos;autres villes demain.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <LinkQ href="/reseau#gln" inverted>
                Découvrir
              </LinkQ>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 03 L'ATLAS ============ */}
      <section className="section" id="atlas" style={{ paddingBottom: 'clamp(50px,6vw,80px)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <Reveal>
              <span className="meta">03 — L&apos;atlas</span>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="d-l">Dix villes de référence. Dix façons d&apos;apprendre le monde.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead" style={{ marginTop: 22 }}>
                  Chaque ville du réseau a été choisie pour ce qu&apos;elle peut apporter à un programme. En voici cinq ;
                  les destinations sont activées selon les projets, les partenaires et les objectifs pédagogiques.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Atlas />

      <section style={{ padding: 'clamp(40px,5vw,60px) 0 0' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', alignItems: 'baseline' }}>
          <Reveal>
            <span className="meta">Miami · Rome · Malte · Marrakech · Séoul — un réseau qui continue de se déployer</span>
          </Reveal>
          <Reveal delay={0.1}>
            <LinkQ href="/reseau">Explorer les dix villes</LinkQ>
          </Reveal>
        </div>
      </section>

      {/* ============ 04 PROGRAMS ============ */}
      <section className="section" id="programs">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">04 — Programs &amp; Solutions</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Nous ne vendons pas un catalogue. Nous concevons des expériences.</h2>
            </Reveal>
          </div>
          {[
            { href: '/programs', n: 'I', t: 'Programs & Solutions', d: 'Onze briques pédagogiques, assemblées autour des objectifs de chaque groupe.' },
            { href: '/learning-expeditions', n: 'II', t: 'Learning Expeditions', d: 'Notre philosophie pédagogique : la ville et le secteur comme salle de classe.' },
            { href: '/professional-visits', n: 'III', t: 'Professional Visits & Immersions', d: "L'entreprise comme faculté : visites, rencontres de dirigeants, masterclasses en entreprise." },
            { href: '/ai-emerging-skills', n: 'IV', t: 'AI & Emerging Skills', d: "Apprendre à travailler dans un monde où l'intelligence artificielle devient omniprésente." },
            { href: '/entreprises', n: 'V', t: 'Corporate Learning', d: 'Séminaires, expéditions et immersions internationales pour les entreprises.' }
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

      {/* ============ 05 PERSPECTIVES ============ */}
      <section className="revue section" id="perspectives">
        <div className="wrap">
          <Reveal>
            <div className="revue-mast">
              <div>
                <h2 className="mast-title">Perspectives</h2>
                <p className="sub">La revue de Professional Institute</p>
              </div>
              <div className="ed">
                <span className="meta">Édition inaugurale</span>
                <span className="meta">Été 2026 — N° 01</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <Link href="/perspectives/mobilite-internationale-infrastructure" className="featured" style={{ display: "grid" }}>
              <span className="kind">Essai — En couverture</span>
              <div>
                <h3>Pourquoi la mobilité internationale devient une infrastructure de la formation professionnelle</h3>
                <p className="stand">
                  Pendant des décennies, partir à l&apos;étranger fut un supplément d&apos;âme dans un parcours de
                  formation. Ce temps est terminé : dans les métiers qui comptent, l&apos;international n&apos;est
                  plus une parenthèse — c&apos;est une infrastructure.
                </p>
                <span className="meta fmeta">Professional Institute — 5 min de lecture</span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/perspectives" className="persp-row" style={{ display: "grid" }}>
              <span className="kind">Étude de cas</span>
              <h3>Apprendre un métier à Montréal : ce que l&apos;immersion change réellement</h3>
              <span className="date">2026 — 02</span>
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/perspectives" className="persp-row" style={{ display: "grid" }}>
              <span className="kind">Point de vue</span>
              <h3>L&apos;entreprise comme faculté : repenser qui enseigne</h3>
              <span className="date">2026 — 03</span>
            </Link>
          </Reveal>
          <Reveal>
            <div style={{ marginTop: 40 }}>
              <LinkQ href="/perspectives">Ouvrir la revue</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 06 LE RÉSEAU ============ */}
      <section className="section" id="network">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="meta">06 — Le réseau</span>
            </Reveal>
            <Reveal>
              <h2 className="d-l">Une institution existe par celles et ceux qui la rejoignent.</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="lead">
              Entreprises, établissements d&apos;enseignement, institutions et praticiens : le réseau Professional
              Institute se construit avec des partenaires qui partagent une même exigence pour la formation
              professionnelle et savent l&apos;adapter à chaque contexte.
            </p>
          </Reveal>
          <div className="publics">
            {[
              { n: 'N—01', t: 'Entreprises', d: 'Accueillir, intervenir, former. Les entreprises partenaires sont la faculté vivante de nos programmes.' },
              { n: 'N—02', t: "Établissements d'enseignement", d: 'Écoles, CFA et universités qui intègrent nos expériences d’apprentissage à leurs parcours.' },
              { n: 'N—03', t: 'Institutions', d: 'Organismes publics et institutionnels engagés dans le développement des compétences internationales.' },
              { n: 'N—04', t: 'Praticiens', d: 'Entrepreneurs, cadres, experts et chercheurs qui interviennent au sein de nos sessions.' }
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1} className="public">
                <span className="meta meta--laiton">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 44 }}>
              <LinkQ href="/partenaires">Devenir partenaire institutionnel</LinkQ>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
