import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Github, X, ImageOff } from "lucide-react";
import { PROJECTS, type ProjectFilter } from "../data";
import { asset } from "../utils/asset";

const FILTERS: { label: string; value: "all" | ProjectFilter }[] = [
  { label: "Tous",           value: "all" },
  { label: "Web",            value: "dev" },
  { label: "Logiciel",       value: "software" },
  { label: "Communication",  value: "communication" },
  { label: "Infrastructure", value: "infra" },
];

const BTS_FILTERS: { label: string; value: "all" | "E5" | "E6" }[] = [
  { label: "Tous",      value: "all" },
  { label: "Projet E5", value: "E5" },
  { label: "Projet E6", value: "E6" },
];

const BTS_STEPS = [
  { key: "brief" as const,       num: "01", label: "Le Brief",       desc: "Contexte & demande" },
  { key: "demarche" as const,    num: "02", label: "La Démarche",    desc: "Recherches & cheminement" },
  { key: "realisation" as const, num: "03", label: "La Réalisation", desc: "Outils & techniques" },
  { key: "autocritique" as const,num: "04", label: "Autocritique",   desc: "Ce que j'en retire" },
];

function Modal({ project, onClose }: { project: typeof PROJECTS[number]; onClose: () => void }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  const hasLinks = project.github || (project.link && project.link !== "#");

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "2rem 1rem", overflowY: "auto", backgroundColor: "rgba(26,26,46,0.7)" }}
      onClick={onClose}>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        style={{ position: "relative", zIndex: 10, backgroundColor: "var(--color-surface)", border: "2px solid var(--color-ink)", boxShadow: "var(--shadow-flat-lg)", width: "100%", maxWidth: "56rem", margin: "auto", overflow: "hidden" }}>

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 20, width: "2.25rem", height: "2.25rem", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--color-ink)", backgroundColor: "var(--color-bg)", cursor: "pointer", transition: "background-color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-bg)")}>
          <X size={14} />
        </button>

        {/* Image */}
        <div style={{ width: "100%", height: "14rem", overflow: "hidden", backgroundColor: "var(--color-accent)", borderBottom: "2px solid var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}
             className="md:h-64">
          {imgError ? <ImageOff size={32} style={{ color: "var(--color-ink-muted)" }} /> : (
            <img src={asset(project.img)} alt={project.title}
              onError={() => setImgError(true)}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          )}
        </div>

        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }} className="md:p-8">

          {/* En-tête */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="md:flex-row md:items-start">
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--color-accent-dark)" }}>{project.category}</span>
                  {project.bts && (
                    <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", backgroundColor: "var(--color-accent-dark)", border: "1.5px solid var(--color-ink)", padding: "0.125rem 0.5rem", color: "var(--color-bg)" }}>
                      {project.bts}
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--color-ink)", lineHeight: 1.05 }}>{project.title}</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>{project.desc}</p>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", listStyle: "none", padding: 0, margin: 0 }}>
                {project.tech.map(t => <li key={t} className="tag">{t}</li>)}
              </ul>
            </div>

            {hasLinks ? (
              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }} className="md:flex-col">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}>
                    <Github size={12} /> Code source
                  </a>
                )}
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}>
                    <ExternalLink size={12} /> Voir le site
                  </a>
                )}
              </div>
            ) : (
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-ink-muted)", flexShrink: 0 }}>Source privée</p>
            )}
          </div>

          {/* Séparateur Analyse BTS */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ flex: 1, height: "2px", backgroundColor: "var(--color-ink)" }} />
            <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--color-ink-muted)", whiteSpace: "nowrap" }}>Analyse BTS</span>
            <div style={{ flex: 1, height: "2px", backgroundColor: "var(--color-ink)" }} />
          </div>

          {/* Grille BTS */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }} className="md:grid-cols-2">
            {BTS_STEPS.map((step) => {
              const value = project[step.key];
              return (
                <div key={step.key} style={{ padding: "1.25rem", border: "2px solid var(--color-ink)", backgroundColor: "var(--color-bg)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "var(--color-accent-dark)" }}>{step.num}</span>
                    <div style={{ width: "2px", height: "1rem", backgroundColor: "var(--color-ink)" }} />
                    <div>
                      <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-ink)" }}>{step.label}</p>
                      <p style={{ fontSize: "0.625rem", color: "var(--color-ink-muted)" }}>{step.desc}</p>
                    </div>
                  </div>
                  {Array.isArray(value) ? (
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", paddingLeft: 0, listStyle: "none", margin: 0 }}>
                      {(value as string[]).map((s, i) => (
                        <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>
                          <span style={{ flexShrink: 0, fontWeight: 700, color: "var(--color-accent-dark)" }}>→</span>{s}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.6, fontStyle: step.key === "autocritique" ? "italic" : "normal" }}>{value as string}</p>
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

interface ProjectsProps {
  selected: number | null;
  setSelected: (i: number | null) => void;
}

export function Projects({ selected, setSelected }: ProjectsProps) {
  const [filter, setFilter] = useState<"all" | ProjectFilter>("all");
  const [btsFilter, setBtsFilter] = useState<"all" | "E5" | "E6">("all");

  const filtered = PROJECTS.filter(p => {
    const categoryMatch = filter === "all" || p.filter === filter;
    const btsMatch = btsFilter === "all" || p.bts === btsFilter;
    return categoryMatch && btsMatch;
  });

  return (
    <section id="projects" style={{ backgroundColor: "var(--color-bg)", borderBottom: "2px solid var(--color-ink)" }}>

      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }} className="section-container">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-label">03 — Projets</span>
          <h2 className="section-heading">Réalisations</h2>
        </motion.div>
      </div>

      {/* Filtres catégorie */}
      <div style={{ paddingBottom: "0.625rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }} className="section-container">
        {FILTERS.map(f => (
          <button key={f.value} onClick={() => setFilter(f.value)} style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", padding: "0.375rem 1rem", border: "2px solid var(--color-ink)", cursor: "pointer", backgroundColor: filter === f.value ? "var(--color-ink)" : "transparent", color: filter === f.value ? "var(--color-bg)" : "var(--color-ink)", transition: "background-color 0.15s, color 0.15s", fontFamily: "var(--font-sans)" }}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Filtres BTS */}
      <div style={{ paddingBottom: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }} className="section-container">
        {BTS_FILTERS.map(f => (
          <button key={f.value} onClick={() => setBtsFilter(f.value)} style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", padding: "0.375rem 1rem", border: "2px solid var(--color-accent-dark)", cursor: "pointer", backgroundColor: btsFilter === f.value ? "var(--color-accent-dark)" : "transparent", color: btsFilter === f.value ? "var(--color-bg)" : "var(--color-accent-dark)", transition: "background-color 0.15s, color 0.15s", fontFamily: "var(--font-sans)" }}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Grille projets */}
      <div style={{ paddingBottom: "5rem" }} className="section-container">
        <AnimatePresence mode="popLayout">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1rem" }}
               className="sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                onClick={() => setSelected(PROJECTS.indexOf(project))}
                className="card-flat"
                style={{ cursor: "pointer", overflow: "hidden" }}>

                {/* Image */}
                <div style={{ width: "100%", height: "11rem", overflow: "hidden", backgroundColor: "var(--color-accent)", borderBottom: "2px solid var(--color-ink)", position: "relative" }}>
                  <img
                    src={asset(project.img)} alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", backgroundColor: "var(--color-accent)", border: "1.5px solid var(--color-ink)", padding: "0.125rem 0.625rem", color: "var(--color-ink)" }}>
                    {project.category}
                  </span>
                  {project.bts && (
                    <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", backgroundColor: "var(--color-accent-dark)", border: "1.5px solid var(--color-ink)", padding: "0.125rem 0.625rem", color: "var(--color-bg)" }}>
                      {project.bts}
                    </span>
                  )}
                </div>

                {/* Contenu */}
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-ink)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                    <span>{project.title}</span>
                    <ArrowUpRight size={16} style={{ flexShrink: 0, color: "var(--color-ink-muted)", marginTop: "0.1rem" }} />
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-ink-muted)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {project.desc}
                  </p>
                  <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", listStyle: "none", padding: 0, margin: 0 }}>
                    {project.tech.slice(0, 4).map(t => <li key={t} className="tag" style={{ fontSize: "0.6875rem" }}>{t}</li>)}
                    {project.tech.length > 4 && <li style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--color-ink-muted)", padding: "0.25rem" }}>+{project.tech.length - 4}</li>}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Modal project={PROJECTS[selected]} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
