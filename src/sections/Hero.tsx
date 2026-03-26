import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin, GraduationCap, Linkedin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
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
    <section id="home" className="relative min-h-[96vh] flex items-center px-6 overflow-hidden">

      {/* Fond grille */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Tache lumineuse */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-150 h-150 rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-100 h-100 rounded-full bg-blue-400/5 dark:bg-blue-400/6 blur-3xl" />

      <div className="relative max-w-5xl mx-auto w-full py-24 flex flex-col md:flex-row items-center gap-14 md:gap-20">

        {/* ── Texte ── */}
        <div className="flex-1 flex flex-col gap-7">

          {/* Disponibilité */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
              Disponible — Alternance 2025–2027
            </span>
          </motion.div>

          {/* Nom + rôle animé */}
          <div className="flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]"
            >
              {PERSONAL.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="h-7 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-base font-medium text-blue-600 dark:text-blue-400"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Tags contexte */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              <MapPin size={11} />
              {PERSONAL.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              <GraduationCap size={11} />
              BTS SIO SLAM — AFTEC Rennes
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md"
          >
            {ABOUT.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={asset(PERSONAL.cvPath)}
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm shadow-blue-600/20"
            >
              <ArrowDown size={14} />
              Télécharger mon CV
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Voir mes projets
            </button>
          </motion.div>

          {/* Réseaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-1 pt-1"
          >
            <a
              href={PERSONAL.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <SiGithub size={14} />
              GitHub
            </a>
            <span className="text-zinc-200 dark:text-zinc-700">·</span>
            <a
              href={PERSONAL.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <span className="text-zinc-200 dark:text-zinc-700">·</span>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              {PERSONAL.email}
            </a>
          </motion.div>
        </div>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0 relative"
        >
          {/* Points décoratifs haut-droite */}
          <div
            className="absolute -top-5 -right-5 w-24 h-24 text-blue-400/30 dark:text-blue-400/20 -z-10"
            style={{ backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }}
          />
          {/* Points décoratifs bas-gauche */}
          <div
            className="absolute -bottom-5 -left-5 w-20 h-20 text-blue-400/20 dark:text-blue-400/15 -z-10"
            style={{ backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }}
          />

          {/* Contour gradient — wrapper de 3px */}
          <div className="p-0.75 rounded-3xl bg-linear-to-br from-blue-500 via-blue-400 to-indigo-500 shadow-2xl shadow-blue-600/20 dark:shadow-blue-600/30">
            <div className="w-80 h-80 md:w-104 md:h-104 rounded-[22px] overflow-hidden">
              <img
                src={asset(PERSONAL.photo)}
                alt={PERSONAL.name}
                className="w-full h-full object-cover object-[50%_30%]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    `<div class="w-full h-96 flex items-center justify-center text-6xl font-bold text-zinc-300 dark:text-zinc-600">AC</div>`;
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border-2 border-zinc-300 dark:border-zinc-600 flex items-start justify-center pt-1"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        </motion.div>
      </motion.div>

    </section>
  );
}
