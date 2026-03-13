import { motion } from "framer-motion";
import {
  SiCss, SiDocker, SiFigma, SiGit, SiGithub, SiGitlab,
  SiHtml5, SiJavascript, SiLaravel, SiLinux, SiMysql,
  SiNginx, SiPhp, SiPython, SiReact, SiTailwindcss,
  SiTypescript, SiVuedotjs, SiWordpress,
} from "@icons-pack/react-simple-icons";
import { SKILLS_CATEGORIES } from "../data";

const ICON_MAP: Record<string, React.ElementType> = {
  HTML5: SiHtml5, CSS3: SiCss, JavaScript: SiJavascript, TypeScript: SiTypescript,
  React: SiReact, "Vue.js": SiVuedotjs, "Tailwind CSS": SiTailwindcss,
  PHP: SiPhp, Laravel: SiLaravel, MySQL: SiMysql, Python: SiPython,
  WordPress: SiWordpress, Docker: SiDocker, Linux: SiLinux,
  Git: SiGit, GitHub: SiGithub, GitLab: SiGitlab, Nginx: SiNginx,
  Figma: SiFigma,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Compétences</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Technologies maîtrisées</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              custom={ci + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-6 flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map(name => {
                  const Icon = ICON_MAP[name];
                  return (
                    <div key={name} className="group flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700/50 rounded-lg px-3 py-2 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all">
                      {Icon && <Icon size={14} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />}
                      <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
