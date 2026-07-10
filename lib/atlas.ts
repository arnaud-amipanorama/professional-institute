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
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Montreal_Skyline_from_Mont_Royal_golden_hour.jpg/3840px-Montreal_Skyline_from_Mont_Royal_golden_hour.jpg',
    alt: "La skyline de Montréal depuis le belvédère du Mont-Royal, à l'heure dorée"
  },
  {
    name: 'New York',
    institute: 'American Professional Institute',
    ambiance:
      "La ville où chaque industrie a son quartier général. On y apprend l'ambition, la vitesse et l'art de se rendre indispensable.",
    coords: '40.7128° N — 74.0060° O',
    specs: 'Finance · Médias · Consulting',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/New_York_City_skyline_with_Statue_of_Liberty_at_dusk_aerial_2018.jpg/3840px-New_York_City_skyline_with_Statue_of_Liberty_at_dusk_aerial_2018.jpg',
    alt: "La Statue de la Liberté et Lower Manhattan à l'heure bleue"
  },
  {
    name: 'Séville',
    institute: 'European Professional Institute',
    ambiance:
      "L'Andalousie enseigne ce que les manuels ignorent : l'hospitalité comme industrie, le patrimoine comme économie, la relation comme métier.",
    coords: '37.3891° N — 5.9845° O',
    specs: 'Hospitality · Commerce · Tourisme',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/3840px-Sevilla_Cathedral_-_Southeast.jpg',
    alt: 'La cathédrale de Séville et la Giralda'
  },
  {
    name: 'Berlin',
    institute: 'European Professional Institute',
    ambiance:
      "La ville qui s'est réinventée plus souvent qu'aucune autre. On y apprend la transformation — industrielle, créative, politique.",
    coords: '52.5200° N — 13.4050° E',
    specs: 'Industrie · Startups · Création',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blue_Hour_in_Berlin.jpg/3840px-Blue_Hour_in_Berlin.jpg',
    alt: "Berlin à l'heure bleue — la Spree, la cathédrale et la tour de télévision"
  },
  {
    name: 'Londres',
    institute: 'European Professional Institute',
    ambiance:
      'Le carrefour où le monde entier vient faire des affaires. On y apprend à travailler avec toutes les cultures à la fois.',
    coords: '51.5074° N — 0.1278° O',
    specs: 'Finance · Legal · International',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tower_Bridge_London_Dusk_Feb_2006.jpg/3840px-Tower_Bridge_London_Dusk_Feb_2006.jpg',
    alt: "Le Tower Bridge de Londres à l'heure bleue"
  }
];
