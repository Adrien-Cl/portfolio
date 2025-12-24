import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animation du compteur de 0 à 100
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Laisse 500ms à 100% avant d'ouvrir
          return 100;
        }
        return prev + 1;
      });
    }, 15); // Vitesse du compteur

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 z-101 flex items-center justify-center overflow-hidden">
      {/* Rideau du Haut */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black"
      />

      {/* Rideau du Bas */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
      />

      {/* Chiffres du Compteur */}
      <motion.div
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="relative z-102 flex flex-col items-center"
      >
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
          Adrien Clavreul <span className="text-blue-600">© 2025</span>
        </span>
      </motion.div>
    </div>
  );
};
