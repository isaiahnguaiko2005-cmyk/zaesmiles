export const revalidate = 21600;

// Sheet is shared "Anyone with the link can view"
// GID 1252941834 = Sheet1 (the only sheet)
// Log format: each row is one weekly snapshot (Date, IG_Followers, TikTok_Followers, Revenue, Jaguar_Fund).
// Add a new row every week with that week's totals — the weekly deltas below are
// calculated automatically by diffing the latest row against the one before it.
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1M0bcC-FM5gzoBbo4QRpI35zj7EPt3XbaAVKeDRLeQI0/export?format=csv&gid=1252941834";

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      result.push(cur);
      cur = "";
    } else {
      cur += char;
    }
  }
  result.push(cur);
  return result;
}

function parseNum(value: string | undefined): number {
  if (!value) return 0;
  return parseFloat(value.replace(/,/g, "")) || 0;
}

// Scans backward from `beforeIndex` for the most recent row where this
// column was actually filled in. Returns null if none found.
function lastNonBlank(rows: string[][], col: number, beforeIndex: number): number | null {
  for (let i = beforeIndex; i >= 0; i--) {
    const raw = rows[i][col];
    if (raw && raw.trim() !== "") return parseNum(raw);
  }
  return null;
}

// Builds a full carried-forward series for a column across every row, so a
// chart doesn't dip to 0 on weeks where that cell was left blank.
function buildSeries(rows: string[][], col: number): number[] {
  const series: number[] = [];
  let last = 0;
  for (const row of rows) {
    const raw = row[col];
    if (raw && raw.trim() !== "") last = parseNum(raw);
    series.push(last);
  }
  return series;
}

// If this week's cell for a metric is left blank, carry forward the last
// filled value instead of showing 0 — and report no change (delta 0) since
// nothing was actually updated this week.
function computeMetric(rows: string[][], col: number): { value: number; delta: number } {
  const lastIndex = rows.length - 1;
  const raw = rows[lastIndex][col];
  const filledThisWeek = Boolean(raw && raw.trim() !== "");
  const priorValue = lastNonBlank(rows, col, lastIndex - 1);

  if (filledThisWeek) {
    const value = parseNum(raw);
    return { value, delta: priorValue !== null ? value - priorValue : 0 };
  }
  return { value: priorValue ?? 0, delta: 0 };
}

export async function GET() {
  try {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 21600 },
      headers: { Accept: "text/csv" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();

    const dataRows = text
      .trim()
      .split("\n")
      .slice(1) // drop header row
      .map(parseCSVLine)
      // Only keep rows where at least one of the actual stat columns
      // (IG/TikTok/Revenue/Jaguar) has a value — ignores blank placeholder
      // rows that only have a week number filled in.
      .filter((r) => r.slice(1, 5).some((cell) => cell.trim() !== ""));

    if (dataRows.length === 0) throw new Error("No data rows");

    const ig = computeMetric(dataRows, 1);
    const tiktok = computeMetric(dataRows, 2);
    const revenue = computeMetric(dataRows, 3);
    const jaguar = computeMetric(dataRows, 4);

    const igSeries = buildSeries(dataRows, 1);
    const tiktokSeries = buildSeries(dataRows, 2);
    const history = dataRows.map((row, i) => ({
      week: row[0]?.trim() || String(i + 1),
      combined: igSeries[i] + tiktokSeries[i],
    }));

    return Response.json({
      ig_followers: ig.value,
      tiktok_followers: tiktok.value,
      revenue: revenue.value,
      jaguar_fund: jaguar.value,
      ig_delta: ig.delta,
      tiktok_delta: tiktok.delta,
      revenue_delta: revenue.delta,
      jaguar_delta: jaguar.delta,
      history,
    });
  } catch {
    return Response.json({ error: true }, { status: 500 });
  }
}
