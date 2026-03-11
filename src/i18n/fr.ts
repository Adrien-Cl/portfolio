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
        longDesc: [
          "Conçu de A à Z avec React, TypeScript et Framer Motion, ce portfolio reflète mon approche du design : typographique, minimaliste et animé.",
          "Il intègre un système d'internationalisation FR/EN avec traduction automatisée, un mode sombre/clair, des animations au scroll et une architecture modulaire facilement extensible.",
          "Le SEO a été travaillé avec des balises Open Graph, un schéma JSON-LD Person et un sitemap généré statiquement.",
        ],
      },
      {
        title: "SkillSkyDrone",
        category: "Web Design & Développement",
        desc: "Création d'un site vitrine pour des passionnés de drone, mettant en avant leurs services avec un design moderne et minimaliste.",
        longDesc: [
          "Développement d'un site vitrine WordPress sur-mesure pour une entreprise spécialisée dans les services par drone (photographie aérienne, inspection, cartographie).",
          "Le design adopte une esthétique sobre et professionnelle, avec une navigation fluide et une mise en avant claire des différentes prestations proposées.",
          "Le site est optimisé pour le référencement local et les performances de chargement afin de maximiser la visibilité auprès des clients potentiels.",
        ],
      },
      {
        title: "Refonte Rennes Aqua Center",
        category: "Web Design & Développement",
        desc: "Modernisation complète de l'interface utilisateur et optimisation du tunnel de conversion pour le site e-commerce.",
        longDesc: [
          "Refonte complète du site du Rennes Aqua Center, un complexe aquatique, avec pour objectif principal l'amélioration de l'expérience utilisateur et l'augmentation du taux de conversion.",
          "Redesign de l'interface : hiérarchie visuelle repensée, parcours d'achat simplifié, mise en avant des offres et des horaires d'ouverture.",
          "Le projet a impliqué une analyse de l'existant, des maquettes Figma et une intégration CMS avec des optimisations UX mesurables.",
        ],
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
};

export type Fr = typeof fr;
