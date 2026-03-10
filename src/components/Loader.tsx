import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PERSONAL } from "../config/personal";

// Durée totale du loader : STEP_MS * 100 + EXIT_DELAY_MS ≈ 2s
const STEP_MS = 15;
const EXIT_DELAY_MS = 500;

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

export const Loader = ({ setLoading }: LoaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), EXIT_DELAY_MS);
          return 100;
        }
        return prev + 1;
      });
    }, STEP_MS);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center overflow-hidden">
      {/* Rideau du haut */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black"
      />

      {/* Rideau du bas */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
      />

      {/* Compteur */}
      <motion.div
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="relative z-201 flex flex-col items-center">
        <span className="text-[15vw] font-black text-white leading-none tracking-tighter">
          {count}%
        </span>
        <div className="w-64 h-2 bg-white/20 mt-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            className="h-full bg-blue-600"
          />
        </div>
        <span className="text-white font-bold uppercase tracking-[0.5em] mt-8 text-sm">
          {PERSONAL.name}{" "}
          <span className="text-blue-600">© {new Date().getFullYear()}</span>
        </span>
      </motion.div>
    </div>
  );
};
