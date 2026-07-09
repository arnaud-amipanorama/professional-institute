export type ArticleSection = {
  label: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  kind: 'Essai' | 'Point de vue' | 'Analyse' | 'Étude de cas';
  title: string;
  standfirst: string;
  /** Citation pleine largeur insérée après la section indiquée (index). */
  pull?: { text: string; after: number };
  sections: ArticleSection[];
  issue: string;
};

export const articles: Article[] = [
  {
    slug: 'mobilite-internationale-infrastructure',
    kind: 'Essai',
    title: 'Pourquoi la mobilité internationale devient une infrastructure de la formation professionnelle',
    standfirst:
      "Pendant des décennies, partir à l'étranger fut un supplément d'âme dans un parcours de formation. Ce temps est terminé : dans les métiers qui comptent, l'international n'est plus une parenthèse — c'est une infrastructure.",
    pull: {
      text: "Il n'y a plus de métier local — il n'y a que des métiers dont on n'a pas encore remarqué qu'ils sont devenus internationaux.",
      after: 0
    },
    issue: 'N° 01 — Été 2026',
    sections: [
      {
        label: 'I — La parenthèse',
        paragraphs: [
          "Pendant longtemps, la mobilité internationale a été racontée comme une expérience : quelques mois ailleurs, une langue qui se délie, des souvenirs, une ligne sur un CV. Une parenthèse — belle, formatrice, mais séparée du sérieux de la formation. On partait en plus de son parcours, rarement au cœur de celui-ci.",
          "Cette manière de voir avait sa logique dans un monde où les carrières étaient locales, les chaînes de valeur nationales et les équipes monoculturelles. Ce monde-là a disparu, discrètement mais complètement. Une PME industrielle du Grand Est achète en Asie, vend en Amérique du Nord et recrute au Maghreb. Une équipe marketing travaille chaque semaine avec des collègues, des agences et des plateformes de trois continents. Il n'y a plus de métier local — il n'y a que des métiers dont on n'a pas encore remarqué qu'ils sont devenus internationaux."
        ]
      },
      {
        label: 'II — La compétence',
        paragraphs: [
          "Si le travail est devenu international par défaut, alors la capacité à travailler entre les langues et les cultures n'est plus une qualité d'appoint : c'est une compétence professionnelle au sens plein — quelque chose qui se définit, se développe et s'évalue. Présenter un projet dans une autre langue. Comprendre comment une décision se prend à Séoul, à Berlin ou à New York. Négocier avec quelqu'un dont les codes de politesse sont l'inverse des siens. Découvrir que sa propre façon de faire n'est qu'une façon parmi d'autres.",
          "Or cette compétence a une particularité : elle ne s'enseigne pas dans une salle. On peut y préparer, l'encadrer, la structurer — mais elle ne s'acquiert qu'au contact du réel. C'est précisément ce qui la rend précieuse : elle ne se simule pas, elle ne se résume pas, et aucun module en ligne ne la remplacera."
        ]
      },
      {
        label: "III — L'infrastructure",
        paragraphs: [
          "C'est ici que le mot « infrastructure » prend son sens. Une infrastructure n'est pas un événement : c'est un équipement permanent, conçu, entretenu, sur lequel le reste s'appuie. Dire que la mobilité internationale devient une infrastructure de la formation professionnelle, c'est dire trois choses.",
          "D'abord, qu'elle doit être conçue — comme un programme, pas comme un voyage. Une immersion sans architecture pédagogique produit des souvenirs ; une immersion conçue produit des compétences. La différence ne tient pas à la destination mais à l'ingénierie : objectifs, progression, rencontres choisies, restitution.",
          "Ensuite, qu'elle doit être récurrente — intégrée aux parcours plutôt qu'exceptionnelle. Les établissements qui l'ont compris ne proposent plus « une mobilité » à leurs participants : ils construisent leurs formations avec l'international comme l'un des matériaux de base, au même titre que les cours et les stages.",
          "Enfin, qu'elle exige des opérateurs et des lieux permanents. Une infrastructure suppose des points d'appui stables : des villes choisies pour ce qu'elles enseignent, des réseaux d'organisations prêtes à ouvrir leurs portes, des équipes qui connaissent le terrain. C'est toute la logique des Professional Learning Hubs : non pas des destinations, mais des environnements d'apprentissage équipés et entretenus."
        ]
      },
      {
        label: 'IV — Ce que cela change',
        paragraphs: [
          "Pour les établissements d'enseignement, ce basculement est une opportunité stratégique : la dimension internationale d'un parcours est devenue l'un des premiers critères d'attractivité, et l'un des plus difficiles à improviser seul. Pour les entreprises, c'est un levier de développement des équipes que peu exploitent encore sérieusement. Pour les participants, c'est plus simple encore : les carrières du siècle se construiront entre plusieurs langues, plusieurs cultures et plusieurs façons de travailler — et cela s'apprend.",
          "La question n'est donc plus de savoir s'il faut intégrer l'international à la formation professionnelle. Elle est de savoir qui le fera avec le sérieux d'une infrastructure — et qui continuera de le traiter comme une parenthèse."
        ]
      }
    ]
  },
  {
    slug: 'entreprise-comme-faculte',
    kind: 'Point de vue',
    title: "L'entreprise comme faculté : repenser qui enseigne",
    standfirst:
      "Les personnes qui pratiquent un métier au plus haut niveau détiennent un savoir que nul programme ne peut remplacer. La question n'est pas de savoir si les entreprises ont leur place dans la formation — elle est de savoir comment en faire de véritables enseignantes.",
    pull: {
      text: "Nous ne demandons pas aux entreprises de soutenir l'éducation. Nous leur demandons d'enseigner.",
      after: 1
    },
    issue: 'N° 01 — Été 2026',
    sections: [
      {
        label: 'I — Le monopole finissant',
        paragraphs: [
          "Pendant deux siècles, enseigner un métier a été le monopole d'une figure : le professeur, dans une salle, avec un programme. Ce modèle a produit des choses admirables. Mais il repose sur une hypothèse qui ne tient plus : que le savoir professionnel se stabilise assez longtemps pour être extrait du terrain, mis en manuel, et transmis à distance du monde qui l'a produit.",
          "Dans les métiers qui évoluent vite — et ils évoluent tous vite désormais —, le savoir le plus précieux n'a pas encore eu le temps d'entrer dans les manuels. Il vit dans les organisations : dans les décisions prises la semaine dernière, les erreurs de l'an passé, les méthodes qu'une équipe vient d'inventer parce que rien d'existant ne fonctionnait. Ce savoir-là a des détenteurs : les praticiens. Et il a des lieux : les entreprises."
        ]
      },
      {
        label: 'II — Ce que seuls les praticiens enseignent',
        paragraphs: [
          "Un dirigeant qui raconte une décision difficile n'illustre pas un cours de management : il enseigne quelque chose que le cours ne peut pas contenir — le poids de l'incertitude, la part d'inconfort, ce qu'on sait et ce qu'on ignore au moment de trancher. Un fondateur qui explique un échec enseigne la différence entre une stratégie sur slide et une stratégie dans le réel. Une équipe qui ouvre ses portes enseigne ce qu'aucune description de poste ne dit : comment le travail se fait vraiment.",
          "C'est pourquoi notre Faculty réunit des praticiens — entrepreneurs, cadres, experts, chercheurs, consultants — et pourquoi notre pédagogie mobilise les organisations elles-mêmes comme lieux et comme voix de la formation. Non par posture, mais parce que certaines choses ne s'apprennent nulle part ailleurs."
        ]
      },
      {
        label: "III — Enseigner n'est pas témoigner",
        paragraphs: [
          "Il faut pourtant le dire nettement : faire entrer l'entreprise dans la formation ne consiste pas à multiplier les témoignages. Une visite sans préparation produit une impression ; une intervention sans cadre produit une anecdote. L'écart entre un moment intéressant et un moment d'apprentissage tient à l'ingénierie qui l'entoure.",
          "Trois conditions transforment une rencontre en enseignement. La préparation : le groupe arrive avec des questions construites, des hypothèses à vérifier, un cadre d'analyse. L'articulation : la rencontre s'insère dans une progression — elle éclaire ce qui précède et nourrit ce qui suit. La restitution : ce qui a été observé est formulé, confronté, transformé en conclusions que chacun emporte. C'est ce travail de conception qui fait notre métier — et qui fait la différence entre une entreprise visitée et une entreprise qui enseigne."
        ]
      },
      {
        label: "IV — Ce que l'entreprise y gagne",
        paragraphs: [
          "Reste une question légitime : pourquoi une organisation consacrerait-elle du temps à enseigner ? L'expérience donne des réponses constantes. Parce qu'expliquer son métier à un regard extérieur oblige à le repenser — les questions d'un groupe en formation sont souvent plus dérangeantes que celles d'un consultant. Parce que les organisations qui enseignent rencontrent, avant tout le monde, celles et ceux qui feront le métier demain. Et parce qu'une institution de formation sérieuse offre un cadre où ce temps investi produit quelque chose — pas une opération de communication, un enseignement.",
          "L'université a inventé la faculté pour rassembler celles et ceux qui détiennent le savoir. Le savoir professionnel du XXIᵉ siècle a simplement changé d'adresse. La faculté doit le suivre."
        ]
      }
    ]
  },
  {
    slug: 'ia-recompose-metiers',
    kind: 'Analyse',
    title: "L'IA recompose les métiers : ce que la formation professionnelle doit en faire",
    standfirst:
      "L'intelligence artificielle ne remplace pas les métiers : elle les recompose, tâche par tâche. Pour la formation professionnelle, ce n'est pas un sujet de plus au catalogue — c'est un changement de ce qu'il faut enseigner, et de la manière de l'enseigner.",
    pull: {
      text: 'Les professionnels qui compteront demain ne seront pas ceux qui connaissent un outil.',
      after: 1
    },
    issue: 'N° 01 — Été 2026',
    sections: [
      {
        label: 'I — Recomposition, pas remplacement',
        paragraphs: [
          "Le débat public s'est enfermé dans une question binaire : l'IA va-t-elle remplacer tel métier ? La réalité observable dans les organisations est différente et plus intéressante. Chaque métier est un assemblage de tâches ; l'IA en absorbe certaines, en transforme d'autres, en crée de nouvelles. Le métier demeure — recomposé. Le marketeur passe moins de temps à produire des variantes et plus de temps à juger, cadrer, arbitrer. Le juriste passe moins de temps à chercher et plus de temps à qualifier. Le formateur, moins à fabriquer des supports et plus à concevoir des situations.",
          "Cette recomposition a une conséquence directe pour la formation : ce qu'il faut enseigner n'est pas l'outil — les outils changent tous les six mois — mais la nouvelle répartition du travail entre l'humain et le système, métier par métier."
        ]
      },
      {
        label: 'II — Une compétence transversale',
        paragraphs: [
          "C'est pourquoi nous traitons l'IA comme une compétence professionnelle transversale, au même titre que l'anglais ou la finance : quelque chose qui s'apprend sérieusement, avec un socle et des applications. Le socle : comprendre ce que font réellement les systèmes génératifs, ce qu'ils savent faire et ne savent pas faire ; pratiquer la formulation — le prompt engineering est moins une technique qu'une discipline de pensée ; connaître le paysage des outils et les principes de l'automatisation.",
          "Puis les applications, par fonction : l'IA pour le marketing n'est pas l'IA pour les ressources humaines, qui n'est pas l'IA pour la vente, la veille, la production de contenu ou la stratégie. Un parcours sérieux se construit sur les cas, les données et les contraintes du métier concerné — pas sur des démonstrations génériques qui impressionnent une heure et ne changent rien le lundi suivant."
        ]
      },
      {
        label: 'III — Les limites font partie du programme',
        paragraphs: [
          "Une institution qui enseigne l'IA sans enseigner ses limites forme des utilisateurs dangereux. Les biais des systèmes — qui reproduisent ceux de leurs données. Les erreurs confiantes — d'autant plus trompeuses qu'elles sont bien écrites. La confidentialité — ce qui peut être confié à un système et ce qui ne le peut pas : données clients, propriété intellectuelle, informations personnelles. La gouvernance — comment une organisation encadre les usages : chartes, choix d'outils, formation, conformité.",
          "Ces sujets ne sont pas un chapitre de conclusion qu'on expédie. Ils sont le cœur de ce qui distingue un professionnel formé d'un utilisateur enthousiaste : savoir quand faire confiance au système, quand le vérifier, et quand s'en passer."
        ]
      },
      {
        label: 'IV — Ce que la formation doit en faire',
        paragraphs: [
          "Pour les organismes de formation et les établissements, la conclusion est exigeante. Il ne suffit pas d'ajouter un module « IA » au catalogue. Il faut reprendre chaque programme et se demander : dans ce métier, qu'est-ce que l'IA recompose ? Qu'est-ce qui doit désormais être enseigné qui ne l'était pas ? Qu'est-ce qui, à l'inverse, ne mérite plus le temps qu'on lui consacrait ?",
          "Et il faut l'enseigner comme le reste : par la pratique et par le réel. On n'apprend pas à travailler avec l'IA en écoutant une conférence sur l'IA — on l'apprend en produisant, en automatisant, en se trompant, et en observant des organisations qui ont déjà recomposé leurs processus. C'est un terrain où l'immersion vaut, ici encore, mieux que le discours."
        ]
      }
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Temps de lecture honnête : ~220 mots/minute. */
export function readingTime(a: Article): number {
  const words = [a.standfirst, ...a.sections.flatMap((s) => s.paragraphs)].join(' ').split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 220));
}
