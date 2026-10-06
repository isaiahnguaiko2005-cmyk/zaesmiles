"use client";

import { useEffect, useState } from "react";
import { LAUNCH_AT } from "@/lib/launch";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function useRemaining() {
  // null until mounted, so server and client render the same markup (no hydration mismatch).
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const target = new Date(LAUNCH_AT).getTime();
    const tick = () => setRemaining(target - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return remaining;
}

/** Big four-box countdown for the waitlist page. */
export default function LaunchCountdown() {
  const remaining = useRemaining();
  const live = remaining !== null && remaining <= 0;
  const p = parts(remaining ?? 0);
  const boxes: [string, number][] = [
    ["Days", p.days],
    ["Hours", p.hours],
    ["Minutes", p.minutes],
    ["Seconds", p.seconds],
  ];

  if (live) {
    return (
      <p
        role="status"
        className="font-cormorant font-semibold text-3xl"
        style={{ color: "var(--gold)" }}
      >
        Launch day is here.
      </p>
    );
  }

  return (
    <div
      role="timer"
      aria-label={
        remaining === null
          ? "Countdown to launch"
          : `${p.days} days, ${p.hours} hours, ${p.minutes} minutes until launch`
      }
      className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto"
    >
      {boxes.map(([label, value]) => (
        <div
          key={label}
          className="py-4 text-center"
          style={{
            backgroundColor: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(196,160,106,0.35)",
          }}
        >
          <div
            className="font-cormorant font-semibold text-3xl sm:text-4xl"
            style={{ color: "var(--gold)", fontVariantNumeric: "tabular-nums" }}
          >
            {remaining === null ? "--" : String(value).padStart(2, "0")}
          </div>
          <div
            className="font-outfit text-[0.65rem] uppercase tracking-widest mt-1"
            style={{ color: "rgba(245,240,232,0.6)" }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Compact "13d 4h 12m" text for banners. */
export function LaunchCountdownInline() {
  const remaining = useRemaining();
  if (remaining === null || remaining <= 0) return null;
  const p = parts(remaining);
  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {p.days}d {p.hours}h {p.minutes}m
    </span>
  );
}
