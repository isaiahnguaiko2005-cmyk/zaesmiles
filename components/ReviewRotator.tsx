"use client";

import { useEffect, useState } from "react";

export type RotatorItem = { text: string; source?: string };

const STAGGER_MS = 3200;
const OFFSET_MS = 1000;
const FADE_MS = 300;

function Slot({
  items,
  index,
  visible,
  dim,
}: {
  items: RotatorItem[];
  index: number;
  visible: boolean;
  dim?: boolean;
}) {
  const item = items[index];
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}>
      <p
        className="font-outfit font-light text-sm leading-relaxed"
        style={{ color: dim ? "rgba(245,240,232,0.65)" : "rgba(245,240,232,0.8)" }}
      >
        {item.text}
      </p>
      {item.source && (
        <span
          className="font-outfit text-xs mt-1 block"
          style={{ color: dim ? "rgba(245,240,232,0.35)" : "rgba(245,240,232,0.45)" }}
        >
          {item.source}
        </span>
      )}
    </div>
  );
}

export default function ReviewRotator({
  items,
  label,
}: {
  items: RotatorItem[];
  label?: string;
}) {
  const showTwo = items.length > 1;
  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(showTwo ? 1 % items.length : 0);
  const [visibleA, setVisibleA] = useState(true);
  const [visibleB, setVisibleB] = useState(true);

  useEffect(() => {
    if (items.length <= 1) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const step = showTwo ? 2 : 1;

    const advance = (
      setIndex: (fn: (p: number) => number) => void,
      setVisible: (v: boolean) => void
    ) => {
      if (reduced) {
        setIndex((p) => (p + step) % items.length);
        return;
      }
      setVisible(false);
      setTimeout(() => {
        setIndex((p) => (p + step) % items.length);
        setVisible(true);
      }, FADE_MS);
    };

    const intervalA = setInterval(() => advance(setIndexA, setVisibleA), STAGGER_MS);
    let intervalB: ReturnType<typeof setInterval> | undefined;
    let timeoutB: ReturnType<typeof setTimeout> | undefined;
    if (showTwo) {
      timeoutB = setTimeout(() => {
        advance(setIndexB, setVisibleB);
        intervalB = setInterval(() => advance(setIndexB, setVisibleB), STAGGER_MS);
      }, OFFSET_MS);
    }

    return () => {
      clearInterval(intervalA);
      if (intervalB) clearInterval(intervalB);
      if (timeoutB) clearTimeout(timeoutB);
    };
  }, [items.length, showTwo]);

  if (items.length === 0) return null;

  return (
    <div
      aria-live="polite"
      style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "16px" }}
    >
      {label && (
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-2"
          style={{ color: "var(--gold)" }}
        >
          {label}
        </span>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Slot items={items} index={indexA} visible={visibleA} />
        {showTwo && (
          <div style={{ borderTop: "1px solid rgba(196,160,106,0.2)", paddingTop: "8px" }}>
            <Slot items={items} index={indexB} visible={visibleB} dim />
          </div>
        )}
      </div>
    </div>
  );
}
