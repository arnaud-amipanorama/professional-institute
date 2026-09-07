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
  /** Une phrase d'ambiance, la légende éditoriale. */
  ambiance: string;
  /** Paragraphes longs pour la page dédiée. */
  story: string[];
  specs: string[];
  /** Image vérifiée visuellement, absente pour les hubs sans photo validée. */
  img?: string;
  alt?: string;
};

export const hubs: Hub[] = [
  {
    slug: 'montreal',
    city: 'Montréal',
    instituteId: 'api',
    coord: '45.5019° N, 73.5674° O',
    ambiance:
      "Un grand pôle de recherche en IA, bilingue et situé en Amérique du Nord. Une ville de référence pour découvrir les codes professionnels du continent.",
    story: [
      "Montréal associe une culture professionnelle d'Amérique du Nord à une pratique quotidienne du français et de l'anglais. Pour un participant francophone, c'est une porte d'entrée accessible vers les codes de travail du continent.",
      "La ville compte parmi les principaux écosystèmes de recherche en intelligence artificielle et réunit des acteurs de l'innovation, de la création et de l'entrepreneuriat. Selon les projets, les programmes peuvent aborder l'IA, le business, les ressources humaines, le marketing, l'hôtellerie ou la créativité."
    ],
    specs: ['IA · Business · Innovation', 'RH · Marketing · Créativité', 'Hôtellerie · Design · Recherche'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Montreal_Skyline_from_Mont_Royal_golden_hour.jpg/3840px-Montreal_Skyline_from_Mont_Royal_golden_hour.jpg',
    alt: "La skyline de Montréal depuis le belvédère du Mont Royal, à l'heure dorée"
  },
  {
    slug: 'new-york',
    city: 'New York',
    instituteId: 'api',
    coord: '40.7128° N, 74.0060° O',
    ambiance:
      "Une ville de référence pour observer finance, médias, conseil et entrepreneuriat à l'échelle internationale.",
    story: [
      "New York rassemble des acteurs majeurs de la finance, des médias, du conseil, de la mode et de l'immobilier. C'est un environnement précieux pour comprendre les rythmes, les exigences et les codes de secteurs très internationalisés.",
      "Les programmes conçus à New York peuvent associer rencontres de dirigeants, immersions dans les quartiers d'affaires et études de cas. L'objectif est de donner aux participants des repères concrets, à rapporter dans leur propre pratique."
    ],
    specs: ['Finance · Médias · Consulting', 'Entrepreneuriat · Business international', 'Marketing · RH'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/New_York_City_skyline_with_Statue_of_Liberty_at_dusk_aerial_2018.jpg/3840px-New_York_City_skyline_with_Statue_of_Liberty_at_dusk_aerial_2018.jpg',
    alt: "La Statue de la Liberté et Lower Manhattan à l'heure bleue"
  },
  {
    slug: 'miami',
    city: 'Miami',
    instituteId: 'api',
    coord: '25.7617° N, 80.1918° O',
    ambiance:
      "Une porte d'entrée vers l'Amérique latine et un environnement dynamique pour le commerce international.",
    story: [
      "Miami relie étroitement l'Amérique du Nord et l'Amérique latine. Commerce international, tech, finance, hospitality et immobilier y offrent des angles concrets pour comprendre des marchés en mouvement.",
      "Les programmes peuvent y travailler la relation client, le développement international, l'hospitality ou l'immobilier, en tenant compte du contexte biculturel et bilingue de la ville."
    ],
    specs: ['Amérique latine · Commerce international', 'Hospitality · Immobilier', 'Luxury · Tech'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Twilight_Miami_Skyline.jpg/3840px-Twilight_Miami_Skyline.jpg',
    alt: 'La skyline de Miami au crépuscule depuis la baie de Biscayne'
  },
  {
    slug: 'seville',
    city: 'Séville',
    instituteId: 'epi',
    coord: '37.3891° N, 5.9845° O',
    ambiance:
      "Une ville de référence pour comprendre l'hospitalité, le tourisme, le commerce et l'économie du patrimoine.",
    story: [
      "Séville offre un terrain riche pour étudier l'économie de l'expérience. Le tourisme et l'hospitalité y tiennent une place importante, tandis que le patrimoine participe pleinement à la vie économique de la ville.",
      "Les programmes sévillans plongent les participants dans cette réalité : commerce, marketing, développement international et entrepreneuriat s'y apprennent au contact d'un tissu d'entreprises où la relation humaine reste la première compétence professionnelle."
    ],
    specs: ['Tourisme · Hospitality · Commerce', 'Marketing · Développement international', 'Entrepreneuriat'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/3840px-Sevilla_Cathedral_-_Southeast.jpg',
    alt: 'La cathédrale de Séville et la Giralda'
  },
  {
    slug: 'londres',
    city: 'Londres',
    instituteId: 'epi',
    coord: '51.5074° N, 0.1278° O',
    ambiance:
      'Un carrefour international pour la finance, le conseil, le droit et les échanges multiculturels.',
    story: [
      "Londres réunit des cultures professionnelles très diverses. La finance, le droit, le conseil et l'innovation s'y pratiquent à l'échelle internationale, dans un environnement où la précision et la diversité des interlocuteurs comptent beaucoup.",
      "Un programme londonien est une immersion dans le business international à l'état pur : on y apprend la précision des institutions, la diversité des interlocuteurs et l'art de la négociation entre cultures."
    ],
    specs: ['Finance · Conseil · Legal', 'International Business · Innovation'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tower_Bridge_London_Dusk_Feb_2006.jpg/3840px-Tower_Bridge_London_Dusk_Feb_2006.jpg',
    alt: "Le Tower Bridge de Londres à l'heure bleue"
  },
  {
    slug: 'berlin',
    city: 'Berlin',
    instituteId: 'epi',
    coord: '52.5200° N, 13.4050° E',
    ambiance:
      "Un terrain particulièrement parlant pour travailler la transformation industrielle, créative et urbaine.",
    story: [
      "Berlin s'est profondément transformée au cours des dernières décennies. Cette histoire en fait un terrain pertinent pour étudier l'évolution des organisations, des industries et des quartiers.",
      "Entre l'industrie allemande, l'un des écosystèmes startup les plus actifs du continent et une scène créative de premier plan, les programmes berlinois enseignent comment les organisations changent, et ce que cela coûte, exige et permet."
    ],
    specs: ['Industrie · Startups · Transformation', 'Manufacturing · Créativité'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blue_Hour_in_Berlin.jpg/3840px-Blue_Hour_in_Berlin.jpg',
    alt: "Berlin à l'heure bleue, la Spree, la cathédrale et la tour de télévision"
  },
  {
    slug: 'rome',
    city: 'Rome',
    instituteId: 'epi',
    coord: '41.9028° N, 12.4964° E',
    ambiance:
      "Deux mille ans d'institutions et l'une des grandes économies industrielles d'Europe. La manière italienne de faire de l'excellence un métier.",
    story: [
      "Rome est une leçon permanente sur la longévité des institutions, politiques, religieuses, culturelles. C'est aussi la capitale d'un pays dont l'industrie, le luxe et le design comptent parmi les plus admirés au monde.",
      "Les programmes romains explorent cette double profondeur : comprendre comment les institutions durent, et comment l'excellence, dans le luxe, le patrimoine, la culture, l'industrie italienne, devient un métier qui se transmet."
    ],
    specs: ['Institutions · Luxe · Patrimoine', 'Culture · Industrie italienne'],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rome_from_St_Peter%27s_Basilica_%2848853423021%29.jpg/3840px-Rome_from_St_Peter%27s_Basilica_%2848853423021%29.jpg",
    alt: "Rome et la place Saint Pierre depuis le dôme de la basilique, à l'heure dorée"
  },
  {
    slug: 'malte',
    city: 'Malte',
    instituteId: 'epi',
    coord: '35.8989° N, 14.5146° E',
    ambiance:
      "Une île anglophone au centre de la Méditerranée, devenue une place des services internationaux, du gaming et du digital.",
    story: [
      "Malte est un cas d'école : un petit État insulaire qui s'est construit une place mondiale dans les services internationaux, le gaming et le digital, en anglais, au centre de la Méditerranée.",
      "C'est le hub où l'anglais professionnel s'apprend dans un écosystème d'affaires réel, pas dans une salle de cours : les participants y pratiquent la langue au contact d'industries qui ne fonctionnent qu'en anglais."
    ],
    specs: ['Gaming · Finance · Anglais', 'Services internationaux · Digital'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Panorama_Malte.jpg/3840px-Panorama_Malte.jpg',
    alt: 'La Valette, la presqu’île fortifiée au coucher du soleil'
  },
  {
    slug: 'marrakech',
    city: 'Marrakech',
    instituteId: 'gln',
    coord: '31.6295° N, 7.9811° O',
    ambiance:
      "Une destination de référence pour l'hospitalité et une ouverture vers plusieurs économies africaines.",
    story: [
      "Marrakech permet d'aborder l'hospitalité de luxe, l'art de recevoir et les exigences de service dans un environnement international.",
      "La ville offre également un point d'entrée pour explorer des dynamiques de développement et d'entrepreneuriat sur le continent africain."
    ],
    specs: ['Hospitality · Luxury · Développement', 'Afrique · Entrepreneuriat'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pavilion_of_the_Menara_Gardens.jpg/3840px-Pavilion_of_the_Menara_Gardens.jpg',
    alt: 'Le pavillon des jardins de la Ménara à Marrakech, reflété dans son bassin'
  },
  {
    slug: 'seoul',
    city: 'Séoul',
    instituteId: 'gln',
    coord: '37.5665° N, 126.9780° E',
    ambiance:
      "Une ville de référence pour observer les liens entre industrie, technologie, design et culture.",
    story: [
      "Séoul est un environnement stimulant pour comprendre la manière dont industrie, technologie, design et culture peuvent se renforcer mutuellement. Le soft power coréen s'inscrit dans une stratégie industrielle structurée.",
      "Les programmes consacrés à Séoul peuvent explorer innovation, manufacturing, design et management coréen, en lien avec les organisations et partenaires mobilisés pour le projet."
    ],
    specs: ['Innovation · Industrie · Tech', 'K Business · Design · Manufacturing'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Han_River_and_Lotte_World_Tower.jpg/3840px-Han_River_and_Lotte_World_Tower.jpg',
    alt: 'Séoul, la Lotte World Tower et le fleuve Han'
  }
];

export function hubsByInstitute(id: 'api' | 'epi' | 'gln'): Hub[] {
  return hubs.filter((h) => h.instituteId === id);
}

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
