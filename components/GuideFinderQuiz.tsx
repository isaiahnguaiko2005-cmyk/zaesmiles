"use client";

import { useState } from "react";
import guides from "@/data/guides.json";
import SectionSeam from "./SectionSeam";

const OPTIONS: { label: string; guideId: string }[] = [
  { label: "I freeze up or hesitate before approaching people", guideId: "three-second-door" },
  { label: "I don't know how to make friends or feel confident socially", guideId: "fifteen-psychology-hacks" },
  { label: "I get anxious specifically on dates", guideId: "date-night-psychology-guide" },
  { label: "I overthink whether people actually like me", guideId: "the-acceptance-premise" },
  { label: "I want practical things to say to start conversations", guideId: "the-mitch-effect" },
];

export default function GuideFinderQuiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const result = selected ? guides.find((g) => g.id === selected) : null;

  return (
    <section className="relative py-20 lg:py-28" style={{ backgroundColor: "var(--cream2)" }}>
      <SectionSeam to="var(--ink)" />
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--sage)" }}
        >
          Guide Finder
        </span>
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-4"
          style={{ color: "var(--ink)" }}
        >
          {result ? "Here's your guide." : "What's actually getting in your way?"}
        </h2>
        {!result && (
          <p
            className="font-outfit font-light leading-relaxed mb-10"
            style={{ color: "rgba(12,15,20,0.6)" }}
          >
            Pick the one that&apos;s closest, and I&apos;ll point you to the right free guide, no email needed.
          </p>
        )}

        {!result ? (
          <div className="flex flex-col gap-3 text-left">
            {OPTIONS.map((opt) => (
              <button
                key={opt.guideId}
                onClick={() => setSelected(opt.guideId)}
                className="p-4 font-outfit text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none"
                style={{
                  backgroundColor: "var(--ink)",
                  color: "var(--cream)",
                  border: "1px solid rgba(196,160,106,0.25)",
                  minHeight: "48px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,160,106,0.25)";
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
                  (e.currentTarget as HTMLElement).style.outlineOffset = "2px";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.outline = "none";
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : (
          <div
            className="p-8 text-left quiz-result-in"
            style={{ backgroundColor: "var(--ink)", border: "1px solid var(--gold)" }}
          >
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-3"
              style={{ color: "var(--gold)" }}
            >
              {result.category}
            </span>
            <h3
              className="font-cormorant font-semibold text-2xl mb-3"
              style={{ color: "var(--cream)" }}
            >
              {result.title}
            </h3>
            <p
              className="font-outfit font-light text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              {result.description}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--ink)",
                  padding: "14px 28px",
                  minHeight: "48px",
                }}
              >
                {result.linkLabel} &rarr;
              </a>
              <button
                onClick={() => setSelected(null)}
                className="story-link font-outfit text-sm font-medium"
                style={{ color: "rgba(245,240,232,0.6)" }}
              >
                Try again
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
