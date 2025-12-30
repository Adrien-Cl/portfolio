import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Portfolio Personnel",
    category: "Web Design & Développement",
    desc: "Développement d'un portfolio personnel pour présenter mes compétences, expériences et projets réalisés en tant que développeur web.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    link: "#",
    img: "./public/media/portfolio-hero.png",
    github: "https://github.com/Adrien-Cl/portfolio",
  },
  {
    title: "SkillSkyDrone",
    category: "Web Design & Développement",
    desc: "Création d'un site vitrine pour des passionnés de drone, mettant en avant leurs services avec un design moderne et minimaliste.",
    tech: ["Wordpress", "JS", "CSS3"],
    link: "https://skillskydrone.com",
    img: "./public/media/skillskydrone-hero.png",
  },
  {
    title: "Refonte Rennes Aqua Center",
    category: "Web Design & Développement",
    desc: "Modernisation complète de l'interface utilisateur et optimisation du tunnel de conversion pour le site e-commerce.",
    tech: ["CMS CMonSite", "JS", "CSS3"],
    link: "https://rennesaquacenter.fr",
    img: "./public/media/rennesaquacenter-hero.png",
  },
];

export const Projects = () => (
  <section className="w-full p-10 md:p-20">
    <h2 className="text-xs font-black uppercase tracking-[0.5em] mb-20 text-gray-400">
      💻 Projets Sélectionnés
    </h2>

    <div className="flex flex-col gap-32">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group flex flex-col md:flex-row gap-16 items-center">
          <motion.div whileHover={{ x: 20 }} className="flex-1 space-y-8">
            <div className="space-y-2">
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm italic">
                {project.category}
              </span>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none flex items-center gap-4">
                {project.title}
                <ArrowUpRight
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
                  size={40}
                />
              </h3>
            </div>

            <p className="text-xl text-gray-500 leading-relaxed border-l-4 border-black dark:border-white pl-6 max-w-xl">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="bg-black dark:bg-white dark:text-black text-white text-xs font-black px-4 py-1 uppercase italic">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-8 pt-4">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-blue-600 transition-colors">
                  <Github size={16} /> Code Source
                </a>
              )}

              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-blue-600 transition-colors">
                  <ExternalLink size={16} /> Voir le Site
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            className="flex-1 w-full aspect-video overflow-hidden border-2 border-black dark:border-white relative">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-black dark:border-white"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);
