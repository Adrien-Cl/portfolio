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
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "var(--color-surface)", borderBottom: "2px solid var(--color-ink)" }}>

      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }} className="section-container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">04 — Compétences</span>
          <h2 className="section-heading">Technologies maîtrisées</h2>
        </motion.div>
      </div>

      {/* Grille catégories */}
      <div style={{ paddingBottom: "5rem", display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
           className="section-container md:grid-cols-2">
        {SKILLS_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            variants={fadeUp} custom={ci + 1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ border: "2px solid var(--color-ink)", backgroundColor: "var(--color-bg)", padding: "1.5rem" }}>
            <span className="section-label">{cat.label}</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {cat.items.map(name => {
                const Icon = ICON_MAP[name];
                return (
                  <span key={name} className="tag">
                    {Icon && <Icon size={11} />}
                    {name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
