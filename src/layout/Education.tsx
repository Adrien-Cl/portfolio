import { motion } from "framer-motion";

const FORMATIONS = [
  {
    title: "🎓 BTS SIO Option SLAM",
    school: "AFTEC Rennes",
    date: "2025 — 2027",
    desc: "Brevet de Technicien Supérieur aux Services Informatiques aux Organisations.",
  },
  {
    title: "🎓 Bachelor Chef de Projet Digital",
    school: "Digital Campus Rennes",
    date: "2020 — 2023",
    desc: "Spécialisation en développement web, design et stratégie digitale.",
  },
  {
    title: "🎓 Baccalauréat Général",
    school: "Lycée Julliot de la Morandière",
    date: "2020",
    desc: "Série Scientifique, option Sciences de l'Ingénieur.",
  },
];

export const Education = () => (
  <section className="p-10 md:p-20">
    <h2 className="text-s font-black uppercase tracking-[0.5em] mb-20 text-gray-500">
      🎓 Formations
    </h2>
    <div className="space-y-24">
      {FORMATIONS.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter">
              {edu.title}
            </h3>
            <span className="text-lg font-bold italic text-gray-400">
              {edu.date}
            </span>
          </div>
          <p className="text-xl font-bold text-black mb-4 uppercase tracking-wider">
            {edu.school}
          </p>
          <p className="text-lg text-gray-500 font-medium border-l-2 border-black pl-4">
            {edu.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
