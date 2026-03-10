import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { ease } from "../lib/animations";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) ref.current.textContent = Math.round(value).toString();
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

export const Stats = () => {
  const { t } = useLang();

  return (
    <section className="w-full px-10 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {t.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease }}
            className={`group flex flex-col gap-4 py-10 md:py-0 ${
              i < t.stats.length - 1
                ? "border-b-2 md:border-b-0 md:border-r-2 border-black/10 md:pr-12"
                : ""
            } ${i > 0 ? "md:pl-12" : ""}`}>

            {/* Ligne décorative en haut */}
            <div className="w-8 h-0.75 bg-blue-600 group-hover:w-16 transition-all duration-500" />

            {/* Nombre */}
            <div className="flex items-end gap-1 leading-none">
              <span className="text-7xl md:text-8xl font-black tracking-tighter">
                <CountUp to={stat.value} />
              </span>
              <span className="text-4xl md:text-5xl font-black text-blue-600 mb-1">+</span>
            </div>

            {/* Label */}
            <span className="text-xs font-black uppercase tracking-[0.35em] opacity-40">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
