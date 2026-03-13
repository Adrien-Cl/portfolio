import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { PROJECTS, type ProjectFilter } from "../data";

const FILTERS: { label: string; value: "all" | ProjectFilter }[] = [
  { label: "Tous", value: "all" },
  { label: "Développement Web", value: "dev" },
  { label: "Développement Logiciel", value: "software" },
  { label: "Communication Digitale", value: "communication" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const BTS_STEPS = [
  {
    key: "brief" as const,
    num: "01",
    label: "Le Brief",
    desc: "Contexte & demande",
    accent: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/40",
    numColor: "text-blue-600",
  },
  {
    key: "demarche" as const,
    num: "02",
    label: "La Démarche",
    desc: "Recherches & cheminement",
    accent: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/40",
    numColor: "text-violet-600",
  },
  {
    key: "realisation" as const,
    num: "03",
    label: "La Réalisation",
    desc: "Outils & techniques",
    accent: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/40",
    numColor: "text-emerald-600",
  },
  {
    key: "autocritique" as const,
    num: "04",
    label: "Autocritique",
    desc: "Ce que j'en retire",
    accent: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/40",
    numColor: "text-amber-600",
  },
];

function Modal({ project, onClose }: { project: typeof PROJECTS[number]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={e => e.stopPropagation()}
        className="relative z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl w-full max-w-4xl my-auto shadow-2xl overflow-hidden">

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-700 shadow-sm transition-all">
          <X size={15} />
        </button>

        {/* Image pleine largeur */}
        <div className="w-full h-52 md:h-72 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-8">

          {/* En-tête : titre + desc + stack + liens */}
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Liens */}
            {(project.github || (project.link && project.link !== "#")) && (
              <div className="flex md:flex-col gap-2 shrink-0">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 text-zinc-600 dark:text-zinc-400 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                    <Github size={14} /> Code source
                  </a>
                )}
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                    <ExternalLink size={14} /> Voir le site
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Séparateur */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
              Analyse du projet
            </span>
            <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
          </div>

          {/* Grille 2×2 des étapes BTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BTS_STEPS.map(step => {
              const value = project[step.key];
              return (
                <div
                  key={step.key}
                  className={`rounded-xl border p-5 flex flex-col gap-3 ${step.accent}`}>
                  {/* En-tête de l'étape */}
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-black tabular-nums ${step.numColor}`}>
                      {step.num}
                    </span>
                    <div className="h-3 w-px bg-zinc-300 dark:bg-zinc-600" />
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${step.numColor}`}>
                        {step.label}
                      </p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500">{step.desc}</p>
                    </div>
                  </div>

                  {/* Contenu */}
                  {Array.isArray(value) ? (
                    <ul className="flex flex-col gap-2">
                      {(value as string[]).map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          <span className={`font-bold shrink-0 text-xs mt-0.5 ${step.numColor}`}>→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`text-sm leading-relaxed ${step.key === "autocritique" ? "italic text-zinc-500 dark:text-zinc-500" : "text-zinc-600 dark:text-zinc-400"}`}>
                      {value as string}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectFilter>("all");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.filter === filter);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Projets</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Mes réalisations</h2>
        </motion.div>

        {/* Filtres */}
        <motion.div
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                filter === f.value
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500"
              }`}>
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setSelected(PROJECTS.indexOf(project))}
                className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{project.category}</p>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                    <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs text-zinc-500 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-zinc-400 px-2 py-0.5">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Modal project={PROJECTS[selected]} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
