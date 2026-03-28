import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL } from "../data";
import { useActiveSection } from "../utils/useActiveSection";

const NAV_LINKS = [
  { label: "À Propos", id: "about" },
  { label: "Parcours", id: "parcours" },
  { label: "Projets", id: "projects" },
  { label: "Compétences", id: "skills" },
  { label: "Veille", id: "veille" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            {PERSONAL.name}<span className="text-blue-600">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm pb-0.5 transition-colors ${
                  activeSection === link.id
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}>
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-blue-600"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="Changer de thème">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="Menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 inset-x-0 z-40 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                className={`text-left py-2.5 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500"
                }`}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
