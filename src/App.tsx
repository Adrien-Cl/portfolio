import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Parcours } from "./sections/Parcours";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Veille } from "./sections/Veille";
import { Contact } from "./sections/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-blue-600 selection:text-white`}>

      {/* Barre de progression */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left bg-blue-600"
        style={{ scaleX }}
      />

      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="divide-y divide-zinc-100 dark:divide-zinc-800/40">
        <Hero />
        <About />
        <Parcours />
        <Projects />
        <Skills />
        <Veille />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}

export default App;
