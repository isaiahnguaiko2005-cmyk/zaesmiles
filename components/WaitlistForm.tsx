"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { LAUNCH_LABEL, LAUNCH_TIME_LABEL } from "@/lib/launch";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm({
  source = "products",
  focusOnHash = false,
}: {
  source?: string;
  focusOnHash?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  // A link ending in #join opens the page with the email box ready to type in.
  useEffect(() => {
    if (focusOnHash && window.location.hash === "#join") {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [focusOnHash]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website: trap }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Try again.");
      setStatus("done");
      setMessage(
        `You're on the list. Your founding-price link arrives by email on ${LAUNCH_LABEL} at ${LAUNCH_TIME_LABEL}.`
      );
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className="font-outfit text-sm font-medium"
        style={{ color: "var(--gold)" }}
      >
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor={`waitlist-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`waitlist-email-${source}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          ref={inputRef}
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 font-outfit text-sm px-4 focus:outline-none"
          style={{
            minHeight: "48px",
            backgroundColor: "rgba(245,240,232,0.06)",
            border: "1px solid rgba(196,160,106,0.4)",
            color: "var(--cream)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--gold)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(196,160,106,0.4)";
          }}
        />
        {/* honeypot: real visitors never see or fill this */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus:outline-none"
          style={{
            backgroundColor: "var(--gold)",
            color: "var(--ink)",
            padding: "14px 24px",
            minHeight: "48px",
            border: "1px solid var(--gold)",
            opacity: status === "sending" ? 0.7 : 1,
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = "2px solid var(--gold)";
            e.currentTarget.style.outlineOffset = "3px";
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = "none";
          }}
        >
          {status === "sending" ? "Joining..." : "Join the waitlist"}
        </button>
      </div>
      <p
        className="font-outfit font-light text-xs mt-2"
        style={{ color: "rgba(245,240,232,0.45)" }}
      >
        By joining you agree to get emails about The Mitch Protocol and related free guides. Unsubscribe anytime.
      </p>
      {status === "error" && (
        <p role="alert" className="font-outfit text-xs mt-2" style={{ color: "#e8a598" }}>
          {message}
        </p>
      )}
    </form>
  );
}
