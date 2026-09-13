"use client";

import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import { getProjectDay } from "../lib/projectDay";

interface StatsData {
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
  ig_followers: 0,
  tiktok_followers: 0,
  revenue: 0,
  jaguar_fund: 0,
  ig_delta: 0,
  tiktok_delta: 0,
  revenue_delta: 0,
  jaguar_delta: 0,
};

export default function TrackerSection() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const day = getProjectDay();

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => {
        setStats(data.error ? FALLBACK : data);
      })
      .catch(() => setStats(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--ink)" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
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
            day={day}
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
    </section>
  );
}
