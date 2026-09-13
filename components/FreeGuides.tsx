"use client";

import { useMemo, useState } from "react";
import guidesData from "../data/guides.json";

type Guide = {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  linkLabel: string;
  codeword?: string;
  dateAdded?: string;
  keywords?: string[];
  leadsTo?: string;
  popular?: boolean;
};

const rawGuides = guidesData as Guide[];

const newestId = rawGuides.reduce<{ id: string; date: string } | null>((newest, g) => {
  if (!g.dateAdded) return newest;
  if (!newest || g.dateAdded > newest.date) return { id: g.id, date: g.dateAdded };
  return newest;
}, null)?.id;

// Product-adjacent guides lead the grid, popular guides come right after, then the rest newest first.
function tier(g: Guide): number {
  return g.leadsTo ? 2 : g.popular ? 1 : 0;
}

const guidesByNewest = [...rawGuides].sort((a, b) => {
  const aTier = tier(a);
  const bTier = tier(b);
  if (aTier !== bTier) return bTier - aTier;
  return (b.dateAdded ?? "").localeCompare(a.dateAdded ?? "");
});

// Popular guides lead, product-adjacent guides next, then newest first.
const guidesByPopular = [...rawGuides].sort((a, b) => {
  const aPop = a.popular ? 1 : 0;
  const bPop = b.popular ? 1 : 0;
  if (aPop !== bPop) return bPop - aPop;
  const aLeads = a.leadsTo ? 1 : 0;
  const bLeads = b.leadsTo ? 1 : 0;
  if (aLeads !== bLeads) return bLeads - aLeads;
  return (b.dateAdded ?? "").localeCompare(a.dateAdded ?? "");
});

type SortMode = "newest" | "popular";

export default function FreeGuides() {
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("newest");

  const sorted = sortMode === "popular" ? guidesByPopular : guidesByNewest;

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return sorted;
    return sorted.filter((g) => {
      const haystack = [
        g.title,
        g.category,
        g.description,
        g.codeword ?? "",
        ...(g.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query, sorted]);

  return (
    <section
      id="free-guides"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-2"
          style={{ color: "var(--ink)" }}
        >
          Free Guides
        </h2>
        <p
          className="font-outfit font-light mb-8"
          style={{ color: "rgba(12,15,20,0.5)" }}
        >
          New guide drops every week. All free. Search by topic or keyword.
        </p>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4 max-w-2xl">
          <div className="relative flex-1">
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "rgba(12,15,20,0.4)" }}
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: dating, hesitation, blueprint, solo..."
              aria-label="Search free guides"
              className="w-full font-outfit font-light text-sm focus:outline-none"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--ink)",
                border: "1px solid rgba(138,158,140,0.5)",
                padding: "13px 14px 13px 42px",
                minHeight: "48px",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,158,140,0.5)";
              }}
            />
          </div>

          <select
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as SortMode)}
            aria-label="Sort free guides"
            className="font-outfit font-light text-sm focus:outline-none sm:w-48"
            style={{
              backgroundColor: "var(--cream)",
              color: "var(--ink)",
              border: "1px solid rgba(138,158,140,0.5)",
              padding: "13px 14px",
              minHeight: "48px",
            }}
            onFocus={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,158,140,0.5)";
            }}
          >
            <option value="newest">Newest first</option>
            <option value="popular">Most popular</option>
          </select>
        </div>

        <div
          className="font-outfit text-xs uppercase tracking-widest font-medium mb-6"
          style={{ color: "var(--sage)" }}
          aria-live="polite"
        >
          {filtered.length === 0
            ? "No matches"
            : `${filtered.length} ${filtered.length === 1 ? "guide" : "guides"}${
                query.trim() ? ` matching "${query.trim()}"` : ""
              }`}
        </div>

        {filtered.length === 0 ? (
          <div
            className="p-8 text-center font-outfit font-light"
            style={{
              border: "1px solid rgba(138,158,140,0.4)",
              color: "rgba(12,15,20,0.5)",
            }}
          >
            No guides match that yet. Try another word, or follow{" "}
            <a
              href="https://www.instagram.com/zae.smiles"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)" }}
            >
              @zae.smiles
            </a>{" "}
            for the latest drops.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((guide) => (
              <GuideCard key={guide.id} guide={guide} isNewest={guide.id === newestId} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function GuideCard({ guide, isNewest }: { guide: Guide; isNewest?: boolean }) {
  const leadsToProduct = Boolean(guide.leadsTo);
  return (
    <div
      className="p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: leadsToProduct ? "rgba(196,160,106,0.08)" : "var(--cream)",
        borderTop: leadsToProduct ? "1px solid var(--gold)" : "1px solid rgba(138,158,140,0.4)",
        borderRight: leadsToProduct ? "1px solid var(--gold)" : "1px solid rgba(138,158,140,0.4)",
        borderBottom: leadsToProduct ? "1px solid var(--gold)" : "1px solid rgba(138,158,140,0.4)",
        borderLeft: leadsToProduct
          ? "3px solid var(--gold)"
          : isNewest
          ? "1px solid var(--gold)"
          : "1px solid rgba(138,158,140,0.4)",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderTopColor = "var(--gold)";
        el.style.borderRightColor = "var(--gold)";
        el.style.borderBottomColor = "var(--gold)";
        el.style.borderLeftColor = "var(--gold)";
        el.style.boxShadow = "0 12px 28px rgba(196,160,106,0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        const defaultColor = leadsToProduct || isNewest ? "var(--gold)" : "rgba(138,158,140,0.4)";
        el.style.borderTopColor = defaultColor;
        el.style.borderRightColor = defaultColor;
        el.style.borderBottomColor = defaultColor;
        el.style.borderLeftColor = defaultColor;
        el.style.boxShadow = "none";
      }}
    >
      <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--sage)" }}
        >
          {guide.category}
        </span>
        <div className="flex items-center gap-1.5">
          {guide.popular && (
            <span
              className="font-outfit text-xs font-medium px-2 py-0.5"
              style={{
                backgroundColor: "var(--sage)",
                color: "var(--cream)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.65rem",
              }}
            >
              Popular
            </span>
          )}
          {guide.leadsTo && (
            <span
              className="font-outfit text-xs font-medium px-2 py-0.5"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.65rem",
              }}
            >
              From {guide.leadsTo}
            </span>
          )}
          {isNewest && (
            <span
              className="font-outfit text-xs font-medium px-2 py-0.5"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--ink)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.65rem",
              }}
            >
              New
            </span>
          )}
        </div>
      </div>
      <h4
        className="font-cormorant font-semibold text-xl mb-2"
        style={{ color: "var(--ink)" }}
      >
        {guide.title}
      </h4>
      <p
        className="font-outfit font-light text-sm leading-relaxed flex-1 mb-5"
        style={{ color: "rgba(12,15,20,0.65)" }}
      >
        {guide.description}
      </p>
      <a
        href={guide.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2 focus:outline-none"
        style={{ color: "var(--ink)" }}
        aria-label={`${guide.linkLabel} — ${guide.title}`}
        onFocus={(e) => {
          (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
          (e.currentTarget as HTMLElement).style.outlineOffset = "3px";
        }}
        onBlur={(e) => {
          (e.currentTarget as HTMLElement).style.outline = "none";
        }}
      >
        {guide.linkLabel} →
      </a>
    </div>
  );
}
