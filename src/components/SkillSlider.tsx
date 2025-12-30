import {
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNginx,
  SiPhp,
  SiPortainer,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
interface Skill {
  name: string;
  icon: React.ElementType;
}

const SKILLS: Skill[] = [
  // --- FRONT-END ---
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JS", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },

  // --- BACK-END & CMS ---
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "MySQL", icon: SiMysql },
  { name: "Python", icon: SiPython },
  { name: "WordPress", icon: SiWordpress },

  // --- INFRA & DEVOPS ---
  { name: "Docker", icon: SiDocker },
  { name: "Portainer", icon: SiPortainer },
  { name: "Nginx", icon: SiNginx },
  { name: "Linux", icon: SiLinux },
  { name: "Raspberry Pi", icon: SiRaspberrypi },

  // --- TOOLS & DESIGN ---
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Figma", icon: SiFigma },
];

const firstGroup = SKILLS.slice(0, Math.ceil(SKILLS.length / 2));
const secondGroup = SKILLS.slice(Math.ceil(SKILLS.length / 2));
interface ScrollingRowProps {
  items: Skill[];
  duration: number;
  reverse?: boolean;
}

const ScrollingRow = ({
  items,
  duration,
  reverse = false,
}: ScrollingRowProps) => (
  <div className="flex whitespace-nowrap overflow-hidden py-4">
    <motion.div
      className="flex items-center"
      animate={{ x: reverse ? ["-30%", "0%"] : ["0%", "-30%"] }}
      transition={{ repeat: Infinity, duration: duration, ease: "linear" }}>
      {[...items, ...items].map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-4 md:gap-8 px-6 md:px-12 group">
          <skill.icon
            size={40}
            className="transition-colors group-hover:text-blue-600 md:w-12.5 md:h-12.5"
          />
          <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
            {skill.name}
          </span>
          <span className="ml-6 md:ml-12 text-3xl md:text-5xl opacity-10">
            /
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

interface SkillsSliderProps {
  isDark: boolean;
}

export const SkillsSlider = ({ isDark }: SkillsSliderProps) => {
  return (
    <section
      className={`w-full py-12 md:py-24 overflow-hidden transition-colors ${
        isDark ? "bg-[#141414]" : "bg-gray-50"
      }`}>
      <div className="md:block">
        <ScrollingRow items={firstGroup} duration={15} />
        <br />
        <br />
        <ScrollingRow items={secondGroup} duration={18} reverse={true} />
      </div>
    </section>
  );
};
