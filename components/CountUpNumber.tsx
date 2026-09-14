"use client";

import { useEffect, useRef, useState } from "react";

// Parses strings like "200M+", "12.2K+", "19%*", "10K+" into a numeric
// target plus the leading/trailing decoration to preserve on display.
function parseValue(raw: string): { target: number; prefix: string; suffix: string; decimals: number } {
  const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
  if (!match) return { target: 0, prefix: "", suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { target: parseFloat(numStr), prefix, suffix, decimals };
}

export default function CountUpNumber({
  value,
  duration = 1200,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string | null>(null);
  const { target, prefix, suffix, decimals } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (prefersReduced) {
          setDisplay(value);
          return;
        }

        let raf: number;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          setDisplay(prefix + current.toFixed(decimals) + suffix);
          if (progress < 1) raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className} style={style} aria-label={value}>
      {display ?? prefix + (0).toFixed(decimals) + suffix}
    </span>
  );
}
