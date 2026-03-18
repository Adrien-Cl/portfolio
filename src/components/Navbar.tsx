import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { PERSONAL } from "../config/personal";
import { ease } from "../lib/animations";

const SOCIAL_LINKS = [
  { href: PERSONAL.socials.github, icon: Github, label: "GitHub" },
  { href: PERSONAL.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
];

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export const Navbar = ({ isDark, setIsDark }: NavbarProps) => {
  const { t, lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.projects, id: "projects" },
    { name: t.nav.experience, id: "experience" },
    { name: t.nav.education, id: "education" },
  ];

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className={`sticky top-0 z-50 w-full border-b-2 transition-colors duration-500 ${
          isDark
            ? "bg-[#0f0f0f] border-white/10 text-white"
            : "bg-white border-black text-black"
        } backdrop-blur-md px-6 md:px-10 py-5 flex justify-between items-center`}>

        <div className="shrink-0">
          <button onClick={() => scrollTo("home")} className="font-black text-2xl tracking-tighter">
            AC<span className="text-blue-600">.</span>
          </button>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease }}
              className="text-sm font-bold uppercase tracking-[0.2em] hover:text-blue-600 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-4 border-r pr-6 border-current/20">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-blue-600 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <button
            onClick={toggleLang}
            className="flex items-center justify-center w-10 h-10 hover:scale-110 transition-transform duration-200"
            title={lang === "fr" ? "Switch to English" : "Passer en français"}>
            <img
              src={lang === "fr" ? "https://flagcdn.com/gb.svg" : "https://flagcdn.com/fr.svg"}
              alt={lang === "fr" ? "English" : "Français"}
              className="h-4.5 w-auto"
            />
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            className={`flex items-center justify-center w-10 h-10 border-2 transition-all duration-300 ${
              isDark
                ? "border-white hover:bg-white hover:text-black"
                : "border-black hover:bg-black hover:text-white"
            }`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden flex items-center justify-center w-10 h-10">
            {menuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease }}
            className={`fixed top-17.25 left-0 right-0 z-40 border-b-2 ${
              isDark
                ? "bg-[#0f0f0f] border-white/10 text-white"
                : "bg-white border-black text-black"
            }`}>
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-sm font-black uppercase tracking-[0.2em] py-4 border-b border-current/10 last:border-none hover:text-blue-600 transition-colors">
                  {link.name}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-4">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-blue-600 transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
