"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SectionSeam from "./SectionSeam";

export default function WorkWithMeTeaser() {
  return (
    <section className="relative py-20 lg:py-28" style={{ backgroundColor: "var(--cream2)" }}>
      <SectionSeam to="var(--ink)" />
      <Reveal className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--sage)" }}
        >
          For Brands
        </span>
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-4"
          style={{ color: "var(--ink)" }}
        >
          An engaged, mostly 18-34 audience that actually watches.
        </h2>
        <p
          className="font-outfit font-light leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(12,15,20,0.6)" }}
        >
          12.2K+ combined followers, 9.8M+ views in the last 30 days, and
          research-backed content that people share and come back to. Full
          numbers, audience breakdown, and what I offer are all in the media kit.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/partnerships"
            className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              backgroundColor: "var(--ink)",
              color: "var(--cream)",
              padding: "14px 28px",
              minHeight: "48px",
            }}
          >
            View Media Kit &rarr;
          </Link>
          <a
            href="mailto:isaiahnguaiko6@gmail.com"
            className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              border: "1px solid var(--ink)",
              color: "var(--ink)",
              padding: "14px 28px",
              minHeight: "48px",
            }}
          >
            Get in Touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
