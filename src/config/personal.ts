// ─── Informations personnelles ───────────────────────────────────────────────
// Toutes les données personnelles du portfolio sont centralisées ici.
// Modifier ce fichier suffit pour mettre à jour l'ensemble du site.

export const PERSONAL = {
  name: "Adrien Clavreul",
  email: "adrien.clavreul@gmail.com",
  phone: {
    display: "07.81.63.10.32",
    raw: "0781631032",
  },
  cvPath: "/media/CV_Clavreul_Adrien_2025.pdf",
  socials: {
    github: "https://github.com/Adrien-Cl",
    linkedin: "https://www.linkedin.com/in/adrien-clavreul-9672a628b/",
  },
} as const;

// ─── Projets ──────────────────────────────────────────────────────────────────
// Les titres et descriptions sont dans src/i18n/translations.ts.
// Les métadonnées techniques (image, lien, github, stack) sont ici.

export const PROJECTS_META = [
  {
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    link: "#" as string,
    img: "/media/portfolio-hero.png",
    github: "https://github.com/Adrien-Cl/portfolio",
  },
  {
    tech: ["Wordpress", "JS", "CSS3"],
    link: "https://skillskydrone.com",
    img: "/media/skillskydrone-hero.png",
    github: undefined,
  },
  {
    tech: ["CMS CMonSite", "JS", "CSS3"],
    link: "https://rennesaquacenter.fr",
    img: "/media/rennesaquacenter-hero.png",
    github: undefined,
  },
] as const;

// ─── Formations ───────────────────────────────────────────────────────────────
// Les titres et détails sont dans src/i18n/translations.ts.
// Les logos sont ici car indépendants de la langue.

export const EDUCATION_LOGOS = [
  "https://www.aftec.fr/themes/custom/koriolis_starterkit/logos/www_aftec_fr/logo.svg",
  "https://www.digital-campus.fr/sites/all/themes/digital_campus/img/logos/logo-digital-campus-dark.svg",
  "https://julliot.lycee.ac-normandie.fr/local/cache-vignettes/L165xH150/logo-lamo-f5063.png?1763132606",
] as const;
