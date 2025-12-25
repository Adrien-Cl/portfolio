import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiSymfony,
  SiVuedotjs,
  SiWordpress,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Laravel", icon: SiLaravel },
  { name: "Symfony", icon: SiSymfony },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "WordPress", icon: SiWordpress },
  { name: "Figma", icon: SiFigma },
];

export const SkillsSlider = ({ isDark }: { isDark: boolean }) => {
  const doubledSkills = [...SKILLS, ...SKILLS];

  return (
    <section
      className={`w-full py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#141414]" : "bg-gray-50"
      }`}
    >
      <h2
        className={`px-10 md:px-20 text-xs font-black uppercase tracking-[0.5em] mb-16 ${
          isDark ? "text-white/20" : "text-gray-300"
        }`}
      >
        🛠️ Stack Technique
      </h2>

      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {doubledSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-6 px-12 group">
              <skill.icon
                size={60}
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-white group-hover:text-blue-400"
                    : "text-black group-hover:text-blue-600"
                }`}
              />
              <span
                className={`text-6xl md:text-8xl font-black uppercase tracking-tighter transition-colors duration-300 ${
                  isDark
                    ? "text-white group-hover:text-blue-400"
                    : "text-black group-hover:text-blue-600"
                }`}
              >
                {skill.name}
              </span>
              <span
                className={`ml-12 text-5xl ${
                  isDark ? "text-white/10" : "text-gray-200"
                }`}
              >
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
