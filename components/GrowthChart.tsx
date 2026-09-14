"use client";

import { useState } from "react";

interface GrowthChartProps {
  history: { week: string; ig: number; tiktok: number }[];
}

const WIDTH = 600;
const HEIGHT = 220;
const PAD_LEFT = 44;
const PAD_RIGHT = 12;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;
const TICKS = 4;

function niceMax(n: number): number {
  if (n <= 0) return 100;
  const magnitude = Math.pow(10, Math.floor(Math.log10(n)));
  const residual = n / magnitude;
  let niceResidual = 1;
  if (residual > 1) niceResidual = 2;
  if (residual > 2) niceResidual = 5;
  if (residual > 5) niceResidual = 10;
  return niceResidual * magnitude;
}

export default function GrowthChart({ history }: GrowthChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const points = history.filter((h) => h.ig > 0 || h.tiktok > 0);
  if (points.length < 2) return null;

  const rawMin = Math.min(...points.map((p) => Math.min(p.ig, p.tiktok)));
  const rawMax = Math.max(...points.map((p) => Math.max(p.ig, p.tiktok)));
  const min = Math.floor(rawMin * 0.9);
  const max = niceMax(rawMax * 1.05);

  const plotW = WIDTH - PAD_LEFT - PAD_RIGHT;
  const plotH = HEIGHT - PAD_TOP - PAD_BOTTOM;

  const xFor = (i: number) => PAD_LEFT + (i / (points.length - 1)) * plotW;
  const yFor = (v: number) => PAD_TOP + plotH - ((v - min) / (max - min)) * plotH;

  const igPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(i).toFixed(1)} ${yFor(p.ig).toFixed(1)}`).join(" ");
  const tiktokPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(i).toFixed(1)} ${yFor(p.tiktok).toFixed(1)}`).join(" ");

  const tickValues = Array.from({ length: TICKS + 1 }, (_, i) => min + ((max - min) * i) / TICKS);
  const formatTick = (v: number) => (v >= 1000 ? (v / 1000).toFixed(1) + "K" : Math.round(v).toString());
  const formatFull = (v: number) => v.toLocaleString("en-US");

  const active = activeIndex !== null ? points[activeIndex] : null;
  const activeX = activeIndex !== null ? xFor(activeIndex) : 0;

  // Keep tooltip from clipping off either edge of the chart.
  const tooltipWidth = 118;
  const tooltipX = Math.min(Math.max(activeX - tooltipWidth / 2, PAD_LEFT), WIDTH - PAD_RIGHT - tooltipWidth);

  return (
    <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(196,160,106,0.12)" }}>
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "rgba(245,240,232,0.55)" }}
        >
          Follower Growth
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-outfit text-xs" style={{ color: "rgba(245,240,232,0.6)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--gold)", display: "inline-block" }} />
            Instagram
          </span>
          <span className="flex items-center gap-1.5 font-outfit text-xs" style={{ color: "rgba(245,240,232,0.6)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--sage)", display: "inline-block" }} />
            TikTok
          </span>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        style={{ height: "auto", touchAction: "manipulation" }}
        role="img"
        aria-label={`Instagram followers from ${points[0].ig} to ${points[points.length - 1].ig}, TikTok followers from ${points[0].tiktok} to ${points[points.length - 1].tiktok}`}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Y-axis gridlines + labels */}
        {tickValues.map((v, i) => {
          const y = yFor(v);
          return (
            <g key={i}>
              <line x1={PAD_LEFT} y1={y} x2={WIDTH - PAD_RIGHT} y2={y} stroke="rgba(196,160,106,0.12)" strokeWidth="1" />
              <text x={PAD_LEFT - 8} y={y + 3} textAnchor="end" fontSize="9" fill="rgba(245,240,232,0.4)" fontFamily="Outfit, sans-serif">
                {formatTick(v)}
              </text>
            </g>
          );
        })}

        {/* X-axis labels */}
        {points.map((p, i) => (
          <text
            key={p.week}
            x={xFor(i)}
            y={HEIGHT - 8}
            textAnchor="middle"
            fontSize="9"
            fill="rgba(245,240,232,0.4)"
            fontFamily="Outfit, sans-serif"
          >
            Wk {p.week}
          </text>
        ))}

        {/* Active week vertical guide */}
        {active && (
          <line
            x1={activeX}
            y1={PAD_TOP}
            x2={activeX}
            y2={HEIGHT - PAD_BOTTOM}
            stroke="rgba(245,240,232,0.2)"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
        )}

        <path d={tiktokPath} fill="none" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={igPath} fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {points.map((p, i) => (
          <g key={`pts-${i}`}>
            {/* Invisible, generous hit target so hover/tap works well past just the dot */}
            <rect
              x={xFor(i) - (plotW / (points.length - 1)) / 2}
              y={PAD_TOP}
              width={plotW / (points.length - 1)}
              height={plotH}
              fill="transparent"
              tabIndex={0}
              role="button"
              aria-label={`Week ${p.week}: Instagram ${formatFull(p.ig)}, TikTok ${formatFull(p.tiktok)}`}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex((cur) => (cur === i ? null : cur))}
              onTouchStart={() => setActiveIndex(i)}
              style={{ cursor: "pointer", outline: "none" }}
            />
            <circle cx={xFor(i)} cy={yFor(p.tiktok)} r={activeIndex === i ? 5 : i === points.length - 1 ? 4 : 2.5} fill="var(--sage)" style={{ pointerEvents: "none", transition: "r 150ms ease-out" }} />
            <circle cx={xFor(i)} cy={yFor(p.ig)} r={activeIndex === i ? 5 : i === points.length - 1 ? 4 : 2.5} fill="var(--gold)" style={{ pointerEvents: "none", transition: "r 150ms ease-out" }} />
          </g>
        ))}

        {/* Tooltip */}
        {active && (
          <g style={{ pointerEvents: "none" }}>
            <rect
              x={tooltipX}
              y={PAD_TOP}
              width={tooltipWidth}
              height={44}
              rx="2"
              fill="var(--ink)"
              stroke="var(--gold)"
              strokeWidth="1"
            />
            <text x={tooltipX + 8} y={PAD_TOP + 14} fontSize="9" fill="rgba(245,240,232,0.5)" fontFamily="Outfit, sans-serif">
              Week {active.week}
            </text>
            <text x={tooltipX + 8} y={PAD_TOP + 27} fontSize="10" fill="var(--gold)" fontFamily="Outfit, sans-serif" fontWeight="600">
              IG {formatFull(active.ig)}
            </text>
            <text x={tooltipX + 8} y={PAD_TOP + 39} fontSize="10" fill="var(--sage)" fontFamily="Outfit, sans-serif" fontWeight="600">
              TikTok {formatFull(active.tiktok)}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
