"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCardProps {
  day: number;
  igFollowers: number;
  tiktokFollowers: number;
  revenue: number;
  jaguarFund: number;
  igDelta: number;
  tiktokDelta: number;
  revenueDelta: number;
  jaguarDelta: number;
  loading?: boolean;
}

function useCountUp(target: number, duration: number = 800): number {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) {
      setValue(0);
      return;
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    startRef.current = null;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return value;
}

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

function formatDelta(n: number, format: "number" | "currency"): string {
  const abs = Math.abs(n);
  if (format === "currency") return "$" + abs.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return formatNumber(abs);
}

function CarMarkerIcon() {
  return (
    <svg width="16" height="10" viewBox="0 0 24 14" fill="none" aria-hidden="true">
      <path
        d="M2 10.5h1.2a2.3 2.3 0 0 0 4.4 0h8.8a2.3 2.3 0 0 0 4.4 0H22a1 1 0 0 0 1-1V7.2a1 1 0 0 0-.4-.8l-3.1-2.3-1.3-2.3A1 1 0 0 0 17.3 1H4a1 1 0 0 0-1 1v6.5H2a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1Z"
        fill="var(--gold)"
      />
      <circle cx="6.6" cy="10.5" r="1.6" fill="var(--ink)" stroke="var(--gold)" />
      <circle cx="17.4" cy="10.5" r="1.6" fill="var(--ink)" stroke="var(--gold)" />
    </svg>
  );
}

function StatBox({
  label,
  value,
  delta,
  format = "number",
  isLeader,
  target,
  markerIcon,
}: {
  label: string;
  value: number;
  delta: number;
  format?: "number" | "currency";
  isLeader?: boolean;
  target?: number;
  markerIcon?: "car";
}) {
  const animated = useCountUp(value);
  const displayValue =
    format === "currency"
      ? "$" + animated.toLocaleString("en-US", { maximumFractionDigits: 0 })
      : formatNumber(animated);

  const pct = target ? Math.min((value / target) * 100, 100) : 0;
  const targetLabel =
    target && format === "currency" ? "$" + formatNumber(target) : target ? formatNumber(target) : "";

  return (
    <div className="p-4 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "rgba(245,240,232,0.55)" }}
        >
          {label}
        </span>
        {isLeader && (
          <span
            className="font-outfit text-xs"
            style={{ color: "var(--gold)" }}
            aria-label="Currently leading platform"
          >
            ● Leading
          </span>
        )}
      </div>
      <div
        className="font-cormorant text-3xl font-semibold"
        style={{ color: "var(--cream)" }}
        aria-label={`${label}: ${displayValue}`}
      >
        {displayValue}
      </div>
      {delta !== 0 && (
        <div
          className="font-outfit text-xs mt-1"
          style={{ color: "var(--sage)" }}
        >
          {delta > 0 ? "+" : "-"}
          {formatDelta(delta, format)} this week
        </div>
      )}
      {target && (
        <div className="mt-2">
          <div
            className="relative w-full h-1"
            style={{ backgroundColor: "rgba(196,160,106,0.15)", marginTop: markerIcon ? "8px" : 0 }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={target}
            aria-label={`${label} progress toward ${targetLabel}`}
          >
            <div
              className="h-full progress-fill"
              style={{ width: `${pct}%`, backgroundColor: "var(--gold)" }}
            />
            {markerIcon === "car" && (
              <div
                className="absolute"
                style={{
                  left: `${pct}%`,
                  bottom: "100%",
                  transform: "translateX(-50%)",
                  marginBottom: "1px",
                  transition: "left 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                aria-hidden="true"
              >
                <CarMarkerIcon />
              </div>
            )}
          </div>
          <div
            className="mt-1 font-outfit text-xs"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            {pct.toFixed(1)}% to {targetLabel}
          </div>
        </div>
      )}
    </div>
  );
}

const FOLLOWERS_TARGET = 300000;
const REVENUE_TARGET = 30000;
const JAGUAR_TARGET = 8400;

export default function StatsCard({
  day,
  igFollowers,
  tiktokFollowers,
  revenue,
  jaguarFund,
  igDelta,
  tiktokDelta,
  revenueDelta,
  jaguarDelta,
  loading,
}: StatsCardProps) {
  const totalDays = 183;
  const progress = Math.min((day / totalDays) * 100, 100);
  const igLeading = igFollowers >= tiktokFollowers;

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "var(--ink2)",
        border: "1px solid var(--gold)",
        boxShadow: "0 4px 32px rgba(196,160,106,0.08)",
      }}
      role="region"
      aria-label="Project 300K live tracker"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid rgba(196,160,106,0.2)" }}
      >
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--gold)" }}
        >
          Project 300K
        </span>
        <span
          className="font-outfit text-xs uppercase tracking-wider"
          style={{ color: "rgba(245,240,232,0.45)" }}
        >
          {loading ? "Updating..." : "Live Tracker"}
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="px-5 py-4"
        style={{ borderBottom: "1px solid rgba(196,160,106,0.12)" }}
      >
        <div className="flex justify-between mb-2">
          <span
            className="font-outfit text-sm"
            style={{ color: "rgba(245,240,232,0.8)" }}
          >
            Day {day} / {totalDays}
          </span>
          <span className="font-outfit text-sm" style={{ color: "var(--gold)" }}>
            {progress.toFixed(1)}%
          </span>
        </div>
        <div
          className="relative w-full h-1.5"
          style={{ backgroundColor: "rgba(196,160,106,0.15)" }}
          role="progressbar"
          aria-valuenow={day}
          aria-valuemin={0}
          aria-valuemax={totalDays}
          aria-label={`Day ${day} of ${totalDays}`}
        >
          <div
            className="h-full progress-fill"
            style={{ width: `${progress}%`, backgroundColor: "var(--gold)" }}
          />
          {/* Milestone ticks at 25/50/75% */}
          {[25, 50, 75].map((m) => (
            <div
              key={m}
              className="absolute top-0 bottom-0"
              style={{
                left: `${m}%`,
                width: "1px",
                backgroundColor: progress >= m ? "rgba(12,15,20,0.25)" : "rgba(245,240,232,0.2)",
              }}
              aria-hidden="true"
            />
          ))}
          {/* Current-position marker with a subtle pulse */}
          <div
            className="absolute hologram-ring"
            style={{
              left: `${progress}%`,
              top: "50%",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--gold)",
              boxShadow: "0 0 6px 1px rgba(196,160,106,0.7)",
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          />
        </div>
        <div
          className="mt-2 font-outfit text-xs"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          Started June 30, 2026 &bull; Ends December 30, 2026
        </div>
      </div>

      {/* Followers row: combined progress toward 300K */}
      <div>
        <div className="grid grid-cols-2">
          <div>
            <StatBox label="Instagram" value={igFollowers} delta={igDelta} isLeader={igLeading} />
          </div>
          <div>
            <StatBox label="TikTok" value={tiktokFollowers} delta={tiktokDelta} isLeader={!igLeading} />
          </div>
        </div>
        <div
          className="px-4 pb-4"
          style={{ borderBottom: "1px solid rgba(196,160,106,0.12)" }}
        >
          <CombinedFollowersBar
            igFollowers={igFollowers}
            tiktokFollowers={tiktokFollowers}
            target={FOLLOWERS_TARGET}
          />
        </div>
      </div>

      {/* Revenue + Jaguar row */}
      <div className="grid grid-cols-2">
        <div style={{ borderRight: "1px solid rgba(196,160,106,0.12)" }}>
          <StatBox
            label="Revenue"
            value={revenue}
            delta={revenueDelta}
            format="currency"
            target={REVENUE_TARGET}
          />
        </div>
        <div>
          <StatBox
            label="Jaguar Fund"
            value={jaguarFund}
            delta={jaguarDelta}
            format="currency"
            target={JAGUAR_TARGET}
            markerIcon="car"
          />
        </div>
      </div>
    </div>
  );
}

function CombinedFollowersBar({
  igFollowers,
  tiktokFollowers,
  target,
}: {
  igFollowers: number;
  tiktokFollowers: number;
  target: number;
}) {
  const total = igFollowers + tiktokFollowers;
  const pct = Math.min((total / target) * 100, 100);

  return (
    <div>
      <div
        className="w-full h-1"
        style={{ backgroundColor: "rgba(196,160,106,0.15)" }}
        role="progressbar"
        aria-valuenow={total}
        aria-valuemin={0}
        aria-valuemax={target}
        aria-label={`Combined followers progress toward ${formatNumber(target)}`}
      >
        <div
          className="h-full progress-fill"
          style={{ width: `${pct}%`, backgroundColor: "var(--gold)" }}
        />
      </div>
      <div
        className="mt-1 font-outfit text-xs"
        style={{ color: "rgba(245,240,232,0.4)" }}
      >
        {formatNumber(total)} / {formatNumber(target)} combined &middot; {pct.toFixed(1)}%
      </div>
    </div>
  );
}
