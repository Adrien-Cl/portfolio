import { Github, Linkedin } from "lucide-react";
import { PERSONAL } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} {PERSONAL.name} — BTS SIO SLAM</p>
        <div className="flex items-center gap-4">
          <a href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <Github size={16} />
          </a>
          <a href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
