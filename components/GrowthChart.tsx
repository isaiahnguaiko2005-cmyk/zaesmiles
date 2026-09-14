"use client";

interface GrowthChartProps {
  history: { week: string; combined: number }[];
  target: number;
}

const WIDTH = 600;
const HEIGHT = 160;
const PAD_X = 8;
const PAD_TOP = 16;
const PAD_BOTTOM = 24;

export default function GrowthChart({ history, target }: GrowthChartProps) {
  const points = history.filter((h) => h.combined > 0);
  if (points.length < 2) return null;

  const max = Math.max(target, ...points.map((p) => p.combined));
  const plotW = WIDTH - PAD_X * 2;
  const plotH = HEIGHT - PAD_TOP - PAD_BOTTOM;

  const coords = points.map((p, i) => {
    const x = PAD_X + (i / (points.length - 1)) * plotW;
    const y = PAD_TOP + plotH - (p.combined / max) * plotH;
    return { x, y, ...p };
  });

  const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${HEIGHT - PAD_BOTTOM} L ${coords[0].x.toFixed(1)} ${HEIGHT - PAD_BOTTOM} Z`;

  const first = coords[0];
  const last = coords[coords.length - 1];

  return (
    <div className="px-5 pt-5 pb-2" style={{ borderBottom: "1px solid rgba(196,160,106,0.12)" }}>
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "rgba(245,240,232,0.55)" }}
        >
          Combined Followers Over Time
        </span>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        style={{ height: "auto" }}
        role="img"
        aria-label={`Combined follower growth from ${first.combined.toLocaleString()} to ${last.combined.toLocaleString()}, target ${target.toLocaleString()}`}
      >
        <defs>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#growthFill)" />
        <path d={linePath} fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {coords.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={i === coords.length - 1 ? 4 : 2.5}
            fill="var(--gold)"
          />
        ))}
      </svg>
      <div className="flex justify-between mt-1">
        <span className="font-outfit text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
          {first.week}
        </span>
        <span className="font-outfit text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
          {last.week}
        </span>
      </div>
    </div>
  );
}
