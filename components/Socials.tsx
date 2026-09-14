"use client";

import React from "react";
import Reveal from "./Reveal";

type Platform = {
  name: string;
  handle: string;
  description: string;
  cta: string;
  href: string | null;
  iconKey: "instagram" | "tiktok" | "discord" | "youtube" | "spotify";
  highlight: boolean;
  disabled: boolean;
};

const platforms: Platform[] = [
  {
    name: "Instagram",
    handle: "@zae.smiles",
    description: "Daily content on social anxiety, psychology, and identity.",
    cta: "Follow on Instagram",
    href: "https://www.instagram.com/zae.smiles",
    iconKey: "instagram",
    highlight: false,
    disabled: false,
  },
  {
    name: "TikTok",
    handle: "@zae.smiles0",
    description: "Short-form videos. Skits. Social psychology content.",
    cta: "Follow on TikTok",
    href: "https://www.tiktok.com/@zae.smiles0",
    iconKey: "tiktok",
    highlight: false,
    disabled: false,
  },
  {
    name: "Discord",
    handle: "UNMONITORED Community",
    description:
      "Free server. Drop in, ask questions, meet people working on the same thing.",
    cta: "Join the Discord",
    href: "https://discord.gg/vWhm6srVqz",
    iconKey: "discord",
    highlight: true,
    disabled: false,
  },
  {
    name: "YouTube",
    handle: "Coming soon",
    description: "Long-form video. Deeper breakdowns than the shorts and reels. Coming soon.",
    cta: "Coming Soon",
    href: null,
    iconKey: "youtube",
    highlight: false,
    disabled: true,
  },
  {
    name: "Spotify",
    handle: "Coming soon",
    description: "Long-form podcast on social anxiety and life advice for people who feel stuck. Coming soon.",
    cta: "Coming Soon",
    href: null,
    iconKey: "spotify",
    highlight: false,
    disabled: true,
  },
];

export default function Socials() {
  return (
    <section
      id="socials"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-4"
          style={{ color: "var(--cream)" }}
        >
          Platforms
        </h2>
        <p
          className="font-outfit font-light mb-12"
          style={{ color: "rgba(245,240,232,0.55)" }}
        >
          Follow along wherever you spend your time.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <SocialCard platform={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialCard({ platform }: { platform: Platform }) {
  const { name, handle, description, cta, href, iconKey, highlight, disabled } = platform;

  const baseStyle: React.CSSProperties = {
    backgroundColor: "var(--ink2)",
    border: highlight
      ? "1px solid var(--gold)"
      : "1px solid rgba(245,240,232,0.12)",
    transition: "border-color 0.2s ease, transform 0.2s ease",
    opacity: disabled ? 0.5 : 1,
  };

  const inner = (
    <div className="p-6 flex flex-col" style={{ minHeight: "200px" }}>
      <div className="flex items-start gap-4 mb-4">
        <div style={{ color: highlight ? "var(--gold)" : "var(--cream)" }}>
          <PlatformIcon iconKey={iconKey} />
        </div>
        <div>
          <div
            className="font-cormorant text-xl font-semibold"
            style={{ color: "var(--cream)" }}
          >
            {name}
          </div>
          <div
            className="font-outfit text-xs"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            {handle}
          </div>
        </div>
      </div>
      <p
        className="font-outfit font-light text-sm leading-relaxed flex-1 mb-6"
        style={{ color: "rgba(245,240,232,0.7)" }}
      >
        {description}
      </p>
      <span
        className="font-outfit text-sm font-medium uppercase tracking-wide"
        style={{
          color: highlight
            ? "var(--gold)"
            : disabled
            ? "rgba(245,240,232,0.3)"
            : "var(--cream)",
        }}
      >
        {cta} {!disabled && "→"}
      </span>
    </div>
  );

  if (disabled || !href) {
    return (
      <div
        className="rounded-none cursor-default"
        style={baseStyle}
        aria-disabled="true"
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-none focus:outline-none"
      style={baseStyle}
      aria-label={`${cta} — opens in new tab`}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--gold)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = highlight ? "var(--gold)" : "rgba(245,240,232,0.12)";
        el.style.transform = "translateY(0)";
      }}
      onFocus={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.outline = "2px solid var(--gold)";
        el.style.outlineOffset = "3px";
      }}
      onBlur={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.outline = "none";
      }}
    >
      {inner}
    </a>
  );
}

function PlatformIcon({ iconKey }: { iconKey: Platform["iconKey"] }) {
  switch (iconKey) {
    case "instagram":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case "tiktok":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
        </svg>
      );
    case "discord":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      );
    case "youtube":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case "spotify":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.719-.66 13.379 1.561.361.181.54.78.362 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.72-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      );
  }
}
