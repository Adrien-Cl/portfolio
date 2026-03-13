import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { PERSONAL } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") as string || "Contact Portfolio");
    const body = encodeURIComponent(
      `Nom : ${data.get("name")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Entrons en contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Infos */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6">
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              N'hésitez pas à me contacter pour toute question, opportunité ou collaboration.
            </p>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <Mail size={14} />
                </div>
                {PERSONAL.email}
              </a>
              <a href={`tel:${PERSONAL.phone.raw}`}
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <Phone size={14} />
                </div>
                {PERSONAL.phone.display}
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <MapPin size={14} />
                </div>
                {PERSONAL.location}
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 transition-all">
                <Github size={16} />
              </a>
              <a href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {sent ? (
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-8 flex flex-col items-center justify-center gap-3 h-full min-h-64">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-950/40 flex items-center justify-center">
                  <Send size={20} className="text-green-600" />
                </div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">Message envoyé !</p>
                <p className="text-sm text-zinc-500 text-center">Votre client mail s'est ouvert. Je vous répondrai dans les plus brefs délais.</p>
                <button onClick={() => setSent(false)} className="text-sm text-blue-600 hover:underline mt-1">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nom</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="votre@email.fr"
                      className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Sujet</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Sujet de votre message"
                    className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="justify-center inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors w-full">
                  <Send size={14} />
                  Envoyer
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
