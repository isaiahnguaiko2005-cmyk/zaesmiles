"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type Mode = "Podcast" | "Advice";

const MODES: Record<
  Mode,
  {
    eyebrow: string;
    heading: string;
    intro: string;
    placeholder: string;
    button: string;
    successNote: string;
  }
> = {
  Podcast: {
    eyebrow: "Coming Soon",
    heading: "Ask the Podcast",
    intro:
      "Long-form conversations on social anxiety and figuring life out, for anyone who feels stuck. Dropping on Spotify soon. The show isn't live yet, but you can send a question now and I'll answer real ones in the first episode.",
    placeholder: "What do you want answered in the first episode?",
    button: "Submit Podcast Question",
    successNote: "It might get answered in the first episode. Thanks for asking.",
  },
  Advice: {
    eyebrow: "Ask Me Anything",
    heading: "Ask for Advice",
    intro:
      "Stuck on something specific? Drop it here. This isn't about the site or my products, it's for real questions about social anxiety and getting unstuck. I read every one and answer the best in my content and in the Discord.",
    placeholder: "What are you actually stuck on right now?",
    button: "Send My Question",
    successNote:
      "I read every one. I answer the best in my content and the Discord, so join it for the fastest help.",
  },
};

export default function Ask() {
  const [mode, setMode] = useState<Mode>("Podcast");
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const copy = MODES[mode];

  function switchMode(next: Mode) {
    if (next === mode) return;
    setMode(next);
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (question.trim().length < 3) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/podcast-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, name, type: mode }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setQuestion("");
      setName("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="ask"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Copy */}
          <div>
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
              style={{ color: "var(--gold)" }}
            >
              {copy.eyebrow}
            </span>
            <h2
              className="font-cormorant font-semibold mb-6"
              style={{
                color: "var(--ink)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
              }}
            >
              {copy.heading}
            </h2>
            <p
              className="font-outfit font-light leading-relaxed"
              style={{ color: "rgba(12,15,20,0.7)", fontSize: "1rem" }}
            >
              {copy.intro}
            </p>
          </div>

          {/* Form */}
          <div
            className="p-8 lg:p-10"
            style={{
              backgroundColor: "var(--ink)",
              border: "1px solid var(--gold)",
            }}
          >
            {/* Mode toggle */}
            <div
              className="flex mb-6 p-1"
              role="tablist"
              aria-label="Question type"
              style={{ border: "1px solid rgba(245,240,232,0.2)" }}
            >
              {(["Podcast", "Advice"] as Mode[]).map((m) => {
                const active = m === mode;
                return (
                  <button
                    key={m}
                    role="tab"
                    aria-selected={active}
                    onClick={() => switchMode(m)}
                    className="flex-1 font-outfit text-sm font-medium uppercase tracking-wide transition-all focus:outline-none"
                    style={{
                      backgroundColor: active ? "var(--gold)" : "transparent",
                      color: active ? "var(--ink)" : "rgba(245,240,232,0.6)",
                      padding: "10px 12px",
                      minHeight: "44px",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
                      (e.currentTarget as HTMLElement).style.outlineOffset = "2px";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.outline = "none";
                    }}
                  >
                    {m === "Podcast" ? "Podcast Question" : "Advice Question"}
                  </button>
                );
              })}
            </div>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div
                  className="font-cormorant font-semibold text-2xl mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  Question sent.
                </div>
                <p
                  className="font-outfit font-light text-sm"
                  style={{ color: "rgba(245,240,232,0.7)" }}
                >
                  {copy.successNote}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-outfit text-sm font-medium uppercase tracking-wide focus:outline-none"
                  style={{ color: "var(--gold)" }}
                >
                  Submit another question →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="ask-question"
                  className="font-outfit text-xs uppercase tracking-widest font-medium block mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  Your Question
                </label>
                <textarea
                  id="ask-question"
                  required
                  minLength={3}
                  maxLength={2000}
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={copy.placeholder}
                  className="w-full font-outfit font-light text-sm p-4 mb-4 focus:outline-none"
                  style={{
                    backgroundColor: "var(--ink2)",
                    color: "var(--cream)",
                    border: "1px solid rgba(245,240,232,0.2)",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.2)";
                  }}
                />

                <label
                  htmlFor="ask-name"
                  className="font-outfit text-xs uppercase tracking-widest font-medium block mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  Name or Handle (Optional)
                </label>
                <input
                  id="ask-name"
                  type="text"
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="So I can shout you out"
                  className="w-full font-outfit font-light text-sm p-4 mb-6 focus:outline-none"
                  style={{
                    backgroundColor: "var(--ink2)",
                    color: "var(--cream)",
                    border: "1px solid rgba(245,240,232,0.2)",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.2)";
                  }}
                />

                {status === "error" && (
                  <p
                    className="font-outfit text-sm mb-4"
                    style={{ color: "#e0796b" }}
                    role="alert"
                  >
                    Something went wrong. Try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting" || question.trim().length < 3}
                  className="w-full inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all focus:outline-none disabled:opacity-50"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--ink)",
                    padding: "14px 28px",
                    minHeight: "48px",
                    border: "1px solid var(--gold)",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
                    (e.currentTarget as HTMLElement).style.outlineOffset = "3px";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.outline = "none";
                  }}
                >
                  {status === "submitting" ? "Sending..." : copy.button}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
