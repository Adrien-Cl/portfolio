import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { EDUCATION_LOGOS } from "../config/personal";
import { ease, slideInLeft } from "../lib/animations";

export const Education = () => {
  const { t } = useLang();

  return (
    <section className="p-10 md:p-20 border-t-2 border-black dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col md:flex-row justify-between items-start mb-20 gap-4">
        <h2 className="text-sm font-black uppercase tracking-[0.5em] text-gray-500">
          🎓 {t.education.sectionTitle}
        </h2>
        <p className="text-xs font-bold uppercase tracking-widest opacity-40 md:text-right">
          {t.education.subtitle}
        </p>
      </motion.div>

      <div className="flex flex-col">
        {t.education.items.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="group grid md:grid-cols-12 gap-8 py-12 border-b-2 border-black/5 dark:border-white/5 last:border-none items-center">

            {/* Années (2/12) */}
            <div className="md:col-span-2">
              <span className="text-xl font-black italic tracking-tighter text-blue-600">
                {edu.date}
              </span>
            </div>

            {/* Logo + Titre & École (6/12) */}
            <div className="md:col-span-6 flex items-start gap-6">
              <div className="shrink-0 w-16 h-16 border-2 border-black/10 dark:border-white/10 p-2 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={EDUCATION_LOGOS[i]}
                  alt={edu.school}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-lg font-bold uppercase mt-1 opacity-80 italic">
                    {edu.school}
                  </p>
                </div>
                <p className="text-gray-500 font-medium max-w-md leading-relaxed text-sm">
                  {edu.desc}
                </p>
              </div>
            </div>

            {/* Modules principaux (4/12) */}
            <div className="md:col-span-4 flex flex-col gap-4 border-l-2 border-black/5 dark:border-white/5 md:pl-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                {t.education.modulesLabel}
              </span>
              <ul className="space-y-2">
                {edu.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    custom={i * 0.1 + idx * 0.07}
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                    <span className="text-[10px] text-blue-600 font-black">
                      0{idx + 1}
                    </span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
