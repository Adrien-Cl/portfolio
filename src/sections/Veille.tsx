import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { VEILLE } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function Veille() {
  return (
    <section id="veille" className="px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Veille Technologique</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{VEILLE.theme}</h2>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl border-l-2 border-blue-600 pl-5">
          {VEILLE.intro}
        </motion.p>

        {/* Sous-thèmes */}
        <div className="flex flex-col gap-5">
          {VEILLE.subtopics.map((sub, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{sub.title}</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-9">
                {sub.content}
              </p>
              <div className="pl-9 flex flex-wrap gap-2">
                {sub.sources.map(s => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 px-3 py-1 rounded-full transition-all">
                    <ExternalLink size={10} />
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Autres sources de veille */}
        <div className="flex flex-col gap-5">
          <motion.p
            variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Autres sources de veille régulière
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VEILLE.otherTopics.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.nom}</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded-full shrink-0">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
