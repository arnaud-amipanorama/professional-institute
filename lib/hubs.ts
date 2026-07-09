export type Institute = {
  id: 'api' | 'epi' | 'gln';
  qualifier: string;
  name: string;
  worldClass: string;
};

export const institutes: Record<string, Institute> = {
  api: { id: 'api', qualifier: 'American', name: 'American Professional Institute', worldClass: 'world--api' },
  epi: { id: 'epi', qualifier: 'European', name: 'European Professional Institute', worldClass: 'world--epi' },
  gln: { id: 'gln', qualifier: 'Global', name: 'Global Learning Network', worldClass: 'world--gln' }
};

export type Hub = {
  slug: string;
  city: string;
  instituteId: 'api' | 'epi' | 'gln';
  coord: string;
  /** Une phrase d'ambiance — la légende éditoriale. */
  ambiance: string;
  /** Paragraphes longs pour la page dédiée. */
  story: string[];
  specs: string[];
  /** Image vérifiée visuellement — absente pour les hubs sans photo validée. */
  img?: string;
  alt?: string;
};

export const hubs: Hub[] = [
  {
    slug: 'montreal',
    city: 'Montréal',
    instituteId: 'api',
    coord: '45.5019° N — 73.5674° O',
    ambiance:
      "La capitale mondiale de la recherche en IA parle deux langues et travaille entre deux continents. On y apprend l'Amérique — en français.",
    story: [
      "Montréal occupe une position que nulle autre ville ne peut revendiquer : une métropole nord-américaine qui pense, travaille et décide en deux langues. Pour un participant francophone, c'est la porte d'entrée idéale vers les codes professionnels du continent — sans que la langue soit un mur.",
      "C'est aussi l'un des premiers écosystèmes mondiaux de recherche en intelligence artificielle, un territoire d'innovation, de création et d'entrepreneuriat où les industries — du jeu vidéo à l'aérospatiale, de l'hôtellerie au design — se laissent approcher. Les programmes y couvrent toutes les disciplines : IA et innovation bien sûr, mais aussi business, ressources humaines, marketing, hôtellerie et créativité."
    ],
    specs: ['IA · Business · Innovation', 'RH · Marketing · Créativité', 'Hôtellerie · Design · Recherche'],
    img: 'https://images.unsplash.com/photo-1519178614-68673b201f36?w=2200&q=80',
    alt: 'Montréal au crépuscule depuis le belvédère du Mont-Royal'
  },
  {
    slug: 'new-york',
    city: 'New York',
    instituteId: 'api',
    coord: '40.7128° N — 74.0060° O',
    ambiance:
      "La ville où chaque industrie a son quartier général. On y apprend l'ambition, la vitesse et l'art de se rendre indispensable.",
    story: [
      "Il n'existe pas de meilleure salle de classe que New York pour comprendre comment les industries se dirigent. La finance, les médias, le conseil, la mode, l'immobilier : chaque secteur y a son état-major, ses codes et son rythme.",
      "Les programmes new-yorkais confrontent les participants à cette intensité : rencontres de dirigeants, immersions dans les quartiers d'affaires, études de cas menées là où elles se sont jouées. On en revient avec autre chose que des connaissances — une échelle de référence."
    ],
    specs: ['Finance · Médias · Consulting', 'Entrepreneuriat · Business international', 'Marketing · RH'],
    img: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=2200&q=80',
    alt: 'Manhattan vue du ciel au crépuscule'
  },
  {
    slug: 'miami',
    city: 'Miami',
    instituteId: 'api',
    coord: '25.7617° N — 80.1918° O',
    ambiance:
      "La porte de l'Amérique latine et l'un des laboratoires du commerce international. Une ville qui travaille en deux langues et sur deux hémisphères.",
    story: [
      "Miami est devenue en une décennie l'une des places d'affaires les plus singulières du continent : capitale officieuse de l'Amérique latine, hub du commerce international, terrain d'expansion de la tech et de la finance, et l'un des marchés d'hospitality et d'immobilier les plus dynamiques au monde.",
      "On y apprend ce que peu d'autres villes enseignent : travailler entre deux hémisphères, en deux langues, dans des industries — luxe, hospitality, immobilier — où la relation est le produit."
    ],
    specs: ['Amérique latine · Commerce international', 'Hospitality · Immobilier', 'Luxury · Tech'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Miami_-_City_Skyline_from_Biscayne_Bay_1.jpg/3840px-Miami_-_City_Skyline_from_Biscayne_Bay_1.jpg',
    alt: 'La skyline de Miami depuis la baie de Biscayne'
  },
  {
    slug: 'seville',
    city: 'Séville',
    instituteId: 'epi',
    coord: '37.3891° N — 5.9845° O',
    ambiance:
      "L'Andalousie enseigne ce que les manuels ignorent : l'hospitalité comme industrie, le patrimoine comme économie, la relation comme métier.",
    story: [
      "Séville est l'une des grandes écoles informelles de l'économie de l'expérience. Le tourisme et l'hospitalité y sont des industries de premier plan, pratiquées avec un savoir-faire que le monde entier vient observer ; le patrimoine y est une économie vivante, pas un décor.",
      "Les programmes sévillans plongent les participants dans cette réalité : commerce, marketing, développement international et entrepreneuriat s'y apprennent au contact d'un tissu d'entreprises où la relation humaine reste la première compétence professionnelle."
    ],
    specs: ['Tourisme · Hospitality · Commerce', 'Marketing · Développement international', 'Entrepreneuriat'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Atardecer_en_Plaza_de_Espa%C3%B1a.jpg',
    alt: 'La Plaza de España de Séville au coucher du soleil'
  },
  {
    slug: 'londres',
    city: 'Londres',
    instituteId: 'epi',
    coord: '51.5074° N — 0.1278° O',
    ambiance:
      'Le carrefour où le monde entier vient faire des affaires. On y apprend à travailler avec toutes les cultures à la fois.',
    story: [
      "Londres reste l'endroit du monde où le plus grand nombre de cultures professionnelles se rencontrent pour travailler ensemble. La finance, le droit, le conseil et l'innovation s'y pratiquent à l'échelle globale, dans une langue et selon des codes qui font référence partout.",
      "Un programme londonien est une immersion dans le business international à l'état pur : on y apprend la précision des institutions, la diversité des interlocuteurs et l'art de la négociation entre cultures."
    ],
    specs: ['Finance · Conseil · Legal', 'International Business · Innovation'],
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2200&q=80',
    alt: 'Londres au crépuscule'
  },
  {
    slug: 'berlin',
    city: 'Berlin',
    instituteId: 'epi',
    coord: '52.5200° N — 13.4050° E',
    ambiance:
      "La ville qui s'est réinventée plus souvent qu'aucune autre. On y apprend la transformation — industrielle, créative, politique.",
    story: [
      "Aucune grande ville européenne ne s'est transformée aussi souvent, ni aussi profondément, que Berlin. C'est ce qui en fait un terrain d'apprentissage unique : la transformation n'y est pas un concept de séminaire, c'est l'histoire de chaque quartier.",
      "Entre l'industrie allemande, l'un des écosystèmes startup les plus actifs du continent et une scène créative de premier plan, les programmes berlinois enseignent comment les organisations changent — et ce que cela coûte, exige et permet."
    ],
    specs: ['Industrie · Startups · Transformation', 'Manufacturing · Créativité'],
    img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=2200&q=80',
    alt: 'Berlin, la Spree et la tour de télévision'
  },
  {
    slug: 'rome',
    city: 'Rome',
    instituteId: 'epi',
    coord: '41.9028° N — 12.4964° E',
    ambiance:
      "Deux mille ans d'institutions et l'une des grandes économies industrielles d'Europe. La manière italienne de faire de l'excellence un métier.",
    story: [
      "Rome est une leçon permanente sur la longévité des institutions — politiques, religieuses, culturelles. C'est aussi la capitale d'un pays dont l'industrie, le luxe et le design comptent parmi les plus admirés au monde.",
      "Les programmes romains explorent cette double profondeur : comprendre comment les institutions durent, et comment l'excellence — dans le luxe, le patrimoine, la culture, l'industrie italienne — devient un métier qui se transmet."
    ],
    specs: ['Institutions · Luxe · Patrimoine', 'Culture · Industrie italienne'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Panoramic_view_of_Rome_from_Gianicolo_Hill_01.jpg/3840px-Panoramic_view_of_Rome_from_Gianicolo_Hill_01.jpg',
    alt: 'Panorama de Rome depuis le Janicule'
  },
  {
    slug: 'malte',
    city: 'Malte',
    instituteId: 'epi',
    coord: '35.8989° N — 14.5146° E',
    ambiance:
      "Une île anglophone au centre de la Méditerranée, devenue une place des services internationaux, du gaming et du digital.",
    story: [
      "Malte est un cas d'école : un petit État insulaire qui s'est construit une place mondiale dans les services internationaux, le gaming et le digital — en anglais, au centre de la Méditerranée.",
      "C'est le hub où l'anglais professionnel s'apprend dans un écosystème d'affaires réel, pas dans une salle de cours : les participants y pratiquent la langue au contact d'industries qui ne fonctionnent qu'en anglais."
    ],
    specs: ['Gaming · Finance · Anglais', 'Services internationaux · Digital'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Valletta_from_Sliema_-_panoramio.jpg',
    alt: 'La Valette vue depuis Sliema'
  },
  {
    slug: 'marrakech',
    city: 'Marrakech',
    instituteId: 'gln',
    coord: '31.6295° N — 7.9811° O',
    ambiance:
      "L'une des capitales mondiales de l'hospitalité de luxe, et une porte d'entrée sur les économies africaines en pleine construction.",
    story: [
      "Marrakech concentre deux apprentissages rares. Le premier : l'hospitalité de luxe au plus haut niveau mondial — un art de recevoir dont les plus grandes maisons internationales viennent s'inspirer.",
      "Le second : une porte d'entrée sur les économies africaines en pleine construction, où le développement et l'entrepreneuriat se pensent à une échelle et à une vitesse que l'Europe a oubliées."
    ],
    specs: ['Hospitality · Luxury · Développement', 'Afrique · Entrepreneuriat'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Kutubiyya_Mosque%2C_Marrakesh%2C_Morocco%2C_20250124_1834_7027.jpg',
    alt: 'La Koutoubia de Marrakech dans la lumière du soir'
  },
  {
    slug: 'seoul',
    city: 'Séoul',
    instituteId: 'gln',
    coord: '37.5665° N — 126.9780° E',
    ambiance:
      "La ville où l'industrie, le design et la culture avancent à la même vitesse. Le K-Business appris à la source.",
    story: [
      "Séoul est le laboratoire de ce que devient une économie quand l'industrie, la technologie, le design et la culture avancent à la même vitesse — et se renforcent mutuellement. Le soft power coréen n'est pas un accident : c'est une stratégie industrielle.",
      "Les programmes séoulites enseignent le K-Business à la source : innovation, manufacturing, design et management coréen, au contact des organisations qui en ont fait un modèle mondial."
    ],
    specs: ['Innovation · Industrie · Tech', 'K-Business · Design · Manufacturing'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Seoul_Skyline_Night_2018.jpg',
    alt: 'Séoul de nuit'
  }
];

export function hubsByInstitute(id: 'api' | 'epi' | 'gln'): Hub[] {
  return hubs.filter((h) => h.instituteId === id);
}

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
