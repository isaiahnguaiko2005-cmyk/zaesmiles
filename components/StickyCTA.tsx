"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't tell people to go to Free Guides while they're already there.
  if (pathname === "/guides") return null;
  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-40 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className="flex items-center gap-1 pl-1 pr-1"
        style={{
          backgroundColor: "var(--ink2)",
          border: "1px solid var(--gold)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        <Link
          href="/guides"
          className="font-outfit text-xs font-medium uppercase tracking-wide transition-colors duration-200"
          style={{ color: "var(--cream)", padding: "12px 16px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--gold)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--cream)";
          }}
        >
          Free Guides &rarr;
        </Link>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="flex items-center justify-center transition-colors duration-200 focus:outline-none"
          style={{ width: "36px", height: "36px", color: "rgba(245,240,232,0.4)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--cream)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.4)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
