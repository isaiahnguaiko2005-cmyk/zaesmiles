"use client";

import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--sage)" }}
        >
          A Bit About Me
        </span>
        <p
          className="font-outfit font-light text-lg lg:text-xl leading-relaxed mb-6"
          style={{ color: "var(--ink)" }}
        >
          I started posting because I saw a gap: everyone talked about confidence
          like it was a personality trait. It isn&apos;t. Now I&apos;m building
          UNMONITORED and running Project 300K, a public 183-day challenge with
          a live tracker, a savings goal, and nothing edited out.
        </p>
        <Link
          href="/about"
          className="font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2 transition-all duration-200"
          style={{ color: "var(--gold)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--gold)";
          }}
        >
          Read the full story &rarr;
        </Link>
      </div>
    </section>
  );
}
