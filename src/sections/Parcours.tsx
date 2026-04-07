import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { PARCOURS } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export function Parcours() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="parcours" style={{ backgroundColor: "var(--color-surface)", borderBottom: "2px solid var(--color-ink)" }}>

      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }} className="section-container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">02 — Parcours</span>
          <h2 className="section-heading">Formation & Expériences</h2>
        </motion.div>
      </div>

      {/* Timeline */}
      <div style={{ paddingBottom: "5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
           className="section-container">
        {PARCOURS.map((item, i) => {
          const isExp = item.type === "experience";
          const isOpen = expanded === i;

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i * 0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              style={{ border: "2px solid var(--color-ink)", boxShadow: isOpen ? "var(--shadow-flat)" : "none", backgroundColor: "var(--color-bg)", transition: "box-shadow 0.2s" }}>

              {/* En-tête cliquable */}
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => setExpanded(isOpen ? null : i)}
                onKeyDown={(e) => e.key === "Enter" && setExpanded(isOpen ? null : i)}
                style={{ padding: "1.25rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", cursor: "pointer", backgroundColor: isOpen ? "var(--color-accent)" : "transparent", transition: "background-color 0.15s" }}
                onMouseEnter={e => { if (!isOpen) (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)"; }}
                onMouseLeave={e => { if (!isOpen) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", minWidth: 0 }}>
                  {/* Icône type */}
                  <div style={{ width: "2.25rem", height: "2.25rem", flexShrink: 0, border: "2px solid var(--color-ink)", backgroundColor: isExp ? "var(--color-accent)" : "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {isExp ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "var(--color-ink)" }}>{item.date}</span>
                      <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", padding: "0.125rem 0.5rem", border: "1.5px solid var(--color-ink)", backgroundColor: isExp ? "var(--color-accent)" : "transparent", color: "var(--color-ink)" }}>
                        {isExp ? "Expérience" : "Formation"}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-ink)", lineHeight: 1.2 }}>{item.title}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", fontWeight: 500 }}>{item.organization}</p>
                  </div>
                </div>

                <span style={{ flexShrink: 0, color: "var(--color-ink)", marginTop: "0.25rem" }} aria-hidden="true">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </div>

              {/* Contenu expandable */}
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: "hidden" }}>
                <div style={{ padding: "1.25rem", paddingTop: "0", borderTop: "2px solid var(--color-ink)", marginTop: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>

                  <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>{item.desc}</p>

                  {isExp && item.responsabilites && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="md:grid-cols-2">
                      <div>
                        <span className="section-label">Responsabilités</span>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: 0, listStyle: "none", margin: 0 }}>
                          {item.responsabilites.map((r, j) => (
                            <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-ink-muted)", alignItems: "flex-start" }}>
                              <span style={{ flexShrink: 0, fontWeight: 700, color: "var(--color-accent-dark)", marginTop: "0.1rem" }}>→</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {item.livrables && (
                        <div>
                          <span className="section-label">Livrables</span>
                          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: 0, listStyle: "none", margin: 0 }}>
                            {item.livrables.map((l, j) => (
                              <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-ink-muted)", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, fontWeight: 700, color: "var(--color-accent-dark)", marginTop: "0.1rem" }}>→</span>
                                {l}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {!isExp && (
                    <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingLeft: 0, listStyle: "none", margin: 0 }}>
                      {item.details.map(d => (
                        <li key={d} className="tag">{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
