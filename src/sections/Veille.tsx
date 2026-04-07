import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { VEILLE } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export function Veille() {
  return (
    <section id="veille" style={{ backgroundColor: "var(--color-surface)", borderBottom: "2px solid var(--color-ink)" }}>

      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }} className="section-container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">06 — Veille Technologique</span>
          <h2 className="section-heading">{VEILLE.theme}</h2>
        </motion.div>
      </div>

      {/* Intro */}
      <div style={{ paddingBottom: "2.5rem" }} className="section-container">
        <motion.p
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontSize: "1rem", color: "var(--color-ink-muted)", lineHeight: 1.7, maxWidth: "48rem", borderLeft: "4px solid var(--color-ink)", paddingLeft: "1.25rem" }}>
          {VEILLE.intro}
        </motion.p>
      </div>

      {/* Sous-thèmes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} className="section-container">
        {VEILLE.subtopics.map((sub, i) => (
          <motion.div
            key={i}
            variants={fadeUp} custom={i + 2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ border: "2px solid var(--color-ink)", backgroundColor: "var(--color-bg)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "var(--color-accent-dark)", flexShrink: 0, paddingTop: "0.375rem", minWidth: "1.5rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>{sub.title}</h3>
            </div>

            <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.7, paddingLeft: "2.5rem" }}>
              {sub.content}
            </p>

            <div style={{ paddingLeft: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {sub.sources.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-ink)", border: "1.5px solid var(--color-ink)", padding: "0.25rem 0.75rem", textDecoration: "none", backgroundColor: "transparent", transition: "background-color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                  <ExternalLink size={9} />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Autres sources */}
      <div style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }} className="section-container">
        <motion.span
          variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="section-label">
          Autres sources de veille régulière
        </motion.span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }} className="md:grid-cols-2">
          {VEILLE.otherTopics.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp} custom={i + 6} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ padding: "1.25rem", border: "2px solid var(--color-ink)", backgroundColor: "var(--color-bg)", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 900, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>{item.nom}</h4>
                <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-accent-dark)", flexShrink: 0, padding: "0.125rem 0.5rem", border: "1.5px solid var(--color-ink)", backgroundColor: "var(--color-accent)" }}>{item.type}</span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
