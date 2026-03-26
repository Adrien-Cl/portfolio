// ─── Tableau de synthèse BTS SIO — Annexe 8-1 — Épreuve E5 ───────────────────

export const SYNTHESE_INFO = {
  nom: "Clavreul Adrien",
  numeroCandidat: "060815622JA",
  centre: "AFTEC Rennes",
  option: "SLAM",
  portfolio: "https://adrien-cl.github.io/portfolio/",
  session: "2027",
} as const;

export const COMPETENCES = [
  {
    code: "C1",
    label: "Gérer le patrimoine informatique",
    sousCriteres: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards",
      "Mettre en place et vérifier les niveaux d'habilitation",
      "Vérifier les conditions de continuité d'un service",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation des ressources numériques",
    ],
  },
  {
    code: "C2",
    label: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    sousCriteres: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes concernant les services réseau et système",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    code: "C3",
    label: "Développer la présence en ligne de l'organisation",
    sousCriteres: [
      "Participer à la valorisation de l'image de l'organisation sur les médias numériques",
      "Référencer les services en ligne et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
    ],
  },
  {
    code: "C4",
    label: "Travailler en mode projet",
    sousCriteres: [
      "Analyser les objectifs et les modalités d'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
    ],
  },
  {
    code: "C5",
    label: "Mettre à disposition des utilisateurs un service informatique",
    sousCriteres: [
      "Réaliser les tests d'intégration et d'acceptation d'un service",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    code: "C6",
    label: "Organiser son développement professionnel",
    sousCriteres: [
      "Mettre en place son environnement d'apprentissage personnel",
      "Mettre en œuvre des outils et stratégies de veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
] as const;

export type CompetenceCode = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";

export type Realisation = {
  title: string;
  docs: string[];
  periode: string;
  competences: Record<CompetenceCode, boolean>;
};

export type SectionSynthese = {
  section: string;
  items: Realisation[];
};

export const SYNTHESE: SectionSynthese[] = [
  {
    section: "Réalisations en cours de formation",
    items: [
      {
        title: "Portfolio Personnel",
        docs: [
          "Site web React/TypeScript/Tailwind CSS",
          "Maquettes Figma",
          "Code source GitHub",
        ],
        periode: "09/25 → 03/26",
        competences: {
          C1: false,
          C2: false,
          C3: true,
          C4: true,
          C5: true,
          C6: true,
        },
      },
      {
        title: "Application de Réservation Scolaire",
        docs: [
          "Application desktop Python/PySide6",
          "Dictionnaire de données & MCD",
          "Maquettes Figma",
          "Base de données MariaDB",
        ],
        periode: "09/25 → 06/26",
        competences: {
          C1: true,
          C2: true,
          C3: false,
          C4: true,
          C5: true,
          C6: false,
        },
      },
      {
        title: "VM windows serveur et gestion de parc informatique",
        docs: [
          "Configaration de machines virtuelles Windows Server",
          "Configuration de services réseau (DNS, DHCP, Active Directory)",
          "Installation et configuration d'une solution GLPI",
        ],
        periode: "09/25 → 07/26",
        competences: {
          C1: true,
          C2: true,
          C3: false,
          C4: true,
          C5: true,
          C6: false,
        },
      },
    ],
  },
  {
    section: "Réalisations en milieu professionnel — 1ʳᵉ année",
    items: [
      {
        title: "Développement d'application métier interne — CNFPT Rennes",
        docs: [
          "Application de gestion interne (en cours)",
          "Documentation technique",
          "Participation aux réunions de projet (méthode agile)",
        ],
        periode: "09/25 → 07/26",
        competences: {
          C1: true,
          C2: true,
          C3: false,
          C4: true,
          C5: true,
          C6: true,
        },
      },
      {
        title: "Support informatique de premier niveau — CNFPT Rennes",
        docs: [
          "Rapports d'incidents IT",
          "Tickets de support",
        ],
        periode: "09/25 → 07/26",
        competences: {
          C1: true,
          C2: true,
          C3: false,
          C4: false,
          C5: true,
          C6: false,
        },
      },
      {
        title: "Développement et maintenance applicative — CNFPT Rennes",
        docs: [
          "Évolutions de l'application de gestion interne",
          "Documentation technique mise à jour",
          "Rapports de suivi",
        ],
        periode: "09/25 → 07/26",
        competences: {
          C1: true,
          C2: true,
          C3: false,
          C4: true,
          C5: true,
          C6: false,
        },
      },
    ],
  },
  {
    section: "Réalisations en milieu professionnel — 2ᵉ année",
    items: [],
  },
];
