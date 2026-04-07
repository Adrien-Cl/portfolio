import { Fragment } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle2, Circle, ArrowUpRight } from "lucide-react";
import { SYNTHESE, COMPETENCES, SYNTHESE_INFO } from "../data/synthese";
import type { CompetenceCode } from "../data/synthese";
import { asset } from "../utils/asset";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
};

function CompetenceCheck({ checked }: { checked: boolean }) {
  return checked
    ? <CheckCircle2 size={18} style={{ color: "var(--color-accent-dark)" }} strokeWidth={2.5} />
    : <Circle size={16} style={{ color: "var(--color-ink-muted)", opacity: 0.3 }} strokeWidth={1.5} />;
}

interface SyntheseTableProps {
  onOpenProject?: (title: string) => void;
}

export function SyntheseTable({ onOpenProject }: SyntheseTableProps) {
  const excelPath = asset("/tableau-synthese-bts-adrien-clavreul.xlsx");

  return (
    <section id="synthese" style={{ backgroundColor: "var(--color-bg)", borderBottom: "2px solid var(--color-ink)" }}>

      {/* Header */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        style={{ paddingTop: "4rem", paddingBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "space-between", alignItems: "flex-start" }}
        className="section-container sm:flex-row sm:items-end">
        <div>
          <span className="section-label">05 — Annexe 8-1 · Épreuve E5</span>
          <h2 className="section-heading">Tableau de synthèse</h2>
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>
            Réalisations professionnelles et compétences — BTS SIO SLAM
          </p>
        </div>
        <a href={excelPath} download className="btn-secondary" style={{ alignSelf: "flex-start", fontSize: "0.8125rem" }}>
          <Download size={13} />
          Télécharger l'Excel
        </a>
      </motion.div>

      {/* Légende compétences */}
      <motion.div
        variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
        style={{ paddingBottom: "1.5rem", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}
        className="section-container sm:grid-cols-3 lg:grid-cols-6">
        {COMPETENCES.map((c) => (
          <div key={c.code} style={{ padding: "0.75rem", border: "1.5px solid var(--color-ink)", backgroundColor: "var(--color-surface)", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "var(--color-accent-dark)" }}>{c.code}</span>
            <span style={{ fontSize: "0.6875rem", color: "var(--color-ink-muted)", lineHeight: 1.4 }}>{c.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Tableau */}
      <motion.div
        variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="section-container">
        <div style={{ overflowX: "auto", border: "2px solid var(--color-ink)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ backgroundColor: "var(--color-accent)", borderBottom: "2px solid var(--color-ink)" }}>
                <th style={{ textAlign: "left", padding: "0.75rem 1rem", fontWeight: 700, color: "var(--color-ink)", minWidth: "17rem" }}>
                  Réalisation professionnelle
                </th>
                <th style={{ textAlign: "left", padding: "0.75rem 1rem", fontWeight: 700, color: "var(--color-ink)", whiteSpace: "nowrap", minWidth: "7rem" }}>
                  Période
                </th>
                {COMPETENCES.map((c) => (
                  <th key={c.code} style={{ padding: "0.75rem 0.5rem", textAlign: "center", fontWeight: 900, color: "var(--color-accent-dark)", fontSize: "0.75rem", whiteSpace: "nowrap", minWidth: "3rem", borderLeft: "1px solid var(--color-ink)" }} title={c.label}>
                    {c.code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SYNTHESE.map((section, si) => (
                <Fragment key={si}>
                  <tr style={{ backgroundColor: "var(--color-surface)", borderTop: "2px solid var(--color-ink)", borderBottom: "1px solid var(--color-ink)" }}>
                    <td colSpan={2 + COMPETENCES.length} style={{ padding: "0.5rem 1rem", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-ink-muted)" }}>
                      {section.section}
                    </td>
                  </tr>

                  {section.items.length === 0 && (
                    <tr style={{ borderTop: "1px solid var(--color-ink)" }}>
                      <td colSpan={2 + COMPETENCES.length} style={{ padding: "1rem", fontSize: "0.8125rem", fontStyle: "italic", color: "var(--color-ink-muted)" }}>
                        Aucune réalisation pour le moment.
                      </td>
                    </tr>
                  )}

                  {section.items.map((item, ii) => (
                    <tr key={`${si}-${ii}`} style={{ borderTop: "1px solid var(--color-ink)", backgroundColor: ii % 2 === 0 ? "var(--color-bg)" : "var(--color-surface)", transition: "background-color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = ii % 2 === 0 ? "var(--color-bg)" : "var(--color-surface)")}>
                      <td style={{ padding: "0.875rem 1rem", verticalAlign: "top" }}>
                        <p style={{ fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.4 }}>{item.title}</p>
                        {item.projectTitle && onOpenProject && (
                          <button
                            onClick={() => onOpenProject(item.projectTitle!)}
                            style={{ marginTop: "0.375rem", display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.6875rem", fontWeight: 700, color: "var(--color-accent-dark)", border: "1.5px solid var(--color-ink)", padding: "0.125rem 0.5rem", backgroundColor: "transparent", cursor: "pointer", fontFamily: "var(--font-sans)", transition: "background-color 0.15s" }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                            <ArrowUpRight size={10} /> Voir le projet
                          </button>
                        )}
                        <ul style={{ marginTop: "0.375rem", display: "flex", flexDirection: "column", gap: "0.125rem", listStyle: "none", padding: 0 }}>
                          {item.docs.map((doc, di) => (
                            <li key={di} style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)", display: "flex", gap: "0.375rem" }}>
                              <span style={{ color: "var(--color-ink-muted)" }}>›</span>{doc}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td style={{ padding: "0.875rem 1rem", verticalAlign: "top", whiteSpace: "nowrap", fontSize: "0.8125rem", color: "var(--color-ink-muted)" }}>
                        {item.periode}
                      </td>
                      {(Object.keys(item.competences) as CompetenceCode[]).map((code) => (
                        <td key={code} style={{ padding: "0.875rem 0.5rem", textAlign: "center", verticalAlign: "middle", borderLeft: "1px solid var(--color-ink)" }}>
                          <CompetenceCheck checked={item.competences[code]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Footer méta */}
      <motion.div
        variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
        style={{ paddingTop: "1.5rem", paddingBottom: "5rem", display: "flex", flexWrap: "wrap", gap: "0.25rem 1.5rem", fontSize: "0.75rem", color: "var(--color-ink-muted)" }}
        className="section-container">
        <span>{SYNTHESE_INFO.nom}</span>
        <span>·</span>
        <span>{SYNTHESE_INFO.centre}</span>
        <span>·</span>
        <span>Option {SYNTHESE_INFO.option}</span>
        <span>·</span>
        <span>Session {SYNTHESE_INFO.session}</span>
      </motion.div>
    </section>
  );
}
