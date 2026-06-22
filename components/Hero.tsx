"use client";

import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";

interface StatsData {
  day: number;
  ig_followers: number;
  tiktok_followers: number;
  revenue: number;
  jaguar_fund: number;
  ig_delta: number;
  tiktok_delta: number;
  revenue_delta: number;
  jaguar_delta: number;
  error?: boolean;
}

const FALLBACK: StatsData = {
  day: 1,
  ig_followers: 0,
  tiktok_followers: 0,
  revenue: 0,
  jaguar_fund: 0,
  ig_delta: 0,
  tiktok_delta: 0,
  revenue_delta: 0,
  jaguar_delta: 0,
};

export default function Hero() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => {
        setStats(data.error ? FALLBACK : data);
      })
      .catch(() => setStats(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  const day = stats?.day ?? 1;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Grain overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.04 }}
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p
              className="font-outfit text-xs uppercase tracking-widest mb-6 font-medium"
              style={{ color: "var(--gold)" }}
            >
              Project 300K &mdash; Day {day} of 180
            </p>

            <h1
              className="font-cormorant font-semibold leading-tight mb-6"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              Stop monitoring yourself.
              <br />
              Start being in the room.
            </h1>

            <p
              className="font-outfit font-light leading-relaxed mb-10 max-w-lg"
              style={{
                color: "rgba(245,240,232,0.7)",
                fontSize: "1.0625rem",
              }}
            >
              I help young men rewire social anxiety at the root, not manage it.
              This is the 180-day public challenge where I build UNMONITORED
              into a real business while documenting every move.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://isaiah60.gumroad.com/l/xdnsp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider px-8 transition-all"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--cream)",
                  padding: "14px 32px",
                  minHeight: "48px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--cream)";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--gold)";
                  e.currentTarget.style.outlineOffset = "3px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                Get UNMONITORED &mdash; $37
              </a>

              <a
                href="https://discord.gg/vWhm6srVqz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-outfit font-light text-sm transition-all"
                style={{
                  color: "rgba(245,240,232,0.75)",
                  minHeight: "48px",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cream)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,232,0.75)")
                }
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--gold)";
                  e.currentTarget.style.outlineOffset = "3px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                Join the free Discord &rarr;
              </a>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="w-full">
            {loading ? (
              <div
                className="w-full rounded-sm animate-pulse"
                style={{
                  backgroundColor: "var(--ink2)",
                  border: "1px solid rgba(196,160,106,0.3)",
                  height: "340px",
                }}
                aria-label="Loading stats..."
              />
            ) : (
              <StatsCard
                day={stats?.day ?? 1}
                igFollowers={stats?.ig_followers ?? 0}
                tiktokFollowers={stats?.tiktok_followers ?? 0}
                revenue={stats?.revenue ?? 0}
                jaguarFund={stats?.jaguar_fund ?? 0}
                igDelta={stats?.ig_delta ?? 0}
                tiktokDelta={stats?.tiktok_delta ?? 0}
                revenueDelta={stats?.revenue_delta ?? 0}
                jaguarDelta={stats?.jaguar_delta ?? 0}
                loading={stats?.error}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
