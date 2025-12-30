import { motion } from "framer-motion";

const FORMATIONS = [
  {
    title: "BTS SIO Option SLAM",
    school: "AFTEC Rennes",
    logo: "https://www.aftec.fr/themes/custom/koriolis_starterkit/logos/www_aftec_fr/logo.svg",
    date: "2025 — 2027",
    desc: "Brevet de Technicien Supérieur aux Services Informatiques aux Organisations.",
    details: [
      "Développement d'applications",
      "Gestion de parc informatique",
      "Cybersécurité",
    ],
  },
  {
    title: "Bachelor Chef de Projet Digital",
    school: "Digital Campus Rennes",
    logo: "https://www.digital-campus.fr/sites/all/themes/digital_campus/img/logos/logo-digital-campus-dark.svg",
    date: "2020 — 2023",
    desc: "Spécialisation en développement web, design et stratégie digitale.",
    details: [
      "Design Graphique & UI",
      "Gestion de projet Agile",
      "Stratégie de communication",
    ],
  },
  {
    title: "Baccalauréat Général",
    school: "Lycée Julliot de la Morandière",
    logo: "https://julliot.lycee.ac-normandie.fr/local/cache-vignettes/L165xH150/logo-lamo-f5063.png?1763132606",
    date: "2020",
    desc: "Série Scientifique, option Sciences de l'Ingénieur.",
    details: ["Sciences de l'ingénieur", "Analyse mathématique"],
  },
];

export const Education = () => (
  <section className="p-10 md:p-20 border-t-2 border-black dark:border-white/10">
    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-4">
      <h2 className="text-sm font-black uppercase tracking-[0.5em] text-gray-500">
        🎓 Formations
      </h2>
      <p className="text-xs font-bold uppercase tracking-widest opacity-40 md:text-right">
        Parcours académique <br /> & Spécialisations
      </p>
    </div>

    <div className="flex flex-col">
      {FORMATIONS.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group grid md:grid-cols-12 gap-8 py-12 border-b-2 border-black/5 dark:border-white/5 last:border-none items-center">
          {/* COLONNE GAUCHE : Années (2/12) */}
          <div className="md:col-span-2">
            <span className="text-xl font-black italic tracking-tighter text-blue-600">
              {edu.date}
            </span>
          </div>

          {/* COLONNE CENTRE : Logo + Titre & École (6/12) */}
          <div className="md:col-span-6 flex items-start gap-6">
            {/* LOGO de la structure */}
            <div className="shrink-0 w-16 h-16 border-2 border-black/10 dark:border-white/10 p-2 bg-white flex items-center justify-center overflow-hidden">
              <img
                src={edu.logo}
                alt={edu.school}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors">
                  {edu.title}
                </h3>
                <p className="text-lg font-bold uppercase mt-1 opacity-80 italic">
                  {edu.school}
                </p>
              </div>
              <p className="text-gray-500 font-medium max-w-md leading-relaxed text-sm">
                {edu.desc}
              </p>
            </div>
          </div>

          {/* COLONNE DROITE : Détails techniques (4/12) */}
          <div className="md:col-span-4 flex flex-col gap-4 border-l-2 border-black/5 dark:border-white/5 md:pl-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
              Modules principaux
            </span>
            <ul className="space-y-2">
              {edu.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                  <span className="text-[10px] text-blue-600 font-black">
                    0{idx + 1}
                  </span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
