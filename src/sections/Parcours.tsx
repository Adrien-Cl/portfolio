import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { PARCOURS } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function Parcours() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="parcours" className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Parcours</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Formation &amp; Expériences</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Ligne verticale */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700/50 hidden md:block" />

          {PARCOURS.map((item, i) => {
            const isExp = item.type === "experience";
            const isOpen = expanded === i;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 pb-8">

                {/* Icône sur la timeline */}
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full border-2 items-center justify-center z-10 bg-white dark:bg-zinc-950 mt-1"
                  style={{ borderColor: isExp ? "#2563eb" : "#10b981" }}>
                  {isExp
                    ? <Briefcase size={15} className="text-blue-600" />
                    : <GraduationCap size={15} className="text-emerald-500" />}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Badge mobile (pas de timeline) */}
                        <span className="md:hidden inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ background: isExp ? "#eff6ff" : "#f0fdf4", color: isExp ? "#2563eb" : "#10b981" }}>
                          {isExp ? <Briefcase size={10} /> : <GraduationCap size={10} />}
                          {isExp ? "Expérience" : "Formation"}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{item.date}</span>
                      </div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{item.organization}</p>
                    </div>
                    <span className="shrink-0 text-zinc-300 dark:text-zinc-600 mt-1">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* Détail expandable */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-6 pt-1 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-5">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>

                      {isExp && item.responsabilites && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">Responsabilités</p>
                            <ul className="flex flex-col gap-1.5">
                              {item.responsabilites.map((r, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                  <span className="w-1 h-1 rounded-full bg-blue-600 mt-2 shrink-0" />{r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {item.livrables && (
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">Livrables</p>
                              <ul className="flex flex-col gap-1.5">
                                {item.livrables.map((l, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <span className="text-blue-600 font-bold text-xs mt-0.5 shrink-0">→</span>{l}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {!isExp && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.details.map(d => (
                            <span key={d} className="text-xs font-medium bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                              {d}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
