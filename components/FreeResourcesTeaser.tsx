"use client";

import Link from "next/link";
import guides from "@/data/guides.json";

const featuredIds = [
  "fifteen-psychology-hacks",
  "the-mitch-effect",
  "unmonitored-chapter-1",
  "the-acceptance-premise",
];

const featured = featuredIds
  .map((id) => guides.find((g) => g.id === id))
  .filter(Boolean) as (typeof guides)[number][];

export default function FreeResourcesTeaser() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4 text-center"
          style={{ color: "var(--gold)" }}
        >
          Free Resources
        </span>
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-4 text-center"
          style={{ color: "var(--cream)" }}
        >
          Everything I know, free. No catch.
        </h2>
        <p
          className="font-outfit font-light text-center max-w-xl mx-auto mb-14"
          style={{ color: "rgba(245,240,232,0.6)" }}
        >
          Guides built on real psychology research, not vague motivation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {featured.map((guide) => (
            <Link
              key={guide.id}
              href="/guides"
              className="p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--ink2)",
                border: guide.leadsTo
                  ? "1px solid var(--gold)"
                  : "1px solid rgba(196,160,106,0.25)",
              }}
            >
              {guide.popular && (
                <span
                  className="font-outfit text-[10px] uppercase tracking-widest font-medium mb-3 inline-block w-fit px-2 py-0.5"
                  style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
                >
                  Popular
                </span>
              )}
              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium mb-3"
                style={{ color: "var(--sage)" }}
              >
                {guide.category}
              </span>
              <h3
                className="font-cormorant font-semibold text-lg mb-2 leading-snug"
                style={{ color: "var(--cream)" }}
              >
                {guide.title}
              </h3>
              <p
                className="font-outfit font-light text-sm leading-relaxed flex-1 mb-5"
                style={{ color: "rgba(245,240,232,0.6)" }}
              >
                {guide.description}
              </p>
              <span
                className="font-outfit text-xs font-medium uppercase tracking-wide"
                style={{ color: "var(--gold)" }}
              >
                Download Free &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/guides"
            className="font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2 transition-all duration-200"
            style={{ color: "var(--gold)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            }}
          >
            See All Free Guides &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
