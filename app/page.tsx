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
            <div className="meta meta--laiton" style={{ marginBottom: 'clamp(16px,2.2vh,26px)' }}>
              Manifeste — Extrait 01
            </div>
          </FadeIn>
          <HeroTitle
            lines={['Le monde professionnel', 'est devenu la plus vaste', 'salle de classe au monde.']}
          />
          <FadeIn delay={0.75}>
            <p className="lead" style={{ marginTop: 'clamp(20px,2.8vh,32px)' }}>
              Professional Institute est un écosystème mondial de formation professionnelle. Nous concevons des
              expériences d&apos;apprentissage qui placent les participants au contact direct des villes, des
              entreprises et des institutions où le travail s&apos;invente.
            </p>
          </FadeIn>
          <FadeIn delay={0.95}>
            <div style={{ marginTop: 'clamp(22px,3vh,34px)', display: 'flex', gap: 36, flexWrap: 'wrap' }}>
              <LinkQ href="/manifeste">Lire le manifeste</LinkQ>
              <LinkQ href="/reseau">Découvrir le réseau</LinkQ>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={1.25} className="hero-foot">
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', width: '100%' }}>
            <span className="meta">10 Professional Learning Hubs — 3 continents</span>
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
                  Nous ne construisons pas des écoles. Nous construisons une nouvelle génération
                  d&apos;institutions éducatives.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead" style={{ marginBottom: '1.3em' }}>
                  Des institutions internationales, professionnelles, connectées aux entreprises, conçues autour de
                  l&apos;expérience.
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
                  C&apos;est pourquoi nos instituts ne ressemblent pas à des écoles. Nos expériences
                  d&apos;apprentissage sont conçues avec des entreprises, délivrées par des praticiens, et ancrées
                  dans les villes où les industries s&apos;inventent.
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
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=2000&q=80"
              alt="Architecture d'un quartier d'affaires au crépuscule"
              captionLeft="Quartier des affaires — plan architectural · I"
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
                    L&apos;Amérique du Nord est le continent où le travail se réinvente le plus vite — dans les
                    laboratoires d&apos;intelligence artificielle de Montréal, les tours de Manhattan et les places du
                    commerce international de Miami.
                  </p>
                  <p>
                    American Professional Institute place ses participants au cœur de cette accélération : au contact
                    des entreprises technologiques, des places financières et des écosystèmes d&apos;innovation qui
                    redessinent les métiers.
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
                <span className="meta">3 hubs</span>
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
                    L&apos;Europe est le continent de la profondeur : des maisons centenaires, des industries
                    d&apos;excellence, des institutions qui gouvernent le monde et des savoir-faire que personne
                    d&apos;autre ne détient.
                  </p>
                  <p>
                    European Professional Institute enseigne ce que l&apos;Europe fait mieux que quiconque — le luxe,
                    l&apos;industrie, le patrimoine, la diplomatie — au contact des villes et des organisations qui
                    les incarnent.
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
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Atardecer_en_Plaza_de_Espa%C3%B1a.jpg"
                  alt="La Plaza de España de Séville au coucher du soleil"
                  fill
                  sizes="(min-width: 980px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="vmeta">
                <span className="meta">Séville · Londres · Berlin · Rome · Malte</span>
                <span className="meta">5 hubs</span>
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
                  Au-delà des instituts, des hubs sur les terrains d&apos;apprentissage de demain — Marrakech et Séoul
                  aujourd&apos;hui, d&apos;autres à venir.
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
                <h2 className="d-l">Dix villes. Dix façons d&apos;apprendre le monde.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead" style={{ marginTop: 22 }}>
                  Chaque ville du réseau a été choisie pour ce qu&apos;elle enseigne — et chacune accueille toutes les
                  disciplines. En voici cinq ; les dix vivent dans le réseau.
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
            <span className="meta">Miami · Rome · Malte · Marrakech · Séoul — et le réseau en développement</span>
          </Reveal>
          <Reveal delay={0.1}>
            <LinkQ href="/reseau">Explorer les dix hubs</LinkQ>
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
            { href: '/entreprises', n: 'V', t: 'Corporate Learning', d: 'Séminaires, expeditions et immersions internationales pour les entreprises.' }
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
              Institute se construit avec des partenaires institutionnels qui partagent une même conviction sur
              l&apos;avenir de la formation professionnelle.
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
