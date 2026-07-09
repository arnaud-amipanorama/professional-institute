import ContactForm from '@/components/ContactForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Contact', "Échanger avec l'équipe Professional Institute.", '/contact');

export default function ContactPage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Contact</span>
          </div>
          <h1 className="d-xl2">Échanger avec notre équipe.</h1>
          <p className="lead">
            Chaque programme commence par une conversation : vos objectifs, votre groupe, vos échéances.
            Écrivez-nous — nous répondons personnellement.
          </p>
        </div>
      </header>

      <section style={{ paddingBottom: 'clamp(76px,9.5vw,140px)' }}>
        <div className="wrap">
          <div className="grid-230">
            <div>
              <span className="meta" style={{ display: 'block', marginBottom: 20 }}>
                Coordonnées
              </span>
              <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 2 }}>
                <span className="meta" style={{ display: 'block', marginBottom: 2 }}>
                  Écrire
                </span>
                contact@professionalinstitute.org
              </p>
              <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 2, marginTop: 22 }}>
                <span className="meta" style={{ display: 'block', marginBottom: 2 }}>
                  Réseau
                </span>
                Montréal · New York · Miami
                <br />
                Séville · Londres · Berlin · Rome · Malte
                <br />
                Marrakech · Séoul
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
