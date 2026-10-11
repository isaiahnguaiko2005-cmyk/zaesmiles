"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "zs-sticky-cta-dismissed";

export default function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // A dismissal holds for the rest of the visit instead of reappearing on every page.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {}
  }, []);

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

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <div
      className="fixed z-40 transition-[opacity,transform] duration-300 ease-out"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <div
        className="flex items-center pl-1"
        style={{
          backgroundColor: "var(--ink2)",
          border: "1px solid var(--gold)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        <Link
          href="/guides"
          tabIndex={visible ? 0 : -1}
          className="link-cream font-outfit text-xs font-medium uppercase tracking-wide inline-flex items-center min-h-[44px] px-4"
        >
          Free Guides&nbsp;&rarr;
        </Link>
        <button
          type="button"
          onClick={dismiss}
          tabIndex={visible ? 0 : -1}
          aria-label="Hide the Free Guides shortcut"
          className="link-muted flex items-center justify-center w-11 h-11"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
