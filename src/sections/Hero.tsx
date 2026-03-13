import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { PERSONAL } from "../data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function Hero() {
  return (
    <section id="home" className="min-h-[92vh] flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Texte */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div {...fade(0)} className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Portfolio BTS SIO — Option SLAM
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Bienvenue, je suis<br />
              <span className="text-blue-600">{PERSONAL.name}</span>
            </h1>
          </motion.div>

          <motion.p {...fade(0.1)} className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
            Développeur Web &amp; UI/UX Designer — Étudiant BTS SIO SLAM à l'AFTEC Rennes, en alternance au CNFPT.
          </motion.p>

          <motion.div {...fade(0.2)} className="flex flex-wrap gap-3">
            <a
              href={PERSONAL.cvPath}
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              <ArrowDown size={15} />
              Télécharger mon CV
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Voir mes projets
            </button>
          </motion.div>

          <motion.div {...fade(0.3)} className="flex items-center gap-4 pt-2">
            <a href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <Github size={18} />
            </a>
            <a href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
            <img
              src={PERSONAL.photo}
              alt={PERSONAL.name}
              className="w-full h-full object-cover"
              onError={e => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.innerHTML =
                  `<div class="w-full h-full flex items-center justify-center text-5xl font-bold text-zinc-400 dark:text-zinc-600">AC</div>`;
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
