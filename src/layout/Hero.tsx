import { motion } from "framer-motion";

export const Hero = () => (
  <section className="min-h-[80vh] w-full p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1"
    >
      <h1 className="text-[10vw] font-black uppercase leading-[0.8] tracking-[ -0.05em]">
        Adrien <br /> Clavreul
      </h1>
      <p className="mt-8 text-xl md:text-2xl font-bold uppercase tracking-widest border-2 border-black px-6 py-3 inline-block">
        Développeur Web & UI / UX Designeur
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 flex justify-end"
    >
      <div className="max-w-xl border-l-4 border-black pl-12">
        <p className="text-xs font-black uppercase mb-6 tracking-[0.4em] text-gray-400 italic">
          Objectif Professionnel
        </p>
        <p className="text-4xl font-medium leading-tight">
          "Admis en BTS SIO option SLAM à l'AFTEC, je suis à la recherche
          d'opportunités pour perfectionner mes compétences."
        </p>
      </div>
    </motion.div>
  </section>
);
