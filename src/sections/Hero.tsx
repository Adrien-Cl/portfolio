import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { PERSONAL, ABOUT } from "../data";
import { asset } from "../utils/asset";

const ROLES = ABOUT.roles;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" style={{ backgroundColor: "var(--color-surface)", borderBottom: "2px solid var(--color-ink)", paddingTop: "6rem" }}>
      <div
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
        className="section-container flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

        {/* ── Texte ── */}
        <div className="flex-1 flex flex-col gap-7 min-w-0">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="section-label">
            Portfolio · BTS SIO SLAM · {new Date().getFullYear()}
          </motion.p>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{ fontSize: "clamp(52px, 8vw, 108px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, color: "var(--color-ink)" }}>
              {PERSONAL.name.split(" ")[0]}
              <br />
              {PERSONAL.name.split(" ")[1]}.
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              style={{ width: "5rem", height: "4px", backgroundColor: "var(--color-accent-dark)", transformOrigin: "left", marginTop: "1.5rem" }}
            />
          </div>

          {/* Rôle animé */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            style={{ height: "1.25rem", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--color-accent-dark)" }}>
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ fontSize: "1rem", color: "var(--color-ink-muted)", lineHeight: 1.7, maxWidth: "32rem" }}>
            {ABOUT.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex flex-wrap gap-3">
            <a href={asset(PERSONAL.cvPath)} download className="btn-primary">
              <ArrowDown size={14} />
              Télécharger mon CV
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary">
              <ArrowRight size={14} />
              Voir mes projets
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="flex items-center gap-6">
            <a
              href={PERSONAL.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-ink-muted)", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-muted)")}>
              <SiGithub size={13} />
              GitHub
            </a>
            <a
              href={PERSONAL.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-ink-muted)", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-muted)")}>
              <Linkedin size={13} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* ── Photo + méta ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-80 xl:w-96 shrink-0">

          {/* Photo + méta bloc unifié */}
          <div style={{ boxShadow: "var(--shadow-flat-lg)" }}>
            <div style={{ width: "100%", aspectRatio: "1", border: "3px solid var(--color-ink)", overflow: "hidden" }}>
              <img
                src={asset(PERSONAL.photo)}
                alt={PERSONAL.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3.5rem;font-weight:900;color:var(--color-ink-muted);background:var(--color-surface)">AC</div>`;
                }}
              />
            </div>

            {/* Méta */}
            <div style={{ border: "3px solid var(--color-ink)", borderTop: "none", backgroundColor: "var(--color-bg)", padding: "1rem 1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--color-ink-muted)", marginBottom: "0.25rem" }}>Localisation</p>
              <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-ink)" }}>{PERSONAL.location}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--color-ink-muted)", marginBottom: "0.25rem" }}>Statut</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "var(--color-accent-dark)", flexShrink: 0, border: "1.5px solid var(--color-ink)" }} />
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-ink)" }}>Alternance</p>
              </div>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
