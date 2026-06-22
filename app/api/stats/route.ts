export const revalidate = 21600;

// Sheet is shared "Anyone with the link can view"
// GID 1252941834 = Sheet1 (the only sheet)
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1M0bcC-FM5gzoBbo4QRpI35zj7EPt3XbaAVKeDRLeQI0/export?format=csv&gid=1252941834";

export async function GET() {
  try {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 21600 },
      headers: { "Accept": "text/csv" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const rows = text.trim().split("\n").map((r) => r.split(","));
    const data = rows[1]; // row 2 = values
    if (!data || data.length < 9) throw new Error("Bad data");
    return Response.json({
      day: parseInt(data[0]) || 0,
      ig_followers: parseInt(data[1]) || 0,
      tiktok_followers: parseInt(data[2]) || 0,
      revenue: parseFloat(data[3]) || 0,
      jaguar_fund: parseFloat(data[4]) || 0,
      ig_delta: parseInt(data[5]) || 0,
      tiktok_delta: parseInt(data[6]) || 0,
      revenue_delta: parseFloat(data[7]) || 0,
      jaguar_delta: parseFloat(data[8]) || 0,
    });
  } catch {
    return Response.json({ error: true }, { status: 500 });
  }
}
