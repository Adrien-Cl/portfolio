import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { PERSONAL } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (!res.ok) { setError(true); setLoading(false); return; }
      setLoading(false); setSent(true); form.reset();
    } catch { setError(true); setLoading(false); }
  }

  const contactRow = { display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", borderBottom: "1.5px solid var(--color-ink)", textDecoration: "none", color: "var(--color-ink)", transition: "color 0.15s" };

  return (
    <section id="contact" style={{ backgroundColor: "var(--color-surface)", borderBottom: "2px solid var(--color-ink)" }}>

      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem" }} className="section-container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-label">07 — Contact</span>
          <h2 className="section-heading">Entrons en contact</h2>
        </motion.div>
      </div>

      <div style={{ paddingBottom: "5rem", display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
           className="section-container lg:grid-cols-2 lg:gap-20">

        {/* Infos */}
        <motion.div
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

          <p style={{ fontSize: "1rem", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
            N'hésitez pas à me contacter pour toute question, opportunité ou collaboration.
          </p>

          <div>
            <a href={`mailto:${PERSONAL.email}`} style={contactRow as React.CSSProperties}
               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-accent-dark)"; }}
               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; }}>
              <Mail size={16} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.9375rem", fontWeight: 700 }}>{PERSONAL.email}</span>
            </a>
            <a href={`tel:${PERSONAL.phone.raw}`} style={contactRow as React.CSSProperties}
               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-accent-dark)"; }}
               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; }}>
              <Phone size={16} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.9375rem", fontWeight: 700 }}>{PERSONAL.phone.display}</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", borderBottom: "1.5px solid var(--color-ink)", color: "var(--color-ink-muted)" }}>
              <MapPin size={16} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.9375rem", fontWeight: 700 }}>{PERSONAL.location}</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {[
              { href: PERSONAL.socials.github, icon: <Github size={15} />, label: "GitHub" },
              { href: PERSONAL.socials.linkedin, icon: <Linkedin size={15} />, label: "LinkedIn" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                 aria-label={s.label}
                 style={{ width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--color-ink)", color: "var(--color-ink)", textDecoration: "none", boxShadow: "var(--shadow-flat-sm)", backgroundColor: "var(--color-bg)", transition: "background-color 0.15s, box-shadow 0.15s, transform 0.15s" }}
                 onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "var(--color-ink)"; el.style.color = "var(--color-bg)"; el.style.boxShadow = "1px 1px 0 var(--color-ink)"; el.style.transform = "translate(1px,1px)"; }}
                 onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "var(--color-bg)"; el.style.color = "var(--color-ink)"; el.style.boxShadow = "var(--shadow-flat-sm)"; el.style.transform = "none"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          {sent ? (
            <div style={{ border: "2px solid var(--color-ink)", backgroundColor: "var(--color-surface)", boxShadow: "var(--shadow-flat)", padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", border: "2px solid var(--color-ink)", backgroundColor: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Send size={20} />
              </div>
              <p style={{ fontSize: "1.125rem", fontWeight: 900, color: "var(--color-ink)" }}>Message envoyé !</p>
              <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>Je vous répondrai dans les plus brefs délais.</p>
              <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: "0.5rem" }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem" }} className="md:grid-cols-2">
                <div>
                  <label className="form-label">Nom</label>
                  <input name="name" type="text" required placeholder="Votre nom" className="input-flat" />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input name="email" type="email" required placeholder="votre@email.fr" className="input-flat" />
                </div>
              </div>
              <div>
                <label className="form-label">Sujet</label>
                <input name="subject" type="text" placeholder="Sujet de votre message" className="input-flat" />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea name="message" required rows={5} placeholder="Votre message..." className="input-flat" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary" style={{ alignSelf: "center", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Send size={14} />
                {loading ? "Envoi…" : "Envoyer"}
              </button>
              {error && (
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#DC2626" }}>
                  Une erreur est survenue. Réessayez ou contactez-moi directement par email.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
