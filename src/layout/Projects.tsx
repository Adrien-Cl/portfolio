import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { PROJECTS_META } from "../config/personal";
import { ease } from "../lib/animations";

export const Projects = () => {
  const { t } = useLang();

  return (
    <section className="w-full p-10 md:p-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="text-xs font-black uppercase tracking-[0.5em] mb-20 text-gray-400">
        💻 {t.projects.sectionTitle}
      </motion.h2>

      <div className="flex flex-col gap-32">
        {t.projects.items.map((project, i) => {
          const meta = PROJECTS_META[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="group flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease }}
                    className="text-blue-600 font-black uppercase tracking-widest text-sm italic block">
                    {project.category}
                  </motion.span>
                  <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none flex items-center gap-4">
                    <span className="inline-block group-hover:-translate-y-1 transition-transform duration-500">
                      {project.title}
                    </span>
                    <ArrowUpRight
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      size={40}
                    />
                  </h3>
                </div>

                <p className="text-xl text-gray-500 leading-relaxed border-l-4 border-black dark:border-white pl-6 max-w-xl">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {meta.tech.map(tech => (
                    <span
                      key={tech}
                      className="bg-black dark:bg-white dark:text-black text-white text-xs font-black px-4 py-1 uppercase italic">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 pt-4">
                  {meta.github && (
                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-blue-600 transition-colors duration-300">
                      <Github size={16} /> {t.projects.sourceCode}
                    </a>
                  )}
                  {meta.link && meta.link !== "#" && (
                    <a
                      href={meta.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-blue-600 transition-colors duration-300">
                      <ExternalLink size={16} /> {t.projects.visitSite}
                    </a>
                  )}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 0.97 }}
                transition={{ duration: 0.5, ease }}
                className="flex-1 w-full aspect-video overflow-hidden border-2 border-black dark:border-white relative">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease }}
                  src={meta.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
