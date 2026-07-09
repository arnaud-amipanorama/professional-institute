import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Confidentialité', 'Politique de confidentialité du site Professional Institute.', '/confidentialite');

export default function ConfidentialitePage() {
  return (
    <>
      <header className="phero">
        <div className="wrap">
          <div className="crumb">
            <span className="meta meta--laiton">Professional Institute</span>
            <span className="meta">Confidentialité</span>
          </div>
          <h1 className="d-xl2">Politique de confidentialité.</h1>
          <p className="lead">Une règle simple : nous collectons le minimum, et rien à votre insu.</p>
        </div>
      </header>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid-230">
            <span className="meta">Données collectées</span>
            <div className="body-copy">
              <p>
                Ce site ne dépose aucun cookie publicitaire et n&apos;utilise aucun traceur tiers. Les seules données
                personnelles collectées sont celles que vous nous transmettez volontairement via le formulaire de
                contact (nom, organisation, adresse e-mail, message), utilisées uniquement pour répondre à votre
                demande.
                {/* À compléter avant mise en production : base légale, durée de conservation,
                    responsable de traitement, outil d'analytics éventuel. */}
              </p>
            </div>
          </div>
          <div className="grid-230" style={{ marginTop: 'clamp(36px,4vw,52px)' }}>
            <span className="meta">Vos droits</span>
            <div className="body-copy">
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
                des données vous concernant. Pour l&apos;exercer : contact@professionalinstitute.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
