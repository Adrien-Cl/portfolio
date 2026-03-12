import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { PERSONAL } from "../config/personal";
import { ease } from "../lib/animations";

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};

export const Hero = () => {
  const { t } = useLang();

  return (
    <section className="min-h-[80vh] w-full p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 flex flex-col">
        <motion.h1
          custom={0.1}
          variants={item}
          initial="hidden"
          animate="visible"
          className="text-[10vw] font-black uppercase leading-[0.8] tracking-[-0.05em]">
          Adrien <br /> Clavreul
        </motion.h1>

        <motion.p
          custom={0.25}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-8 text-xl md:text-2xl font-bold uppercase tracking-widest px-6 py-3 inline-block self-start">
          {t.hero.role}
        </motion.p>

        <motion.div
          custom={0.4}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 bg-blue-600 dark:bg-white text-white dark:text-black font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-black dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-300">
            {t.hero.seeProjects}
            <ArrowRight size={16} />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={PERSONAL.cvPath}
            download
            className="flex items-center gap-3 border-2 border-black dark:border-white font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
            <ArrowDown size={16} />
            {t.hero.downloadCV}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        custom={0.35}
        variants={item}
        initial="hidden"
        animate="visible"
        className="flex-1 flex justify-end">
        <div className="max-w-xl border-l-4 border-black pl-12">
          <p className="text-xs font-black uppercase mb-6 tracking-[0.4em] text-gray-400 italic">
            {t.hero.objectiveLabel}
          </p>
          <p className="text-4xl font-medium leading-tight">
            "{t.hero.objective}"
          </p>
        </div>
      </motion.div>
    </section>
  );
};
