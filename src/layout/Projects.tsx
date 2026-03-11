import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { PROJECTS_META } from "../config/personal";
import { ease } from "../lib/animations";

type Project = {
  title: string;
  category: string;
  desc: string;
  longDesc: readonly string[];
};
type Meta = (typeof PROJECTS_META)[number];

function ProjectModal({
  project,
  meta,
  onClose,
}: {
  project: Project;
  meta: Meta;
  onClose: () => void;
}) {
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.35, ease }}
        onClick={e => e.stopPropagation()}
        className="relative z-10 bg-white dark:bg-[#0f0f0f] border-2 border-black dark:border-white w-full max-w-6xl max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 hover:text-blue-600 transition-colors duration-200">
          <X size={24} strokeWidth={3} />
        </button>

        {/* Image */}
        <div className="w-full overflow-hidden border-b-2 border-black dark:border-white">
          <img
            src={meta.img}
            srcSet={`${meta.img} 1200w`}
            sizes="(max-width: 768px) 100vw, 896px"
            alt={project.title}
            className="w-full max-h-[40vw] min-h-[180px] object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-12 space-y-6 md:space-y-8">
          <div className="space-y-2">
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm italic block">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
          </div>

          <div className="space-y-4 border-l-4 border-black dark:border-white pl-6">
            {project.longDesc.map((para, i) => (
              <p key={i} className="text-lg text-gray-500 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Stack</p>
            <div className="flex flex-wrap gap-2">
              {meta.tech.map(tech => (
                <span
                  key={tech}
                  className="bg-black dark:bg-white dark:text-black text-white text-xs font-black px-4 py-1 uppercase italic">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {meta.github && (
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-black uppercase text-xs md:text-sm tracking-widest border-2 border-black dark:border-white px-4 md:px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                <Github size={16} /> {t.projects.sourceCode}
              </a>
            )}
            {meta.link && meta.link !== "#" && (
              <a
                href={meta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-black uppercase text-xs md:text-sm tracking-widest bg-blue-600 text-white px-4 md:px-6 py-3 hover:bg-black transition-colors duration-300">
                <ExternalLink size={16} /> {t.projects.visitSite}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const Projects = () => {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  const selectedProject = selected !== null ? t.projects.items[selected] : null;
  const selectedMeta = selected !== null ? PROJECTS_META[selected] : null;

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
                  <h3
                    onClick={() => setSelected(i)}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none flex items-center gap-4 cursor-pointer">
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

                <div className="flex gap-8">
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
                onClick={() => setSelected(i)}
                whileHover={{ scale: 0.97 }}
                transition={{ duration: 0.5, ease }}
                className="flex-1 w-full aspect-video overflow-hidden border-2 border-black dark:border-white relative cursor-pointer">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease }}
                  src={meta.img}
                  srcSet={`${meta.img} 1200w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
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

      <AnimatePresence>
        {selectedProject && selectedMeta && (
          <ProjectModal
            project={selectedProject}
            meta={selectedMeta}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
