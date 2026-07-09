import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-top">
          <div>
            <div className="f-word">
              <span className="q">Réseau mondial</span>Professional Institute
            </div>
            <p className="f-tag">Former les professionnels de demain par l&apos;immersion internationale.</p>
          </div>
          <div className="f-col">
            <span className="meta">L&apos;écosystème</span>
            <Link href="/reseau#api">American Professional Institute</Link>
            <Link href="/reseau#epi">European Professional Institute</Link>
            <Link href="/reseau#gln">Global Learning Network</Link>
            <Link href="/perspectives">Perspectives — la revue</Link>
          </div>
          <div className="f-col">
            <span className="meta">Programs</span>
            <Link href="/programs">Programs &amp; Solutions</Link>
            <Link href="/learning-expeditions">Learning Expeditions</Link>
            <Link href="/professional-visits">Professional Visits</Link>
            <Link href="/ai-emerging-skills">AI &amp; Emerging Skills</Link>
            <Link href="/entreprises">Corporate Learning</Link>
          </div>
          <div className="f-col">
            <span className="meta">L&apos;institution</span>
            <Link href="/manifeste">Manifeste</Link>
            <Link href="/reseau">Professional Learning Hubs</Link>
            <Link href="/partenaires">Partenaires institutionnels</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="f-bottom">
          <span>© {new Date().getFullYear()} Professional Institute Group</span>
          <span>FR / EN</span>
          <span>
            <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/confidentialite">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
