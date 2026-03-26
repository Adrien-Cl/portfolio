/**
 * Génère l'Excel BTS SIO à partir du template officiel.
 * Usage : npx tsx scripts/fill-excel.ts
 *
 * Stratégie :
 *  - On lit le template vierge (template-bts.xlsx) → styles officiels préservés
 *  - On remplit le contenu depuis synthese.ts
 *  - On applique uniquement l'alignement/wrap sur les lignes de données
 *  - On sauvegarde dans le fichier de rendu final
 */
import ExcelJS from "exceljs";
import { SYNTHESE, COMPETENCES, SYNTHESE_INFO } from "../src/data/synthese";

const TEMPLATE_PATH = "public/template-bts.xlsx";
const OUTPUT_PATH   =
  "public/8-1 - BTS SIO - 2025 - Annexe 8-1 - Epreuve E5 - Tableau de synthèse - Adrien Clavreul.xlsx";

// Bordures telles qu'elles sont dans le template (noir, pas de couleur)
const thin   = (): Partial<ExcelJS.Border> => ({ style: "thin" });
const medium = (): Partial<ExcelJS.Border> => ({ style: "medium" });

async function main() {
  // ─── 1. CHARGER LE TEMPLATE ──────────────────────────────────────────────
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(TEMPLATE_PATH);
  const ws = workbook.worksheets[0];

  // ─── 2. REMPLIR LE CONTENU ───────────────────────────────────────────────
  ws.getCell("A3").value = `NOM et prénom : ${SYNTHESE_INFO.nom}`;
  ws.getCell("F3").value = `N° candidat : ${SYNTHESE_INFO.numeroCandidat}`;
  ws.getCell("A4").value = `Centre de formation : ${SYNTHESE_INFO.centre}`;
  ws.getCell("H4").value = "✓ SLAM";
  ws.getCell("A5").value = `Adresse URL du portfolio : ${SYNTHESE_INFO.portfolio}`;

  // Sections → lignes de données
  const SECTION_START = [9, 20, 28]; // première ligne de données de chaque section (1-based)

  SYNTHESE.forEach((section, si) => {
    const startRow = SECTION_START[si];
    if (!startRow) return;

    section.items.forEach((item, ii) => {
      const rowNum = startRow + ii;
      const docs = item.docs.map((d) => `  › ${d}`).join("\n");

      ws.getCell(`A${rowNum}`).value = `${item.title}\n${docs}`;
      ws.getCell(`B${rowNum}`).value = item.periode;

      const cols = ["C", "D", "E", "F", "G", "H"];
      COMPETENCES.forEach((comp, ci) => {
        const checked = item.competences[comp.code as keyof typeof item.competences];
        ws.getCell(`${cols[ci]}${rowNum}`).value = checked ? "✓" : "";
      });
    });
  });

  // ─── 3. LARGEURS (identiques au template) ────────────────────────────────
  ws.getColumn("A").width = 70.43;
  ws.getColumn("B").width = 10.86;
  ["C", "D", "E", "F", "G", "H"].forEach((c) => {
    ws.getColumn(c).width = 18.71;
  });

  // ─── 4. STYLE DES LIGNES DE DONNÉES ──────────────────────────────────────
  // Le template a déjà les bons styles pour les lignes 1-8, 19, 27.
  // On applique uniquement l'alignement et les polices sur les lignes remplies.
  const DATA_ROWS = [9, 10, 20, 21, 22, 28];

  DATA_ROWS.forEach((r) => {
    ws.getRow(r).height = 75;

    // Colonne A : réalisation (texte multiligne, aligné en haut à gauche)
    const cellA = ws.getCell(`A${r}`);
    cellA.font      = { name: "Calibri", size: 10 };
    cellA.alignment = { horizontal: "left", vertical: "top", wrapText: true };
    cellA.border    = {
      top: thin(), bottom: thin(),
      left: medium(), right: thin(),
    };

    // Colonne B : période (centré)
    const cellB = ws.getCell(`B${r}`);
    cellB.font      = { name: "Calibri", size: 10 };
    cellB.alignment = { horizontal: "center", vertical: "middle", wrapText: false };
    cellB.border    = { top: thin(), bottom: thin(), left: thin(), right: thin() };

    // Colonnes C-H : compétences (centré, bold pour le ✓)
    ["C", "D", "E", "F", "G", "H"].forEach((c) => {
      const cell = ws.getCell(`${c}${r}`);
      const isLast = c === "H";
      cell.font      = { name: "Calibri", size: 14, bold: true };
      cell.alignment = { horizontal: "center", vertical: "middle" };
      cell.border    = {
        top: thin(), bottom: thin(),
        left: thin(), right: isLast ? medium() : thin(),
      };
    });
  });

  // ─── 5. SAUVEGARDER ──────────────────────────────────────────────────────
  await workbook.xlsx.writeFile(OUTPUT_PATH);
  console.log(`✓ Excel généré : ${OUTPUT_PATH}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
