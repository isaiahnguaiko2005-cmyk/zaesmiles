"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-x-clip"
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
            <div className="flex items-center justify-between mb-6">
              <p
                className="font-outfit text-xs uppercase tracking-widest font-medium"
                style={{ color: "var(--gold)" }}
              >
                Social Psychology Creator &amp; Educator
              </p>
              <div className="flex items-center gap-1">
                <a
                  href="https://www.instagram.com/zae.smiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram — opens in new tab"
                  className="flex items-center justify-center transition-colors"
                  style={{ width: "36px", height: "36px", color: "rgba(245,240,232,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
                  onFocus={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@zae.smiles0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok — opens in new tab"
                  className="flex items-center justify-center transition-colors"
                  style={{ width: "36px", height: "36px", color: "rgba(245,240,232,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
                  onFocus={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/vWhm6srVqz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord — opens in new tab"
                  className="flex items-center justify-center transition-colors"
                  style={{ width: "36px", height: "36px", color: "rgba(245,240,232,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
                  onFocus={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>

            <h1
              className="font-outfit font-semibold leading-tight mb-6"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
              }}
            >
              I&apos;m Mitch.
            </h1>

            <p
              className="font-outfit font-light leading-relaxed mb-10 max-w-lg"
              style={{
                color: "rgba(245,240,232,0.7)",
                fontSize: "1.0625rem",
              }}
            >
              <span className="lg:hidden">
                I teach real, actionable psychology for making friends and being
                social. Everything I know is right here, all free.
              </span>
              <span className="hidden lg:inline">
                I teach people how to make friends and be social using real,
                actionable human psychology, not vague confidence advice. If you
                freeze up around people you like, go blank in group
                conversations, or just want small talk to feel less like a
                performance, there&apos;s an actual mechanism behind it, and a
                fix. Everything I know is right here. All free.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--cream)",
                  padding: "14px 32px",
                  minHeight: "48px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--ink)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(196,160,106,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--cream)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--gold)";
                  e.currentTarget.style.outlineOffset = "3px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                Free Guides &rarr;
              </Link>

              <a
                href="https://discord.gg/vWhm6srVqz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--cream)",
                  padding: "14px 32px",
                  minHeight: "48px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--ink)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(196,160,106,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--cream)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--gold)";
                  e.currentTarget.style.outlineOffset = "3px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                Join the Free Discord &rarr;
              </a>
            </div>

            <Link
              href="/ask"
              className="inline-flex items-center gap-2 font-outfit font-medium text-base mt-5 transition-all duration-200"
              style={{ color: "var(--gold)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--cream)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--gold)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = "2px solid var(--gold)";
                e.currentTarget.style.outlineOffset = "3px";
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
              }}
            >
              Have a question? Ask Mitch &rarr;
            </Link>
          </div>

          {/* Right — profile photo + stats + CTA */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden group cursor-pointer"
              style={{
                border: "2px solid var(--gold)",
                boxShadow: "0 0 0 8px rgba(196,160,106,0.06), 0 20px 50px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src="/mitch.png"
                alt="Mitch, creator of UNMONITORED"
                fill
                unoptimized
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 35%, rgba(245,240,232,0.45) 50%, transparent 65%)",
                }}
              />
            </div>

            <div className="flex gap-10 mt-6">
              <div className="text-center">
                <div
                  className="font-cormorant font-semibold"
                  style={{ color: "var(--gold)", fontSize: "1.75rem" }}
                >
                  200M+
                </div>
                <div
                  className="font-outfit text-xs uppercase tracking-widest mt-1"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  Total Views
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-cormorant font-semibold"
                  style={{ color: "var(--gold)", fontSize: "1.75rem" }}
                >
                  10K+
                </div>
                <div
                  className="font-outfit text-xs uppercase tracking-widest mt-1"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  Followers
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://drive.google.com/file/d/1q8mP5kMepsgSYg8Ay0lNjye1uUa4LTZ9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider text-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--ink)",
                  border: "1px solid var(--gold)",
                  padding: "14px 24px",
                  minHeight: "48px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(196,160,106,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--ink)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--gold)";
                  e.currentTarget.style.outlineOffset = "3px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                Free Conversation Formula (Mitch Effect)
              </a>

              <Link
                href="/about"
                className="story-link font-outfit text-sm transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.75)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--cream)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.75)";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--gold)";
                  e.currentTarget.style.outlineOffset = "3px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                My Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
