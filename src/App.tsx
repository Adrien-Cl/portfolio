import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { SkillsSlider } from "./components/SkillSlider";
import { LanguageProvider, useLang } from "./context/LanguageContext";
import { scrollSpringConfig } from "./lib/animations";
import { Education } from "./layout/Education";
import { Experience } from "./layout/Experience";
import { Footer } from "./layout/Footer";
import { Hero } from "./layout/Hero";
import { Projects } from "./layout/Projects";

function AppContent() {
  const [isLoading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  useLang();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, scrollSpringConfig);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
      scaleX.jump(0);
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isLoading, scaleX]);

  return (
    <div
      className={`${
        isDark ? "dark bg-[#0f0f0f] text-[#e5e5e5]" : "bg-white text-black"
      } min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500 selection:text-white`}>

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Barre de progression au scroll */}
          <motion.div
            className={`fixed top-0 left-0 right-0 h-1 z-100 origin-left ${
              isDark ? "bg-blue-400" : "bg-black"
            }`}
            style={{ scaleX }}
          />

          <Navbar isDark={isDark} setIsDark={setIsDark} />

          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className={`w-full flex flex-col divide-y-2 ${
              isDark ? "divide-white/10" : "divide-black"
            }`}>
            <section id="home"><Hero /></section>
            <section id="projects"><Projects /></section>
            <section id="experience"><Experience /></section>
            <section id="skills"><SkillsSlider isDark={isDark} /></section>
            <section id="education"><Education /></section>
            <Footer isDark={isDark} />
          </motion.main>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
