export type AtlasCity = {
  name: string;
  institute: string;
  ambiance: string;
  coords: string;
  specs: string;
  img: string;
  alt: string;
};

export const atlasCities: AtlasCity[] = [
  {
    name: 'Montréal',
    institute: 'American Professional Institute',
    ambiance:
      "La capitale mondiale de la recherche en IA parle deux langues et travaille entre deux continents. On y apprend l'Amérique — en français.",
    coords: '45.5019° N — 73.5674° O',
    specs: 'IA · Business · Créativité',
    img: 'https://images.unsplash.com/photo-1519178614-68673b201f36?w=2200&q=80',
    alt: 'Montréal au crépuscule depuis le belvédère du Mont-Royal'
  },
  {
    name: 'New York',
    institute: 'American Professional Institute',
    ambiance:
      "La ville où chaque industrie a son quartier général. On y apprend l'ambition, la vitesse et l'art de se rendre indispensable.",
    coords: '40.7128° N — 74.0060° O',
    specs: 'Finance · Médias · Consulting',
    img: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=2200&q=80',
    alt: 'Manhattan vue du ciel au crépuscule'
  },
  {
    name: 'Séville',
    institute: 'European Professional Institute',
    ambiance:
      "L'Andalousie enseigne ce que les manuels ignorent : l'hospitalité comme industrie, le patrimoine comme économie, la relation comme métier.",
    coords: '37.3891° N — 5.9845° O',
    specs: 'Hospitality · Commerce · Tourisme',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Atardecer_en_Plaza_de_Espa%C3%B1a.jpg',
    alt: 'La Plaza de España de Séville au coucher du soleil'
  },
  {
    name: 'Berlin',
    institute: 'European Professional Institute',
    ambiance:
      "La ville qui s'est réinventée plus souvent qu'aucune autre. On y apprend la transformation — industrielle, créative, politique.",
    coords: '52.5200° N — 13.4050° E',
    specs: 'Industrie · Startups · Création',
    img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=2200&q=80',
    alt: 'Berlin, la Spree et la tour de télévision'
  },
  {
    name: 'Londres',
    institute: 'European Professional Institute',
    ambiance:
      'Le carrefour où le monde entier vient faire des affaires. On y apprend à travailler avec toutes les cultures à la fois.',
    coords: '51.5074° N — 0.1278° O',
    specs: 'Finance · Legal · International',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2200&q=80',
    alt: 'Londres au crépuscule'
  }
];
