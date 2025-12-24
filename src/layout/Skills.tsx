// src/sections/Skills.tsx
export const Skills = () => (
  <section className="w-full p-10 md:p-20 bg-gray-50">
    <h2 className="text-s font-black uppercase tracking-[0.5em] mb-20 text-gray-500">
      🛠️ Compétences
    </h2>
    <div className="flex flex-col md:flex-row justify-between gap-16">
      <div className="flex-1 border-t-4 border-black pt-6">
        <h4 className="font-black uppercase mb-10 text-2xl italic">Dév. Web</h4>
        <div className="flex flex-wrap gap-4 text-xl font-bold">
          {/* Les éléments se répartissent horizontalement puis reviennent à la ligne */}
          {["HTML5", "PHP", "React", "Laravel", "Python", "MySQL"].map((s) => (
            <span
              key={s}
              className="after:content-['/'] after:ml-4 last:after:content-none"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 border-t-4 border-black pt-6">
        <h4 className="font-black uppercase mb-10 text-2xl italic">
          Design & Outils
        </h4>
        <ul className="space-y-4 text-xl font-bold">
          <li>Figma / Photoshop / Illustrator</li>
          <li>VS Code / Github</li>
          <li className="text-gray-400 underline decoration-black">
            Anglais (B2)
          </li>
        </ul>
      </div>
    </div>
  </section>
);
