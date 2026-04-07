import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL } from "../data";
import { useActiveSection } from "../utils/useActiveSection";

const NAV_LINKS = [
  { label: "À Propos",    id: "about" },
  { label: "Parcours",    id: "parcours" },
  { label: "Projets",     id: "projects" },
  { label: "Compétences", id: "skills" },
  { label: "Synthèse",    id: "synthese" },
  { label: "Veille",      id: "veille" },
  { label: "Contact",     id: "contact" },
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
      <header className="nav-pill">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          {PERSONAL.name.split(" ").map(n => n[0]).join("")}.
        </a>

        <span className="nav-sep" />

        {/* Liens desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-0.5">
          <ul style={{ display: "contents", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  className="nav-link"
                  aria-current={activeSection === link.id ? "page" : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="nav-sep hidden md:block" />

        {/* Toggle thème */}
        <button className="nav-icon-btn" onClick={onToggleTheme} aria-label="Changer de thème">
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {/* Hamburger mobile */}
        <button
          className="nav-icon-btn md:hidden"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Menu mobile"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}>
            <ul className="mobile-menu">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); setMenuOpen(false); }}
                    aria-current={activeSection === link.id ? "page" : undefined}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
