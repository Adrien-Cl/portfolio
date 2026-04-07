import { Github, Linkedin } from "lucide-react";
import { PERSONAL } from "../data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}
           className="section-container sm:flex-row">
        <p style={{ fontSize: "0.8125rem", fontWeight: 700, opacity: 0.8 }}>
          © {new Date().getFullYear()} {PERSONAL.name} — BTS SIO SLAM
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <a
            href={PERSONAL.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub">
            <Github size={14} />
          </a>
          <a
            href={PERSONAL.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
