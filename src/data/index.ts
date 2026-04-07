// ─── Données centralisées du portfolio BTS SIO SLAM ─────────────────────────
// Un seul fichier à modifier pour mettre à jour tout le contenu.

export type { Project, ParcoursEntry } from "../types";
import type { ParcoursEntry } from "../types";

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
  bts: {
    label: "Le BTS SIO SLAM",
    desc: "Le BTS SIO (Services Informatiques aux Organisations) Option SLAM (Solutions Logicielles et Applications Métiers) est une formation de niveau bac+2 qui forme aux métiers du développement d'applications, de la gestion de bases de données et de la cybersécurité.",
  },
  roles: [
    "Développeur d'applications informatiques",
    "Développeur Full Stack",
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

export const PARCOURS: ParcoursEntry[] = [
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
    title: "Bachelor Chef de Projet Digital",
    organization: "Digital Campus Rennes",
    date: "2020 — 2023",
    desc: "Spécialisation en développement web, design et stratégie digitale.",
    details: ["Design Graphique & UI", "Gestion de projet Agile", "Stratégie de communication"],
    logo: "https://www.digital-campus.fr/sites/all/themes/digital_campus/img/logos/logo-digital-campus-dark.svg",
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

export type ProjectFilter = "dev" | "software" | "communication" | "infra";

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
    title: "Portfolio Professionnel",
    category: "Développement Web",
    filter: "dev",
    desc: "Développement d'un portfolio professionnel avec React, TypeScript et Framer Motion pour présenter mes compétences et réalisations.",
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
    link: "https://adrienclavreul.fr",
  },
  {
    title: "SkillSkyDrone",
    category: "Développement Web",
    filter: "dev",
    desc: "Site vitrine WordPress pour une entreprise de services par drone (photographie aérienne, inspection, cartographie).",
    brief:
      "Concevoir un site vitrine professionnel pour une entreprise de services par drone, avec un design qui inspire confiance et met en valeur les prestations.",
    demarche: [
      "Audit des sites concurrents dans le secteur du drone pour identifier les codes visuels.",
      "Entretien client pour définir les priorités : services, galerie média, formulaire de contact.",
      "Choix de WordPress pour permettre au client de mettre à jour son contenu de façon autonome.",
      "Maquettes Figma validées avec 2 révisions demandées par le client.",
    ],
    realisation:
      "Site WordPress, CSS3 et JavaScript vanilla pour les animations. Images optimisées en WebP avec lazy-loading.",
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
  {
    title: "Gestion de Parc Informatique et ticketing — GLPI",
    category: "Infrastructure & Réseau",
    filter: "infra",
    desc: "Mise en place d'une infrastructure virtualisée sous VMware avec Windows Server (AD, DHCP, DNS), un poste client joint au domaine et un serveur Ubuntu hébergeant GLPI pour la gestion de parc et de tickets.",
    brief:
      "Déployer une infrastructure réseau complète en environnement virtualisé pour gérer un parc informatique : serveur Windows avec les rôles AD/DHCP/DNS, remontée automatique des postes via GPO et authentification centralisée LDAP dans GLPI.",
    demarche: [
      "Création des machines virtuelles sous VMware : Windows Server, poste client Windows et serveur Ubuntu.",
      "Configuration de Windows Server : installation et paramétrage des rôles Active Directory, DHCP et DNS.",
      "Jonction du poste client au domaine et mise en place des GPO pour la remontée automatique des inventaires dans GLPI.",
      "Installation d'Apache2, MySQL et GLPI sur Ubuntu ; configuration de l'authentification LDAP pour permettre aux utilisateurs de se connecter avec leurs identifiants de domaine.",
    ],
    realisation:
      "Infrastructure entièrement virtualisée sous VMware. Windows Server assure l'annuaire AD, la distribution d'adresses DHCP et la résolution DNS. Les machines remontent automatiquement dans GLPI grâce aux GPO. Le serveur Ubuntu expose GLPI via Apache2 et les utilisateurs s'authentifient via LDAP sans compte supplémentaire.",
    autocritique:
      "Ce projet m'a donné une vision concrète de l'administration système et réseau. J'aurais aimé aller plus loin en mettant en place des snapshots de sauvegarde automatiques et en sécurisant davantage les échanges LDAP avec TLS.",
    tech: ["VMware", "Windows Server", "Active Directory", "Ubuntu", "Apache2", "GLPI", "LDAP"],
    img: "/media/glpi.png",
    imageFrame: true,
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
      title: "Des outils qui changent la façon de coder",
      content:
        "Des outils comme GitHub Copilot ou ChatGPT permettent de générer du code, corriger des bugs ou expliquer une fonction en quelques secondes. Grafikart et Benjamin Code en parlent régulièrement sur YouTube et montrent concrètement comment les intégrer dans un workflow de dev.",
      sources: [
        { label: "Grafikart", url: "https://grafikart.fr" },
        { label: "Benjamin Code", url: "https://www.youtube.com/@BenjaminCode" },
      ],
    },
    {
      title: "Un outil, pas un remplaçant",
      content:
        "L'IA accélère les tâches répétitives mais ne remplace pas la réflexion : comprendre un besoin, concevoir une architecture ou déboguer un problème complexe restent des compétences humaines. Elle est surtout utile quand on sait déjà ce qu'on veut faire.",
      sources: [
        { label: "Benjamin Code — L'IA va-t-elle tuer les devs ?", url: "https://www.youtube.com/@BenjaminCode" },
      ],
    },
    {
      title: "Comment je l'utilise",
      content:
        "Au quotidien, je m'en sers pour générer des bases de code, débloquer des erreurs ou aller plus vite sur la documentation. Je vérifie toujours ce qui est produit avant de l'intégrer — c'est un assistant, pas un pilote automatique.",
      sources: [
        { label: "Grafikart — Tutoriels IA & dev", url: "https://grafikart.fr" },
      ],
    },
  ],
  otherTopics: [
    {
      nom: "Grafikart",
      type: "YouTube / Blog",
      desc: "Tutoriels francophones de qualité sur le développement web : PHP, JavaScript, frameworks et bonnes pratiques.",
      url: "https://grafikart.fr",
    },
    {
      nom: "Benjamin Code",
      type: "YouTube",
      desc: "Chaîne française sur le développement web moderne, les outils du quotidien et les tendances front-end.",
      url: "https://www.youtube.com/@BenjaminCode",
    },
    {
      nom: "Basti UI",
      type: "YouTube",
      desc: "Vidéos sur le design UI/UX, Figma et les tendances visuelles du web. Idéal pour allier dev et design.",
      url: "https://www.youtube.com/@BastiUI",
    },
    {
      nom: "Awwwards",
      type: "Inspiration Web Design",
      desc: "Référence mondiale pour découvrir les tendances créatives et les réalisations web les plus innovantes.",
      url: "https://www.awwwards.com/",
    },
  ],
} as const;
