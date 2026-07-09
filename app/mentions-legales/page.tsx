import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Mentions légales', 'Mentions légales du site Professional Institute.', '/mentions-legales');

export default function MentionsPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Mentions légales</span>
          </div>
          <h1 className="d-xl2">Mentions légales.</h1>
        </div>
      </header>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-230">
            <span className="meta">Éditeur</span>
            <div className="body-copy">
              <p>
                Ce site est édité par Professional Institute Group.
                {/* À compléter avant mise en production : dénomination sociale exacte, forme juridique,
                    capital, siège social, RCS/immatriculation, directeur de la publication, contact. */}
              </p>
              <p>Contact : contact@professionalinstitute.org</p>
            </div>
          </div>
          <div className="grid-230" style={{ marginTop: 'clamp(36px,4vw,52px)' }}>
            <span className="meta">Hébergement</span>
            <div className="body-copy">
              <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.</p>
            </div>
          </div>
          <div className="grid-230" style={{ marginTop: 'clamp(36px,4vw,52px)' }}>
            <span className="meta">Propriété</span>
            <div className="body-copy">
              <p>
                L&apos;ensemble des contenus de ce site — textes, identité visuelle, marques et éléments graphiques —
                est la propriété de Professional Institute Group ou fait l&apos;objet d&apos;autorisations
                d&apos;utilisation. Toute reproduction non autorisée est interdite.
              </p>
            </div>
          </div>
          <div className="grid-230" style={{ marginTop: 'clamp(36px,4vw,52px)' }}>
            <span className="meta">Crédits photographiques</span>
            <div className="body-copy">
              <p style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
                Photographies de villes : Montréal, New York, Berlin, Londres et vues architecturales via Unsplash
                (licence Unsplash). Séville — « Atardecer en Plaza de España », Ruperez74, CC BY-SA 3.0 ; Miami —
                « City Skyline from Biscayne Bay », P. Hughes, CC BY 4.0 ; Rome — « Panoramic view of Rome from
                Gianicolo Hill », Krzysztof Golik, CC BY-SA 4.0 ; La Valette — « Valletta from Sliema », Keith
                Ruffles, CC BY 3.0 ; Marrakech — « Kutubiyya Mosque, Marrakesh », Jakub Hałun, CC BY 4.0 ; Séoul —
                « Seoul Skyline Night 2018 », mauveine.kim, CC0 — via Wikimedia Commons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
