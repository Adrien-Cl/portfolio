import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { ease, slideInLeft } from "../lib/animations";

export const Experience = () => {
  const { t } = useLang();

  return (
    <section className="w-full p-10 md:p-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="text-xs font-black uppercase tracking-[0.5em] mb-20 text-gray-500">
        💼 {t.experience.sectionTitle}
      </motion.h2>

      <div className="flex flex-col gap-24 w-full">
        {t.experience.items.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            className="flex flex-col md:flex-row justify-between items-start gap-20 border-b-2 border-black dark:border-white/10 pb-12">
            <div className="flex-1">
              <span className="text-2xl font-mono font-bold italic block mb-4">
                {exp.date}
              </span>
              <h3 className="text-5xl font-black uppercase tracking-tighter leading-none">
                {exp.title}
              </h3>
            </div>

            <div className="flex-[1.5] w-full">
              <p className="text-blue-600 font-bold uppercase text-xl tracking-widest mb-8">
                {exp.sub}
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {exp.desc.map((desc, j) => (
                  <motion.p
                    key={j}
                    custom={i * 0.08 + j * 0.06}
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-xl font-medium border-l-2 border-black dark:border-white/30 pl-4 min-w-75">
                    {desc}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
