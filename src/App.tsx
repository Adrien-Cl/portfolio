import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Parcours } from "./sections/Parcours";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { SyntheseTable } from "./sections/SyntheseTable";
import { Veille } from "./sections/Veille";
import { Contact } from "./sections/Contact";
import { PROJECTS } from "./data";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  function handleToggleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    const { clientX: x, clientY: y } = e;
    document.documentElement.style.setProperty("--toggle-x", `${x}px`);
    document.documentElement.style.setProperty("--toggle-y", `${y}px`);
    if (!document.startViewTransition) { setIsDark(v => !v); return; }
    document.startViewTransition(() => { flushSync(() => setIsDark(v => !v)); });
  }

  function handleOpenProject(title: string) {
    const idx = PROJECTS.findIndex(p => p.title === title);
    if (idx === -1) return;
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setSelectedProject(idx), 300);
  }

  return (
    <div className={isDark ? "dark" : ""} style={{ backgroundColor: "var(--color-bg)", minHeight: "100dvh" }}>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>
        <Hero />
        <About />
        <Parcours />
        <Projects selected={selectedProject} setSelected={setSelectedProject} />
        <Skills />
        <SyntheseTable onOpenProject={handleOpenProject} />
        <Veille />
        <Contact />
      </motion.main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
