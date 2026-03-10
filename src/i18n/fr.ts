// ─── Traductions françaises ────────────────────────────────────────────────────
// Source de vérité. Modifier ce fichier, puis lancer `npm run translate`
// pour regénérer automatiquement src/i18n/en.ts.

export const fr = {
  nav: {
    projects: "Projets",
    experience: "Expériences",
    education: "Formations",
  },
  hero: {
    role: "Développeur Web & UI / UX Designeur",
    objectiveLabel: "Objectif Professionnel",
    objective:
      "Développeur Full Stack basé à Rennes, en quête d'expériences pour construire des produits qui ont de l'impact.",
    downloadCV: "Télécharger CV",
    seeProjects: "Voir mes projets",
  },
  stats: [
    { value: 5, label: "Années d'expérience" },
    { value: 4, label: "Projets réalisés" },
    { value: 11, label: "Technologies maîtrisées" },
  ],
  projects: {
    sectionTitle: "Projets Sélectionnés",
    sourceCode: "Code Source",
    visitSite: "Voir le Site",
    items: [
      {
        title: "Portfolio Personnel",
        category: "Web Design & Développement",
        desc: "Développement d'un portfolio personnel pour présenter mes compétences, expériences et projets réalisés en tant que développeur web.",
      },
      {
        title: "SkillSkyDrone",
        category: "Web Design & Développement",
        desc: "Création d'un site vitrine pour des passionnés de drone, mettant en avant leurs services avec un design moderne et minimaliste.",
      },
      {
        title: "Refonte Rennes Aqua Center",
        category: "Web Design & Développement",
        desc: "Modernisation complète de l'interface utilisateur et optimisation du tunnel de conversion pour le site e-commerce.",
      },
    ],
  },
  experience: {
    sectionTitle: "Parcours Professionnel",
    items: [
      {
        title: "🤝 Alternance | CNFPT",
        sub: "Développement Web & support IT",
        date: "2025 — 2027",
        desc: [
          "Développement d'application métier",
          "Développement Full Stack",
          "Support IT pour les agents et stagiaires",
        ],
      },
      {
        title: "🛒 CDI | Super U Rennes St Jacques",
        sub: "Hôte de Caisse, Fleuriste, Gestion du Coffre",
        date: "2023 — 2025",
        desc: ["Gestion quotidienne du coffre", "Hôte de caisse et de Fleuriste"],
      },
      {
        title: "📱 Alternance | Rennes Aqua Center",
        sub: "Communication Digitale et Développement Web",
        date: "2022 — 2023",
        desc: [
          "Développement Web du site internet",
          "Mise en œuvre de la stratégie de Communication Digitale",
          "Création Digitale & Community Management",
        ],
      },
    ],
  },
  education: {
    sectionTitle: "Formations",
    subtitle: "Parcours académique & Spécialisations",
    modulesLabel: "Modules principaux",
    items: [
      {
        title: "BTS SIO Option SLAM",
        school: "AFTEC Rennes",
        date: "2025 — 2027",
        desc: "Brevet de Technicien Supérieur aux Services Informatiques aux Organisations.",
        details: ["Développement d'applications", "Gestion de parc informatique", "Cybersécurité"],
      },
      {
        title: "Bachelor Chef de Projet Digital",
        school: "Digital Campus Rennes",
        date: "2020 — 2023",
        desc: "Spécialisation en développement web, design et stratégie digitale.",
        details: ["Design Graphique & UI", "Gestion de projet Agile", "Stratégie de communication"],
      },
      {
        title: "Baccalauréat Général",
        school: "Lycée Julliot de la Morandière",
        date: "2020",
        desc: "Série Scientifique, option Sciences de l'Ingénieur.",
        details: ["Sciences de l'ingénieur", "Analyse mathématique"],
      },
    ],
  },
  footer: {
    cta: "DÉMARRONS\nUN PROJET.",
    location: "Rennes • Full Remote",
    copyright: "© 2026 — Étudiant BTS SIO SLAM",
  },
} as const;

export type Fr = typeof fr;
