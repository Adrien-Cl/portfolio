# Adrien Clavreul — Portfolio BTS SIO

Portfolio professionnel développé dans le cadre du BTS SIO option SLAM, présentant mes réalisations, compétences et veille technologique.

🔗 **[Voir le site](https://adrien-cl.github.io/portfolio/)**

---

## Stack technique

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## Structure du projet

```text
src/
├── components/     # Navbar, Footer
├── sections/       # Hero, About, Parcours, Projects, Skills, Veille, Contact, SyntheseTable
├── data/
│   ├── index.ts    # Données du portfolio (infos, projets, compétences...)
│   └── synthese.ts # Données du tableau de synthèse BTS (Annexe 8-1)
└── App.tsx

scripts/
└── fill-excel.ts   # Génère le tableau de synthèse Excel à partir de synthese.ts

public/
└── template-bts.xlsx  # Template officiel BTS SIO E5
```

---

## Installation

```bash
git clone https://github.com/Adrien-Cl/portfolio.git
cd portfolio
git checkout BTS
npm install
npm run dev
```

## Générer le tableau de synthèse Excel

```bash
npx tsx scripts/fill-excel.ts
```

---

## Déploiement

Le site est déployé automatiquement sur GitHub Pages à chaque push sur la branche `BTS` via GitHub Actions.
