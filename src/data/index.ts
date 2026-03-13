// ─── Données centralisées du portfolio BTS SIO SLAM ─────────────────────────
// Un seul fichier à modifier pour mettre à jour tout le contenu.

export const PERSONAL = {
  name: "Adrien Clavreul",
  email: "adrien.clavreul@gmail.com",
  phone: { display: "07.81.63.10.32", raw: "0781631032" },
  cvPath: "/media/CV_Clavreul_Adrien_2025.pdf",
  photo: "/media/photo.jpg",
  location: "Rennes, Bretagne",
  socials: {
    github: "https://github.com/Adrien-Cl",
    linkedin: "https://www.linkedin.com/in/adrien-clavreul-9672a628b/",
  },
} as const;

// ─── À Propos ────────────────────────────────────────────────────────────────

export const ABOUT = {
  intro:
    "Je suis Adrien Clavreul, étudiant en BTS SIO Option SLAM à l'AFTEC Rennes, actuellement en alternance au CNFPT (Centre National de la Fonction Publique Territoriale).",
  bio: "Passionné par le développement web et le design d'interface, j'ai suivi un Bachelor Chef de Projet Digital avant de me spécialiser en développement applicatif. Je crois que la qualité technique et le soin du détail visuel se renforcent mutuellement.",
  manifeste:
    "Le développement web, c'est l'art de transformer une idée en expérience. Ce qui me passionne, c'est la frontière entre design et code : créer des interfaces qui ne sont pas seulement fonctionnelles, mais qui racontent quelque chose.",
  bts: {
    label: "Le BTS SIO SLAM",
    desc: "Le BTS SIO (Services Informatiques aux Organisations) Option SLAM (Solutions Logicielles et Applications Métiers) est une formation de niveau bac+2 qui forme aux métiers du développement d'applications, de la gestion de bases de données et de la cybersécurité.",
  },
  roles: [
    "Développeur d'applications informatiques",
    "Développeur Full Stack",
    "Analyste-développeur",
    "Intégrateur web",
  ],
  competences: {
    techniques: ["React", "TypeScript", "PHP", "MySQL", "Figma", "WordPress", "Node.js", "Git", "Tailwind CSS", "Docker"],
    langues: [
      { langue: "Français", niveau: "Natif" },
      { langue: "Anglais", niveau: "B2 — Courant" },
    ],
    softSkills: ["Organisation", "Travail d'équipe", "Curiosité", "Autonomie", "Communication"],
  },
} as const;

// ─── Parcours (Formation + Expérience) ───────────────────────────────────────

export type ParcoursType = "formation" | "experience";

export const PARCOURS: {
  type: ParcoursType;
  title: string;
  organization: string;
  date: string;
  desc: string;
  details: string[];
  logo?: string;
  responsabilites?: string[];
  livrables?: string[];
}[] = [
  {
    type: "experience",
    title: "Alternance — Développeur Web & Support IT",
    organization: "CNFPT Rennes",
    date: "2025 — 2027",
    desc: "Développement d'applications métier internes et support informatique de premier niveau pour les agents.",
    details: ["Développement Full Stack", "Support IT", "Applications métier"],
    responsabilites: [
      "Développement et maintenance d'applications métier internes",
      "Participation aux réunions de projet (méthode agile)",
      "Support informatique de premier niveau",
    ],
    livrables: [
      "Application de gestion interne (en cours)",
      "Documentation technique",
      "Rapports d'incidents IT",
    ],
  },
  {
    type: "formation",
    title: "BTS SIO Option SLAM",
    organization: "AFTEC Rennes",
    date: "2025 — 2027",
    desc: "Brevet de Technicien Supérieur aux Services Informatiques aux Organisations.",
    details: ["Développement d'applications", "Gestion de parc informatique", "Cybersécurité"],
    logo: "https://www.aftec.fr/themes/custom/koriolis_starterkit/logos/www_aftec_fr/logo.svg",
  },
  {
    type: "experience",
    title: "CDI — Hôte de Caisse, Fleuriste, Gestion du Coffre",
    organization: "Super U Rennes St Jacques",
    date: "2023 — 2025",
    desc: "Gestion quotidienne du coffre et relation client en caisse et au rayon fleurs.",
    details: ["Gestion du coffre", "Encaissement", "Composition florale"],
    responsabilites: [
      "Contrôle quotidien du coffre de l'établissement",
      "Encaissement et service client",
      "Conseil client au rayon fleurs",
    ],
    livrables: ["Bilans de caisse", "Gestion des stocks fleuriste"],
  },
  {
    type: "formation",
    title: "Bachelor Chef de Projet Digital",
    organization: "Digital Campus Rennes",
    date: "2020 — 2023",
    desc: "Spécialisation en développement web, design et stratégie digitale.",
    details: ["Design Graphique & UI", "Gestion de projet Agile", "Stratégie de communication"],
    logo: "https://www.digital-campus.fr/sites/all/themes/digital_campus/img/logos/logo-digital-campus-dark.svg",
  },
  {
    type: "experience",
    title: "Alternance — Communication Digitale & Développement Web",
    organization: "Rennes Aqua Center",
    date: "2022 — 2023",
    desc: "Refonte du site internet et gestion des réseaux sociaux de l'établissement.",
    details: ["Développement Web", "Community Management", "Création digitale"],
    responsabilites: [
      "Refonte et développement du site internet",
      "Gestion des réseaux sociaux (Instagram, Facebook)",
      "Création de supports de communication",
    ],
    livrables: [
      "Site internet refondu (CMS CMonSite)",
      "Calendrier éditorial mensuel",
      "Visuels et contenus réseaux sociaux",
    ],
  },
  {
    type: "formation",
    title: "Baccalauréat Général",
    organization: "Lycée Julliot de la Morandière",
    date: "2020",
    desc: "Série Scientifique, option Sciences de l'Ingénieur.",
    details: ["Sciences de l'ingénieur", "Mathématiques"],
    logo: "https://julliot.lycee.ac-normandie.fr/local/cache-vignettes/L165xH150/logo-lamo-f5063.png?1763132606",
  },
];

// ─── Projets ──────────────────────────────────────────────────────────────────

export type ProjectFilter = "dev" | "software" | "communication";

export const PROJECTS: {
  title: string;
  category: string;
  filter: ProjectFilter;
  desc: string;
  brief: string;
  imageFrame?: boolean;
  demarche: string[];
  realisation: string;
  autocritique: string;
  tech: string[];
  img: string;
  github?: string;
  link?: string;
}[] = [
  {
    title: "Portfolio Personnel",
    category: "Développement Web",
    filter: "dev",
    desc: "Développement d'un portfolio personnel avec React, TypeScript et Framer Motion pour présenter mes compétences et réalisations.",
    brief:
      "Créer un portfolio en ligne qui reflète mon identité de développeur web et UI/UX, utilisable comme carte de visite professionnelle pour les recruteurs et clients.",
    demarche: [
      "Recherche d'inspiration sur Dribbble et Awwwards pour identifier les tendances en portfolio de développeurs.",
      "Choix d'une direction artistique typographique et minimaliste.",
      "Maquettage sur Figma avec plusieurs itérations avant de fixer la structure finale.",
      "Intégration progressive avec des retours réguliers pour ajuster.",
    ],
    realisation:
      "Développé avec React 18, TypeScript, Framer Motion pour les animations et Tailwind CSS. Système i18n sur-mesure avec script de traduction automatique.",
    autocritique:
      "Le projet m'a appris à poser des choix de design forts. Avec du recul, j'aurais débuté avec un système de design plus structuré (tokens, composants atomiques) pour gagner du temps sur les révisions CSS.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    img: "/media/portfolio-hero.png",
    github: "https://github.com/Adrien-Cl/portfolio",
  },
  {
    title: "SkillSkyDrone",
    category: "Développement Web",
    filter: "dev",
    desc: "Site vitrine WordPress sur-mesure pour une entreprise de services par drone (photographie aérienne, inspection, cartographie).",
    brief:
      "Concevoir un site vitrine professionnel pour une entreprise de services par drone, avec un design qui inspire confiance et met en valeur les prestations.",
    demarche: [
      "Audit des sites concurrents dans le secteur du drone pour identifier les codes visuels.",
      "Entretien client pour définir les priorités : services, galerie média, formulaire de contact.",
      "Choix de WordPress pour permettre au client de mettre à jour son contenu de façon autonome.",
      "Maquettes Figma validées avec 2 révisions demandées par le client.",
    ],
    realisation:
      "Site WordPress avec thème sur-mesure, CSS3 et JavaScript vanilla pour les animations. Plugin ACF pour la gestion des contenus dynamiques. Images optimisées en WebP avec lazy-loading.",
    autocritique:
      "Projet formateur sur la relation client : j'ai appris à cadrer les demandes de modification. Je referais le système d'images en utilisant un CDN dès le départ pour de meilleures performances.",
    tech: ["WordPress", "CSS3", "JavaScript"],
    img: "/media/skillskydrone-hero.png",
    link: "https://skillskydrone.com",
  },
  {
    title: "Application de Réservation Scolaire",
    category: "Développement Logiciel",
    filter: "software",
    desc: "Application client lourd en Python permettant aux professeurs de réserver des salles et ressources informatiques pour leurs classes.",
    brief:
      "Concevoir et développer une application desktop destinée aux enseignants d'un établissement scolaire fictif, leur permettant de gérer les réservations de salles et de matériel pédagogique (salles informatiques, vidéoprojecteurs, etc.). Projet pédagogique réalisé en BTS pour illustrer la gestion de projet et la conception d'application métier.",
    demarche: [
      "Rédaction d'un dictionnaire de données et conception du MCD pour modéliser les entités : professeurs, salles, créneaux et réservations.",
      "Définition des règles de gestion : un professeur ne peut réserver qu'un créneau disponible, détection des conflits de réservation.",
      "Maquettage de l'interface sur Figma pour valider l'ergonomie avant développement.",
      "Mise en place de la base de données MariaDB et développement de la couche d'accès aux données.",
    ],
    realisation:
      "Application client lourd développée en Python avec PySide6 pour l'interface graphique et MariaDB pour la persistance des données. Architecture en couches (UI / logique métier / accès données), gestion des conflits de réservation côté serveur.",
    autocritique:
      "Projet encore en cours de développement. Il m'a permis d'appréhender concrètement le cycle complet de conception : du MCD au code en passant par la maquette. La phase de modélisation en amont a rendu le développement nettement plus fluide.",
    tech: ["Python", "PySide6", "MariaDB"],
    img: "/media/reservation-hero.png",
    imageFrame: true,
  },
  {
    title: "Refonte Rennes Aqua Center",
    category: "Communication Digitale",
    filter: "communication",
    desc: "Modernisation complète de l'interface utilisateur et optimisation du tunnel de conversion pour le site e-commerce d'un complexe aquatique.",
    brief:
      "Refondre le site existant du Rennes Aqua Center pour améliorer l'expérience utilisateur, simplifier la réservation en ligne et moderniser l'image de marque.",
    demarche: [
      "Analyse heuristique du site existant : identification de 12 points de friction dans le parcours utilisateur.",
      "Benchmark des sites de complexes sportifs et aquatiques (national et international).",
      "Wireframes basse fidélité pour valider l'architecture de l'information.",
      "Maquettes haute fidélité sur Figma avec tests utilisateurs informels (5 personnes).",
    ],
    realisation:
      "Intégration sur CMS CMonSite avec personnalisations CSS et JavaScript. Refonte de la charte graphique, nouveau système de navigation, calendrier de réservation. Optimisation mobile-first.",
    autocritique:
      "Ce projet m'a confronté aux contraintes des CMS propriétaires. J'aurais plaidé pour une solution plus ouverte (WordPress ou headless). Les tests utilisateurs auraient dû être plus formalisés.",
    tech: ["CMS CMonSite", "JavaScript", "CSS3"],
    img: "/media/rennesaquacenter-hero.png",
    link: "https://rennesaquacenter.fr",
  },
];

// ─── Compétences ─────────────────────────────────────────────────────────────

export const SKILLS_CATEGORIES = [
  {
    label: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Back-end & CMS",
    items: ["PHP", "Laravel", "MySQL", "Python", "WordPress"],
  },
  {
    label: "Infra & DevOps",
    items: ["Docker", "Linux", "Git", "GitHub", "GitLab", "Nginx"],
  },
  {
    label: "Design & Outils",
    items: ["Figma", "Photoshop", "VS Code"],
  },
] as const;

// ─── Veille Technologique ─────────────────────────────────────────────────────

export const VEILLE = {
  theme: "L'intelligence artificielle dans le développement web",
  intro:
    "Dans le cadre de ma veille technologique, je me suis intéressé à l'impact croissant de l'intelligence artificielle sur les pratiques du développement web. Cette transformation touche à la fois les outils du développeur et la façon dont sont conçues les applications.",
  subtopics: [
    {
      title: "Qu'est-ce que l'IA générative pour les développeurs ?",
      content:
        "L'IA générative désigne des modèles capables de produire du texte, du code ou des images à partir d'une instruction. Des outils comme GitHub Copilot, ChatGPT ou Claude s'intègrent directement dans l'environnement de travail du développeur pour suggérer du code, corriger des bugs et générer de la documentation automatiquement.",
      sources: [
        { label: "GitHub — State of Copilot 2024", url: "#" },
        { label: "StackOverflow Developer Survey 2024", url: "#" },
      ],
    },
    {
      title: "L'IA va-t-elle remplacer les développeurs ?",
      content:
        "Si l'IA automatise les tâches répétitives (boilerplate, tests unitaires, documentation), elle ne remplace pas la réflexion architecturale, la compréhension du besoin métier ni la capacité à résoudre des problèmes complexes. Elle amplifie la productivité des développeurs qui savent l'utiliser, sans en éliminer la nécessité.",
      sources: [
        { label: "Gartner — Technology Predictions 2025", url: "#" },
        { label: "McKinsey — The future of software development", url: "#" },
      ],
    },
    {
      title: "Comment intégrer l'IA dans son workflow ?",
      content:
        "Les développeurs adoptent l'IA à plusieurs niveaux : autocomplétion de code (Copilot), génération de tests (Codium), review automatisée (CodeRabbit) et documentation vivante. La clé est de maintenir un regard critique sur les suggestions générées et de comprendre le code produit avant de l'intégrer.",
      sources: [
        { label: "OpenAI — Developer best practices", url: "#" },
        { label: "CSS-Tricks — AI-assisted coding in 2024", url: "#" },
      ],
    },
  ],
  otherTopics: [
    {
      nom: "Awwwards",
      type: "Inspiration Web Design",
      desc: "Référence mondiale pour découvrir les tendances créatives et les sites les plus innovants.",
    },
    {
      nom: "CSS-Tricks / Smashing Magazine",
      type: "Blog technique",
      desc: "Articles approfondis sur les dernières techniques CSS, accessibilité et bonnes pratiques frontend.",
    },
    {
      nom: "Syntax.fm",
      type: "Podcast",
      desc: "Podcast de référence sur le développement web full stack (Wes Bos & Scott Tolinski).",
    },
    {
      nom: "GitHub Trending",
      type: "Outil de veille",
      desc: "Suivi quotidien des projets open-source populaires pour rester à jour sur l'écosystème.",
    },
  ],
} as const;
