import { Github, Linkedin, Moon, Sun } from "lucide-react";

export const Navbar = ({ isDark, setIsDark }) => {
  const navLinks = [
    { name: "Projets", href: "#projects" },
    { name: "Expériences", href: "#experience" },
    { name: "Formations", href: "#education" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b-2 transition-colors duration-500 ${
        isDark
          ? "bg-[#0f0f0f] border-white/10 text-white"
          : "bg-white border-black text-black"
      } backdrop-blur-md px-6 md:px-10 py-5 flex justify-between items-center`}
    >
      {/* 1. GAUCHE : Logo */}
      <div className="shrink-0">
        <a href="#home" className="font-black text-2xl tracking-tighter">
          AC<span className="text-blue-600">.</span>
        </a>
      </div>

      {/* 2. CENTRE : Liens (Centrage absolu pour plus de précision) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-bold uppercase tracking-[0.2em] hover:text-blue-600 transition-colors relative group"
          >
            {link.name}
            {/* Petite barre d'accentuation au hover */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* 3. DROITE : Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4 border-r pr-6 border-current/20">
          <a
            href="https://github.com/ton-profil"
            target="_blank"
            className="hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ton-profil"
            target="_blank"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className={`group flex items-center justify-center w-10 h-10 border-2 transition-all duration-300 ${
            isDark
              ? "border-white hover:bg-white hover:text-black"
              : "border-black hover:bg-black hover:text-white"
          }`}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};
