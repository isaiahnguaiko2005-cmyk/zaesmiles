"use client";

import { useRef, useState } from "react";
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
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The clicked button disappears with each answer, so move focus to the
  // heading instead of dropping keyboard and screen-reader users at the top.
  const choose = (id: string | null) => {
    setSelected(id);
    requestAnimationFrame(() => headingRef.current?.focus({ preventScroll: true }));
  };

  return (
    <section className="relative py-20 lg:py-28" style={{ backgroundColor: "var(--cream2)" }}>
      <SectionSeam to="var(--ink)" />
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--sage-deep)" }}
        >
          Guide Finder
        </span>
        <h2
          ref={headingRef}
          tabIndex={-1}
          aria-live="polite"
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-4 outline-none"
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
                onClick={() => choose(opt.guideId)}
                type="button"
                className="quiz-option group flex items-center justify-between gap-4 p-4 font-outfit text-sm text-left active:scale-[0.99]"
                style={{ minHeight: "52px" }}
              >
                <span>{opt.label}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--gold)" }}
                >
                 &nbsp;&rarr;
                </span>
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
                className="btn btn-gold"
              >
                {result.linkLabel}&nbsp;&rarr;
              </a>
              <button
                type="button"
                onClick={() => choose(null)}
                className="story-link link-muted font-outfit text-sm font-medium py-2"
              >
                Pick a different answer
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
