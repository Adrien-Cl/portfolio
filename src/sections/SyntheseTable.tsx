import { Fragment } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle2, Circle, ArrowUpRight } from "lucide-react";
import { SYNTHESE, COMPETENCES, SYNTHESE_INFO } from "../data/synthese";
import type { CompetenceCode } from "../data/synthese";
import { asset } from "../utils/asset";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

function CompetenceCheck({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <span className="flex items-center justify-center">
        <CheckCircle2
          size={18}
          className="text-blue-500 dark:text-blue-400"
          strokeWidth={2}
        />
      </span>
    );
  }
  return (
    <span className="flex items-center justify-center">
      <Circle
        size={16}
        className="text-zinc-200 dark:text-zinc-700"
        strokeWidth={1.5}
      />
    </span>
  );
}

interface SyntheseTableProps {
  onOpenProject?: (title: string) => void;
}

export function SyntheseTable({ onOpenProject }: SyntheseTableProps) {
  const excelPath = asset("/tableau-synthese-bts-adrien-clavreul.xlsx");

  return (
    <section id="synthese" className="px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Annexe 8-1 — Épreuve E5
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Tableau de synthèse
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Réalisations professionnelles et compétences mises en œuvre — BTS SIO SLAM
            </p>
          </div>
          <a
            href={excelPath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors self-start sm:self-auto"
          >
            <Download size={14} />
            Télécharger l'Excel
          </a>
        </motion.div>

        {/* Competence legend */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {COMPETENCES.map((c) => (
            <div
              key={c.code}
              className="flex flex-col gap-1 p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50"
            >
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                {c.code}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                {c.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
                <th className="text-left px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300 min-w-70">
                  Réalisation professionnelle
                </th>
                <th className="text-left px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap min-w-30">
                  Période
                </th>
                {COMPETENCES.map((c) => (
                  <th
                    key={c.code}
                    className="px-3 py-3 text-center font-bold text-blue-600 dark:text-blue-400 text-xs whitespace-nowrap min-w-12"
                    title={c.label}
                  >
                    {c.code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SYNTHESE.map((section, si) => (
                <Fragment key={si}>
                  {/* Section row */}
                  <tr
                    key={`section-${si}`}
                    className="bg-zinc-100/60 dark:bg-zinc-800/40 border-t border-b border-zinc-200 dark:border-zinc-700/60"
                  >
                    <td
                      colSpan={2 + COMPETENCES.length}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                    >
                      {section.section}
                    </td>
                  </tr>

                  {/* Ligne vide si pas encore de réalisation */}
                  {section.items.length === 0 && (
                    <tr className="border-t border-zinc-100 dark:border-zinc-800/60">
                      <td
                        colSpan={2 + COMPETENCES.length}
                        className="px-4 py-4 text-xs italic text-zinc-400 dark:text-zinc-600"
                      >
                        Aucune réalisation pour le moment.
                      </td>
                    </tr>
                  )}

                  {/* Realisation rows */}
                  {section.items.map((item, ii) => (
                    <tr
                      key={`${si}-${ii}`}
                      className="border-t border-zinc-100 dark:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors group"
                    >
                      {/* Title + docs */}
                      <td className="px-4 py-3 align-top">
                        <p className="font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                          {item.title}
                        </p>
                        {item.projectTitle && onOpenProject && (
                          <button
                            onClick={() => onOpenProject(item.projectTitle!)}
                            className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 hover:border-blue-400 dark:hover:border-blue-500 px-2 py-0.5 rounded transition-colors"
                          >
                            <ArrowUpRight size={11} />
                            Voir le projet
                          </button>
                        )}
                        <ul className="mt-1 flex flex-col gap-0.5">
                          {item.docs.map((doc, di) => (
                            <li
                              key={di}
                              className="text-xs text-zinc-400 dark:text-zinc-500 flex items-start gap-1"
                            >
                              <span className="mt-0.5 text-zinc-300 dark:text-zinc-600">›</span>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </td>

                      {/* Periode */}
                      <td className="px-4 py-3 align-top whitespace-nowrap text-xs text-zinc-500 dark:text-zinc-400">
                        {item.periode}
                      </td>

                      {/* Competence cells */}
                      {(Object.keys(item.competences) as CompetenceCode[]).map((code) => (
                        <td key={code} className="px-3 py-3 text-center align-middle">
                          <CompetenceCheck checked={item.competences[code]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footer meta */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-400 dark:text-zinc-500"
        >
          <span>{SYNTHESE_INFO.nom}</span>
          <span>·</span>
          <span>{SYNTHESE_INFO.centre}</span>
          <span>·</span>
          <span>Option {SYNTHESE_INFO.option}</span>
          <span>·</span>
          <span>Session {SYNTHESE_INFO.session}</span>
        </motion.div>

      </div>
    </section>
  );
}
