const EXPERIENCES = [
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
    desc: [
      "Gestion quotidienne du coffre [cite: 35]",
      "Hôte de caisse et de Fleuriste [cite: 35]",
    ],
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
];

export const Experience = () => (
  <section className="w-full p-10 md:p-20">
    <h2 className="text-s font-black uppercase tracking-[0.5em] mb-20 text-gray-500">
      💼 Parcours Professionnel
    </h2>
    <div className="flex flex-col gap-24 w-full">
      {EXPERIENCES.map((exp, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row justify-between items-start gap-20 border-b-2 border-black pb-12"
        >
          <div className="flex-1">
            <span className="text-2xl font-mono font-bold italic block mb-4">
              {exp.date}
            </span>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-none">
              {exp.title}
            </h3>
          </div>

          <div className="flex-[1.5] w-full">
            <p className="text-blue-600 font-bold uppercase text-xl tracking-widest mb-8">
              {exp.sub}
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {exp.desc.map((item, j) => (
                <p
                  key={j}
                  className="text-xl font-medium border-l-2 border-black pl-4 min-w-[300px]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
