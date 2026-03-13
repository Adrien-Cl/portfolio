import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ABOUT, PERSONAL } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">À Propos</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Qui suis-je ?</h2>
        </motion.div>

        {/* Bio + BTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-5">
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {ABOUT.intro}
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {ABOUT.bio}
            </p>
            <blockquote className="border-l-2 border-blue-600 pl-4 italic text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">
              "{ABOUT.manifeste}"
            </blockquote>
            <a
              href={PERSONAL.cvPath}
              download
              className="self-start inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              <ArrowDown size={14} />
              Télécharger mon CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6">
            <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-6 flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{ABOUT.bts.label}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{ABOUT.bts.desc}</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-6 flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Débouchés</p>
              <ul className="flex flex-col gap-2">
                {ABOUT.roles.map(r => (
                  <li key={r} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Compétences */}
        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Compétences
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Techniques */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold text-zinc-500">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {ABOUT.competences.techniques.map(s => (
                  <span key={s} className="text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Langues */}
            <motion.div
              variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold text-zinc-500">Langues</p>
              <div className="flex flex-col gap-3">
                {ABOUT.competences.langues.map(l => (
                  <div key={l.langue} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{l.langue}</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full">{l.niveau}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              variants={fadeUp} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold text-zinc-500">Soft Skills</p>
              <ul className="flex flex-col gap-2">
                {ABOUT.competences.softSkills.map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
