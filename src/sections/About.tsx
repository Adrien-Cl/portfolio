import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ABOUT, PERSONAL } from "../data";
import { asset } from "../utils/asset";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const S = {
  section: { backgroundColor: "var(--color-bg)", borderBottom: "2px solid var(--color-ink)" },
  grid: { display: "grid", gridTemplateColumns: "1fr", gap: "4rem" },
  divider: { width: "100%", height: "2px", backgroundColor: "var(--color-ink)", margin: "0.5rem 0" },
  langRow: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 0", borderBottom: "1.5px solid var(--color-ink)" },
};

export function About() {
  return (
    <section id="about" style={S.section}>

      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }} className="section-container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">01 — À Propos</span>
          <h2 className="section-heading">Qui suis-je ?</h2>
        </motion.div>
      </div>

      {/* Contenu */}
      <div style={{ paddingBottom: "5rem" }} className="section-container">
        <div style={S.grid} className="lg:grid-cols-2">

          {/* Col bio */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

            <p style={{ fontSize: "1.125rem", color: "var(--color-ink)", lineHeight: 1.7 }}>{ABOUT.intro}</p>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>{ABOUT.bio}</p>

            {/* BTS block */}
            <div style={{ borderLeft: "4px solid var(--color-ink)", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--color-ink-muted)" }}>{ABOUT.bts.label}</span>
              <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>{ABOUT.bts.desc}</p>
            </div>

            <a href={asset(PERSONAL.cvPath)} download className="btn-primary" style={{ alignSelf: "flex-start" }}>
              <ArrowDown size={14} />
              Télécharger mon CV
            </a>
          </motion.div>

          {/* Col compétences */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* Technologies */}
            <div>
              <span className="section-label">Technologies</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {ABOUT.competences.techniques.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div>
              <span className="section-label">Langues</span>
              <div>
                {ABOUT.competences.langues.map(l => (
                  <div key={l.langue} style={S.langRow}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-ink)" }}>{l.langue}</span>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-accent-dark)" }}>{l.niveau}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <span className="section-label">Soft Skills</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem" }}>
                {ABOUT.competences.softSkills.map(s => (
                  <span key={s} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink-muted)" }}>— {s}</span>
                ))}
              </div>
            </div>

            {/* Débouchés */}
            <div>
              <span className="section-label">Débouchés</span>
              <div>
                {ABOUT.roles.map(r => (
                  <div key={r} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0", borderBottom: "1.5px solid var(--color-ink)" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "var(--color-accent)", border: "1.5px solid var(--color-ink)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-ink)" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
