/**
 * Remplit l'Excel BTS SIO (contenu) puis applique le style avec ExcelJS.
 * Usage : npx tsx scripts/fill-excel.ts
 *
 * RÈGLE : le contenu des cellules existantes n'est jamais modifié.
 * Seuls les styles (fill, font, alignment, border) et les dimensions
 * (largeurs colonnes, hauteurs lignes) sont appliqués.
 */
import ExcelJS from "exceljs";
import { SYNTHESE, COMPETENCES, SYNTHESE_INFO } from "../src/data/synthese";

const EXCEL_PATH =
  "public/8-1 - BTS SIO - 2025 - Annexe 8-1 - Epreuve E5 - Tableau de synthèse.xlsx";

// ════════════════════════════════════════════════════════════════════════════
// PALETTE
// ════════════════════════════════════════════════════════════════════════════
const navy   = "1E3A5F";
const blue   = "1D4ED8";
const blue50 = "EFF6FF";
const slate50= "F8FAFC";
const white  = "FFFFFF";
const zinc50 = "FAFAFA";
const borderLight = "E5E7EB";
const borderMid   = "D1D5DB";
const borderBlue  = "93C5FD";

// ExcelJS border helper
const thin = (rgb: string): Partial<ExcelJS.Border> => ({
  style: "thin",
  color: { argb: `FF${rgb}` },
});

const medium = (rgb: string): Partial<ExcelJS.Border> => ({
  style: "medium",
  color: { argb: `FF${rgb}` },
});

const allThin = (rgb: string): Partial<ExcelJS.Borders> => ({
  top: thin(rgb), bottom: thin(rgb), left: thin(rgb), right: thin(rgb),
});

// ════════════════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════════════════
async function main() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(EXCEL_PATH);
  const ws = workbook.worksheets[0];

  // ─── 1. REMPLIR LE CONTENU ─────────────────────────────────────────────
  // (sans modifier ce qui est déjà rempli par le fichier source)
  function fill(addr: string, value: string) {
    const cell = ws.getCell(addr);
    if (!cell.value) cell.value = value;
  }

  fill("F3", `${SYNTHESE_INFO.nom}`);
  fill("A4", `Centre de formation : ${SYNTHESE_INFO.centre}`);
  fill("H4", "✓ SLAM");
  fill("A5", `Adresse URL du portfolio : ${SYNTHESE_INFO.portfolio}`);

  const SECTION_START = [8, 19, 27]; // numéros de ligne 1-based

  SYNTHESE.forEach((section, si) => {
    const startRow = SECTION_START[si];
    if (!startRow) return;

    section.items.forEach((item, ii) => {
      const rowNum = startRow + ii;
      const docs = item.docs.map((d) => `  › ${d}`).join("\n");

      const cellA = ws.getCell(`A${rowNum}`);
      if (!cellA.value) cellA.value = `${item.title}\n${docs}`;

      const cellB = ws.getCell(`B${rowNum}`);
      if (!cellB.value) cellB.value = item.periode;

      const cols = ["C", "D", "E", "F", "G", "H"];
      COMPETENCES.forEach((comp, ci) => {
        const cellC = ws.getCell(`${cols[ci]}${rowNum}`);
        if (cellC.value === null || cellC.value === undefined || cellC.value === "") {
          const checked = item.competences[comp.code as keyof typeof item.competences];
          cellC.value = checked ? "✓" : "";
        }
      });
    });
  });

  // ─── 2. LARGEURS DE COLONNES ────────────────────────────────────────────
  ws.getColumn("A").width = 52;
  ws.getColumn("B").width = 22;
  ["C", "D", "E", "F", "G", "H"].forEach((c) => {
    ws.getColumn(c).width = 22;
  });

  // ─── 3. STYLES PAR ZONE ─────────────────────────────────────────────────

  // Helper : applique un style à une cellule (contenu préservé)
  function s(
    addr: string,
    opts: {
      bg?: string;
      bold?: boolean;
      italic?: boolean;
      sz?: number;
      color?: string;
      h?: ExcelJS.Alignment["horizontal"];
      v?: ExcelJS.Alignment["vertical"];
      wrap?: boolean;
      border?: Partial<ExcelJS.Borders>;
    },
  ) {
    const cell = ws.getCell(addr);

    if (opts.bg)
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${opts.bg}` } };

    cell.font = {
      name: "Calibri",
      size: opts.sz ?? 10,
      bold: opts.bold ?? false,
      italic: opts.italic ?? false,
      color: { argb: `FF${opts.color ?? "111827"}` },
    };

    cell.alignment = {
      horizontal: opts.h ?? "left",
      vertical: opts.v ?? "middle",
      wrapText: opts.wrap ?? false,
    };

    if (opts.border) cell.border = opts.border as ExcelJS.Borders;
  }

  // Applique le même style à plusieurs cellules
  function sRow(row: number, cols: string[], opts: Parameters<typeof s>[1]) {
    cols.forEach((c) => s(`${c}${row}`, opts));
  }

  const ALL  = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const COMP = ["C", "D", "E", "F", "G", "H"];

  // ── Ligne 1 : Titre ──────────────────────────────────────────────────────
  ws.getRow(1).height = 32;
  sRow(1, ALL, {
    bg: navy, bold: true, sz: 14, color: "FFFFFF",
    h: "center", v: "middle",
    border: { bottom: medium(borderBlue) },
  });

  // ── Ligne 2 : Sous-titre ─────────────────────────────────────────────────
  ws.getRow(2).height = 24;
  sRow(2, ALL, {
    bg: blue, bold: true, sz: 12, color: "FFFFFF",
    h: "center", v: "middle",
    border: { bottom: thin(borderBlue) },
  });

  // ── Lignes 3-5 : Infos candidat ──────────────────────────────────────────
  [3, 4, 5].forEach((r) => {
    ws.getRow(r).height = 22;
    sRow(r, ALL, {
      bg: zinc50, bold: false, sz: 10, color: "1F2937",
      v: "middle", wrap: true,
      border: { bottom: thin(borderLight), top: thin(borderLight), left: thin(borderLight), right: thin(borderLight) },
    });
  });

  // ── Ligne 6 : En-têtes compétences ───────────────────────────────────────
  ws.getRow(6).height = 52;
  s("A6", {
    bg: navy, bold: true, sz: 10, color: "FFFFFF",
    h: "center", v: "middle", wrap: true,
    border: allThin(borderBlue),
  });
  s("B6", {
    bg: navy, bold: true, sz: 10, color: "FFFFFF",
    h: "center", v: "middle", wrap: true,
    border: allThin(borderBlue),
  });
  COMP.forEach((c) => {
    s(`${c}6`, {
      bg: blue, bold: true, sz: 10, color: "FFFFFF",
      h: "center", v: "middle", wrap: true,
      border: allThin(borderBlue),
    });
  });

  // ── Ligne 7 : Sous-critères ───────────────────────────────────────────────
  ws.getRow(7).height = 200;
  s("A7", {
    bg: blue50, italic: true, sz: 9, color: "1E40AF",
    h: "left", v: "top", wrap: true,
    border: allThin(borderBlue),
  });
  s("B7", {
    bg: blue50, sz: 9, color: "4B5563",
    h: "center", v: "top", wrap: true,
    border: allThin(borderBlue),
  });
  COMP.forEach((c) => {
    s(`${c}7`, {
      bg: blue50, italic: true, sz: 9, color: "1E40AF",
      h: "left", v: "top", wrap: true,
      border: allThin(borderBlue),
    });
  });

  // ── Sections + données ────────────────────────────────────────────────────
  type RowDef = { type: "section"; row: number } | { type: "data"; row: number; alt: boolean };

  const rows: RowDef[] = [
    { type: "section", row: 8 },
    { type: "data",    row: 9,  alt: false },
    { type: "data",    row: 10, alt: false },
    { type: "section", row: 19 },
    { type: "data",    row: 20, alt: false },
    { type: "data",    row: 21, alt: false },
    { type: "data",    row: 22, alt: false },
    { type: "section", row: 27 },
    { type: "data",    row: 28, alt: false },
  ];

  rows.forEach((def) => {
    if (def.type === "section") {
      ws.getRow(def.row).height = 20;
      s(`A${def.row}`, {
        bg: slate50, bold: true, sz: 10, color: "111827",
        h: "left", v: "middle",
        border: { left: medium(blue), bottom: thin(borderMid), top: thin(borderMid), right: thin(borderLight) },
      });
      ["B", ...COMP].forEach((c) => {
        s(`${c}${def.row}`, {
          bg: slate50, sz: 10, color: "6B7280",
          h: "center", v: "middle",
          border: { bottom: thin(borderMid), top: thin(borderMid), left: thin(borderLight), right: thin(borderLight) },
        });
      });
    } else {
      const bg = white;
      ws.getRow(def.row).height = 80;

      s(`A${def.row}`, {
        bg, sz: 11, color: "111827",
        h: "left", v: "top", wrap: true,
        border: { ...allThin(borderLight), left: medium(borderBlue) },
      });
      s(`B${def.row}`, {
        bg, sz: 10, color: "374151",
        h: "center", v: "middle",
        border: allThin(borderLight),
      });
      COMP.forEach((c) => {
        s(`${c}${def.row}`, {
          bg, bold: true, sz: 14, color: blue,
          h: "center", v: "middle",
          border: allThin(borderLight),
        });
      });
    }
  });

  // ─── 4. SAUVEGARDER ──────────────────────────────────────────────────────
  await workbook.xlsx.writeFile(EXCEL_PATH);
  console.log(`✓ Excel mis à jour avec styles : ${EXCEL_PATH}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
