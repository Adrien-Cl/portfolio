import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { SkillsSlider } from "./components/SkillSlider";
import { Education } from "./layout/Education";
import { Experience } from "./layout/Experience";
import { Hero } from "./layout/Hero";
import { Projects } from "./layout/Projects";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  // 1. Gestion du Scroll : Remise à zéro après le loader
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isLoading]);

  // 2. Configuration de la barre de progression
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`${
        isDark ? "dark bg-[#0f0f0f] text-[#e5e5e5]" : "bg-white text-black"
      } min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500 selection:text-white`}
    >
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className={`fixed top-0 left-0 right-0 h-1 z-100 origin-left ${
              isDark ? "bg-blue-400" : "bg-black"
            }`}
            style={{ scaleX }}
          />

          <Navbar isDark={isDark} setIsDark={setIsDark} />

          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`w-full flex flex-col divide-y-2 ${
              isDark ? "divide-white/10" : "divide-black"
            }`}
          >
            <section id="home">
              <Hero />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <SkillsSlider isDark={isDark} />
            </section>

            <section id="education">
              <Education />
            </section>

            <footer
              className={`p-10 md:p-20 border-t-2 ${
                isDark
                  ? "border-white/10 bg-[#0a0a0a]"
                  : "border-black bg-black text-white"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none">
                    Travaillons <br /> ensemble.
                  </h2>
                  <div className="pt-6 space-y-2 text-xl font-bold">
                    <p>07.81.63.10.32</p>
                    <a
                      href="mailto:adrien.clavreul@gmail.com"
                      className="underline underline-offset-8 hover:text-blue-400 transition-colors"
                    >
                      adrien.clavreul@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end text-right">
                  <div className="text-sm font-black uppercase tracking-[0.3em] opacity-50">
                    Rennes • Full Remote
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold uppercase text-2xl tracking-tighter">
                      Adrien Clavreul
                    </p>
                    <p className="opacity-40 text-xs italic">
                      © 2025 — Étudiant BTS SIO SLAM
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </motion.main>
        </>
      )}
    </div>
  );
}

export default App;
