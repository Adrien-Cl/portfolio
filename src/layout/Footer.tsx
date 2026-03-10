import { useLang } from "../context/LanguageContext";
import { PERSONAL } from "../config/personal";

interface FooterProps {
  isDark: boolean;
}

export const Footer = ({ isDark }: FooterProps) => {
  const { t } = useLang();

  return (
    <footer
      className={`p-10 md:p-20 border-t-2 ${
        isDark
          ? "border-white/10 bg-[#0a0a0a]"
          : "border-black bg-black text-white"
      }`}>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none whitespace-pre-line">
            {t.footer.cta}
          </h2>
          <div className="pt-6 space-y-2 text-xl font-bold">
            <a
              href={`tel:${PERSONAL.phone.raw}`}
              className="hover:text-blue-400 transition-colors">
              {PERSONAL.phone.display}
            </a>
            <br />
            <a
              href={`mailto:${PERSONAL.email}`}
              className="hover:text-blue-400 transition-colors">
              {PERSONAL.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end text-right">
          <div className="text-sm font-black uppercase tracking-[0.3em] opacity-50">
            {t.footer.location}
          </div>
          <div className="space-y-2">
            <p className="font-bold uppercase text-2xl tracking-tighter">
              {PERSONAL.name}
            </p>
            <p className="opacity-40 text-xs italic">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
