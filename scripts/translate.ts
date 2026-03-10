/**
 * Génère automatiquement src/i18n/en.ts à partir de src/i18n/fr.ts
 * via l'API MyMemory (gratuite, sans inscription).
 *
 * Usage :
 *   npm run translate
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fr } from "../src/i18n/fr.ts";

// On exclut les dates pures (ex: "2025 — 2027") pour éviter des appels inutiles.
const SKIP = /^\d{4}(\s*[—–-]\s*\d{4})?$/;

// Corrections appliquées après traduction automatique.
// Ajouter ici toute traduction incorrecte détectée.
const CORRECTIONS: Record<string, string> = {
  "Training":                          "Education",
  "Alternation":                       "Apprenticeship",
  "Year of Experience":                "Years of experience",
  "my projects":                       "See my projects",
  "Download Resume/CV":                "Download CV",
  "Chest Management":                  "Vault Management",
  "LET'S GET STARTED\nA PROJECT.":    "LET'S START\nA PROJECT.",
  "GRAPHIC DESIGN":                    "Graphic Design & UI",
  "High-school diploma ":              "High School Diploma",
  "Calculus":                          "Mathematical Analysis",
  "Computer Management":               "IT Infrastructure Management",
  "Certificate of Superior Technician in IT Services to Organizations.":
    "Higher National Certificate in IT Services for Organisations.",
};

function applyCorrections(obj: Record<string | number, unknown>): void {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === "string") {
      obj[key] = CORRECTIONS[val] ?? val;
    } else if (typeof val === "object" && val !== null) {
      applyCorrections(val as Record<string | number, unknown>);
    }
  }
}

type Path = (string | number)[];

function collectStrings(obj: unknown, path: Path = []): { path: Path; text: string }[] {
  if (typeof obj === "string") {
    return SKIP.test(obj.trim()) ? [] : [{ path, text: obj }];
  }
  if (typeof obj !== "object" || obj === null) return [];
  if (Array.isArray(obj)) {
    return obj.flatMap((item, i) => collectStrings(item, [...path, i]));
  }
  return Object.entries(obj as Record<string, unknown>).flatMap(([key, val]) =>
    collectStrings(val, [...path, key])
  );
}

function setPath(obj: Record<string | number, unknown>, path: Path, value: string) {
  let cur = obj;
  for (let i = 0; i < path.length - 1; i++) {
    cur = cur[path[i]] as Record<string | number, unknown>;
  }
  cur[path[path.length - 1]] = value;
}

async function translateOne(text: string): Promise<string> {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=fr|en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erreur MyMemory (${res.status})`);
  const data = (await res.json()) as { responseData: { translatedText: string }; responseStatus: number };
  if (data.responseStatus !== 200) throw new Error(`MyMemory : ${JSON.stringify(data)}`);
  return data.responseData.translatedText;
}

async function main() {
  const entries = collectStrings(fr);
  console.log(`🔤  ${entries.length} chaînes à traduire via MyMemory...`);

  const translated: string[] = [];
  for (let i = 0; i < entries.length; i++) {
    const result = await translateOne(entries[i].text);
    translated.push(result);
    process.stdout.write(`\r   ${i + 1}/${entries.length}`);
  }
  console.log("\n");

  const en = JSON.parse(JSON.stringify(fr)) as Record<string | number, unknown>;
  entries.forEach(({ path }, i) => setPath(en, path, translated[i]));
  applyCorrections(en);

  const output = `// AUTO-GENERATED — ne pas modifier manuellement.
// Lancer \`npm run translate\` pour regénérer depuis fr.ts.

import type { Fr } from "./fr";

export const en: Fr = ${JSON.stringify(en, null, 2)};
`;

  writeFileSync(resolve("src/i18n/en.ts"), output);
  console.log("✅  src/i18n/en.ts généré avec succès !");
}

main().catch((err: unknown) => {
  console.error("❌ ", err);
  process.exit(1);
});
