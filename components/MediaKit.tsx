"use client";

import Reveal from "./Reveal";
import CountUpNumber from "./CountUpNumber";

const partners = ["OLOV Trimmer", "Based Bodyworks", "Crispy Halal"];

const stats: { value: string; label: string; icon: "people" | "eye" | "heart" | "trending" }[] = [
  { value: "12.2K+", label: "Combined Followers", icon: "people" },
  { value: "9.8M+", label: "Views, Last 30 Days", icon: "eye" },
  { value: "19%", label: "Engagement Rate", icon: "heart" },
];

const ageBreakdown = [
  { label: "13-17", pct: 19.2 },
  { label: "18-24", pct: 40.5 },
  { label: "25-34", pct: 29.7 },
  { label: "35-44", pct: 6.0 },
  { label: "45+", pct: 4.6 },
];

const genderBreakdown = [
  { platform: "Instagram", male: 82.2, female: 17.8 },
  { platform: "TikTok", male: 72, female: 28 },
];

const topCountries = [
  { label: "United States", pct: 55.5 },
  { label: "United Kingdom", pct: 5.7 },
  { label: "India", pct: 4.4 },
  { label: "Philippines", pct: 1.8 },
  { label: "Canada", pct: 1.2 },
];

const offers: { title: string; description: string; icon: "video" | "star" | "link" | "package" }[] = [
  {
    title: "Sponsored Reel / TikTok",
    description: "One story-driven video, cross-posted to Instagram and TikTok.",
    icon: "video",
  },
  {
    title: "Story / Feed Feature",
    description: "A dedicated feature placement across Stories or the main feed.",
    icon: "star",
  },
  {
    title: "Link in Bio Placement",
    description: "Your link featured in bio across platforms for an agreed window.",
    icon: "link",
  },
  {
    title: "Product Collab / UGC",
    description: "Raw or edited content built around your product, for you to repost or run as ads.",
    icon: "package",
  },
];

const whyWorkWithMe = [
  "13%+ engagement rate on Instagram, well above the typical creator benchmark",
  "Content built to actually perform — a proven ability to go viral, not just post and hope",
  "A track record of driving real sales for brand partners, not just impressions",
  "Fast turnaround and direct communication, no agency layer",
];

function StatIcon({ kind }: { kind: "people" | "eye" | "heart" | "trending" }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (kind) {
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      );
    case "trending":
      return (
        <svg {...common}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
  }
}

function OfferIcon({ kind }: { kind: "video" | "star" | "link" | "package" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (kind) {
    case "video":
      return (
        <svg {...common}>
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "package":
      return (
        <svg {...common}>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
  }
}

function Bar({ label, pct, color = "var(--gold)" }: { label: string; pct: number; color?: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-outfit text-sm" style={{ color: "var(--ink)" }}>
          {label}
        </span>
        <span className="font-outfit text-sm font-medium" style={{ color: "var(--ink)" }}>
          {pct}%
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(12,15,20,0.08)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function MediaKit() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--gold)" }}
        >
          Media Kit
        </span>
        <h1
          className="font-cormorant font-semibold text-3xl lg:text-5xl mb-4"
          style={{ color: "var(--ink)" }}
        >
          Partner With Mitch
        </h1>
        <p
          className="font-outfit font-light leading-relaxed mb-14 max-w-2xl"
          style={{ color: "rgba(12,15,20,0.6)", fontSize: "1.0625rem" }}
        >
          I create research-backed short-form content on social anxiety, dating
          psychology, and conversation, for an engaged, mostly 18-34 audience
          that actually watches, shares, and comes back.
        </p>

        {/* Hero CTA pair */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="mailto:isaiahnguaiko6@gmail.com"
            className="inline-flex items-center justify-center gap-2 font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              backgroundColor: "var(--ink)",
              color: "var(--cream)",
              padding: "14px 28px",
              minHeight: "48px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(12,15,20,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Get in Touch &rarr;
          </a>
          <a
            href="https://canva.link/cqq4b3dqwf0xrzm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              border: "1px solid var(--ink)",
              color: "var(--ink)",
              padding: "14px 28px",
              minHeight: "48px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)";
              (e.currentTarget as HTMLElement).style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
            }}
          >
            View Portfolio
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <div
                className="p-6 text-center transition-transform duration-200 hover:-translate-y-1"
                style={{ backgroundColor: "var(--ink)", border: "1px solid rgba(196,160,106,0.3)" }}
              >
                <div className="flex justify-center mb-3" style={{ color: "var(--gold)" }}>
                  <StatIcon kind={stat.icon} />
                </div>
                <CountUpNumber
                  value={stat.value}
                  className="font-cormorant font-semibold mb-1 block"
                  style={{ color: "var(--gold)", fontSize: "2rem" }}
                />
                <div
                  className="font-outfit text-xs uppercase tracking-widest"
                  style={{ color: "rgba(245,240,232,0.6)" }}
                >
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Audience */}
        <h2
          className="font-cormorant font-semibold text-2xl lg:text-3xl mb-8"
          style={{ color: "var(--ink)" }}
        >
          Audience
        </h2>
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          <div>
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
              style={{ color: "var(--sage)" }}
            >
              Age (Instagram)
            </span>
            {ageBreakdown.map((a) => (
              <Bar key={a.label} label={a.label} pct={a.pct} />
            ))}
          </div>
          <div>
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
              style={{ color: "var(--sage)" }}
            >
              Gender
            </span>
            {genderBreakdown.map((g) => (
              <div key={g.platform} className="mb-5">
                <div
                  className="font-outfit text-xs font-medium mb-2"
                  style={{ color: "rgba(12,15,20,0.5)" }}
                >
                  {g.platform}
                </div>
                <Bar label="Men" pct={g.male} />
                <Bar label="Women" pct={g.female} color="var(--sage)" />
              </div>
            ))}
          </div>
          <div>
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
              style={{ color: "var(--sage)" }}
            >
              Top Countries
            </span>
            {topCountries.map((c) => (
              <Bar key={c.label} label={c.label} pct={c.pct} color="var(--sage)" />
            ))}
          </div>
        </div>

        {/* What I offer */}
        <h2
          className="font-cormorant font-semibold text-2xl lg:text-3xl mb-8"
          style={{ color: "var(--ink)" }}
        >
          What I Offer
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 60}>
              <div
                className="p-6 h-full transition-transform duration-200 hover:-translate-y-1"
                style={{ backgroundColor: "var(--ink)", border: "1px solid rgba(196,160,106,0.25)" }}
              >
                <div className="mb-4" style={{ color: "var(--gold)" }}>
                  <OfferIcon kind={offer.icon} />
                </div>
                <h3
                  className="font-cormorant font-semibold text-lg mb-2"
                  style={{ color: "var(--cream)" }}
                >
                  {offer.title}
                </h3>
                <p
                  className="font-outfit font-light text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.6)" }}
                >
                  {offer.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p
          className="font-outfit text-sm mb-20 -mt-14"
          style={{ color: "rgba(12,15,20,0.5)" }}
        >
          Rates depend on scope and usage rights &mdash; reach out for a quote.
        </p>

        {/* Why work with me */}
        <div
          className="p-8 lg:p-10 mb-20"
          style={{ backgroundColor: "var(--cream2)", border: "1px solid rgba(12,15,20,0.1)" }}
        >
          <h2
            className="font-cormorant font-semibold text-2xl lg:text-3xl mb-8"
            style={{ color: "var(--ink)" }}
          >
            Why Brands Work With Me
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whyWorkWithMe.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 font-outfit font-light text-sm leading-relaxed"
                style={{ color: "var(--ink)" }}
              >
                <span style={{ color: "var(--gold)" }} aria-hidden="true">
                  &#10003;
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Partners + portfolio */}
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--sage)" }}
        >
          Brand Partners
        </span>
        <div className="flex flex-wrap justify-center gap-3 mb-8 p-6" style={{ border: "1px solid rgba(12,15,20,0.1)" }}>
          {partners.map((partner) => (
            <div
              key={partner}
              className="font-outfit text-sm font-medium px-4 py-2"
              style={{
                backgroundColor: "var(--ink)",
                color: "var(--cream)",
                border: "1px solid var(--gold)",
              }}
            >
              {partner}
            </div>
          ))}
        </div>
        {/* TODO: swap for real logo images in a horizontal fading strip once
            asset files are provided (see conversation) — Rimbério removed
            per request, currency of the remaining three not yet reconfirmed. */}

        <div
          className="p-8 lg:p-10 mb-8"
          style={{ backgroundColor: "var(--ink2)", border: "1px solid var(--gold)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-3"
                style={{ color: "var(--gold)" }}
              >
                UGC Portfolio
              </span>
              <p className="font-outfit font-light" style={{ color: "rgba(245,240,232,0.7)" }}>
                View past brand work, content formats, and results.
              </p>
            </div>
            <a
              href="https://canva.link/cqq4b3dqwf0xrzm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus:outline-none flex-shrink-0"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--cream)",
                padding: "14px 28px",
                minHeight: "48px",
              }}
              aria-label="View UGC Portfolio — opens in new tab"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(196,160,106,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              View Portfolio &rarr;
            </a>
          </div>
        </div>

        {/* Email */}
        <div
          className="premium-glow p-10 lg:p-12 text-center"
          style={{ border: "1px solid var(--gold)", backgroundColor: "var(--ink)" }}
        >
          <div
            className="mx-auto mb-5 flex items-center justify-center rounded-full"
            style={{ width: "48px", height: "48px", border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </div>
          <span
            className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
            style={{ color: "var(--gold)" }}
          >
            Business Email
          </span>
          <a
            href="mailto:isaiahnguaiko6@gmail.com"
            className="font-cormorant font-semibold block mb-8 transition-colors focus:outline-none"
            style={{ color: "var(--cream)", fontSize: "clamp(1.35rem, 3.5vw, 2rem)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
          >
            isaiahnguaiko6@gmail.com
          </a>
          <a
            href="mailto:isaiahnguaiko6@gmail.com"
            className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus:outline-none"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--ink)",
              padding: "14px 28px",
              minHeight: "48px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(196,160,106,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Email Me &rarr;
          </a>
          <div className="mt-6 space-y-1">
            <p className="font-outfit font-light text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>
              For brand partnerships, coaching inquiries, and collaborations.
            </p>
            <p className="font-outfit font-light text-sm" style={{ color: "rgba(245,240,232,0.35)" }}>
              Response within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
