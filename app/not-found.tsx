import LinkQ from '@/components/LinkQ';

export default function NotFound() {
  return (
    <section style={{ minHeight: '78svh', display: 'flex', alignItems: 'center', paddingTop: 76 }}>
      <div className="wrap">
        <span className="meta meta--laiton">Erreur 404</span>
        <h1 className="d-xl2" style={{ marginTop: 20, maxWidth: '18ch' }}>
          Cette page n&apos;existe pas — ou pas encore.
        </h1>
        <p className="lead" style={{ marginTop: 24 }}>
          Le réseau s&apos;étend, le site aussi. En attendant, tout part d&apos;ici.
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 34, flexWrap: 'wrap' }}>
          <LinkQ href="/">Retour à l&apos;accueil</LinkQ>
          <LinkQ href="/reseau">Explorer le réseau</LinkQ>
        </div>
      </div>
    </section>
  );
}
