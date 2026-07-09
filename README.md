# Professional Institute — Site institutionnel

Site du réseau mondial Professional Institute.
**Stack :** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

## Déployer sur Vercel

1. Pousser ce dossier sur un dépôt GitHub :
   ```bash
   git init
   git add .
   git commit -m "Professional Institute — v1"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/professional-institute.git
   git push -u origin main
   ```
2. Sur https://vercel.com → **Add New Project** → importer le dépôt.
3. Vercel détecte Next.js automatiquement — **aucune configuration nécessaire**. Cliquer **Deploy**.
4. Chaque `git push` sur `main` redéploie automatiquement le site.

Quand le domaine définitif est connu : le brancher dans Vercel (Settings → Domains),
puis mettre à jour `siteUrl` dans `lib/site.ts` (utilisé par le sitemap, robots et l'Open Graph).

## Structure

```
app/                  Pages (App Router) — une route par page
  layout.tsx          Fontes, métadonnées globales, Nav + Footer
  globals.css         Design system (Document 001) — tokens et composants
  sitemap.ts          Sitemap généré (/sitemap.xml)
  robots.ts           Robots (/robots.txt)
components/           Composants réutilisables
  Reveal.tsx          Reveal au scroll (Framer Motion, une seule fois)
  HeroTitle.tsx       Titre révélé ligne par ligne (hero uniquement)
  ParallaxFigure.tsx  Figure avec parallax léger (≤ 8 %)
  Atlas.tsx           Panneaux de villes plein écran empilés au scroll
  Doctrine.tsx        Bande de citation doctrinale
  Nav / Footer        Navigation et pied de page communs
  ContactForm.tsx     Formulaire préparé, non connecté
lib/
  site.ts             URL et nom du site (source unique)
  seo.ts              Helper de métadonnées par page
  atlas.ts            Données des villes de l'Atlas
public/               favicon.svg, robots.txt statique de secours
```

## Remplacer les images

Les images proviennent d'Unsplash pour l'instant (`images.unsplash.com`,
autorisé dans `next.config.mjs`). Pour passer aux images propriétaires :

1. Déposer les fichiers dans `public/images/` (ou sur votre CDN et l'ajouter aux `remotePatterns`).
2. Mettre à jour les URLs dans `lib/atlas.ts` et dans les pages concernées
   (`app/page.tsx` : figure institution + visuels des instituts).
3. `next/image` optimise automatiquement (formats modernes, tailles responsives, lazy loading).

## Activer le formulaire de contact

`components/ContactForm.tsx` est prêt mais non connecté. Deux options :
- créer `app/api/contact/route.ts` et envoyer via Resend / SendGrid ;
- ou brancher un service type Formspree.
Remplacer le corps de `handleSubmit` en conséquence.

## Fontes

- Inter et IBM Plex Mono : auto-hébergées via `next/font` (zéro requête externe).
- General Sans (registre display) : chargée via Fontshare pour l'instant.
  Pour la production long terme : auto-héberger avec la licence Fontshare (gratuite),
  ou basculer vers Neue Haas Grotesk Display avec la licence adéquate.

## Animations

Langage de mouvement du design system :
courbe unique `cubic-bezier(0.16, 1, 0.3, 1)`, reveals 0,9 s une seule fois,
parallax ≤ 8 %, `prefers-reduced-motion` respecté globalement
(`MotionConfig reducedMotion="user"` dans `components/Providers.tsx`).
