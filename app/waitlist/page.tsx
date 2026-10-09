import type { Metadata } from "next";
import Link from "next/link";
import LaunchCountdown from "@/components/LaunchCountdown";
import FoundingPrice from "@/components/FoundingPrice";
import WaitlistForm from "@/components/WaitlistForm";
import {
  FOUNDING_WINDOW_DAYS,
  LAUNCH_LABEL,
  PROTOCOL_PARTS,
  PROTOCOL_TERMS,
  REGULAR_PRICE,
} from "@/lib/launch";

export const metadata: Metadata = {
  title: "Mitch Protocol Waitlist — Zae Smiles",
  description:
    "Join the waitlist for The Mitch Protocol and get early access plus the founding price.",
  openGraph: {
    title: "The Mitch Protocol Waitlist — Zae Smiles",
    description:
      "The complete system for stepping into your most socially confident self. Join the waitlist for early access and the founding price.",
    url: "/waitlist",
  },
};

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function WaitlistPage() {
  return (
    <section
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--gold)" }}
        >
          Waitlist open &middot; launches {LAUNCH_LABEL}
        </span>
        <h1
          className="font-cormorant font-semibold mb-5"
          style={{
            color: "var(--cream)",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            lineHeight: 1.05,
          }}
        >
          The Mitch Protocol
        </h1>
        <p
          className="font-outfit font-light leading-relaxed mx-auto mb-10"
          style={{ color: "rgba(245,240,232,0.75)", fontSize: "1.0625rem", maxWidth: "36rem" }}
        >
          The version of you that talks easily already exists. The Mitch Protocol is the complete
          system for stepping into your most socially confident and adaptable self, Mitch, in any
          room, until Mitch is just you.
        </p>

        <div className="mb-12">
          <LaunchCountdown />
        </div>

        <div
          id="join"
          className="premium-glow text-left p-6 sm:p-10 scroll-mt-28"
          style={{
            backgroundColor: "var(--ink2)",
            border: "1px solid var(--gold)",
          }}
        >
          <div className="mb-6 text-center">
            <FoundingPrice size="lg" />
            <p
              className="font-outfit font-light text-sm mt-3"
              style={{ color: "rgba(245,240,232,0.6)" }}
            >
              Waitlist members get {FOUNDING_WINDOW_DAYS} days from launch to claim the founding price. Your link arrives by email on launch day. After that it&apos;s ${REGULAR_PRICE}.
            </p>
          </div>

          <h2
            className="font-outfit text-sm font-medium mb-3"
            style={{ color: "var(--cream)" }}
          >
            Join the waitlist for early access and the founding price.
          </h2>
          <WaitlistForm source="waitlist-page" focusOnHash />
        </div>

        <div className="mt-16 text-left">
          <h2
            className="font-cormorant font-semibold text-3xl mb-3 text-center"
            style={{ color: "var(--cream)" }}
          >
            The pieces, in plain language
          </h2>
          <p
            className="font-outfit font-light text-center mx-auto mb-8"
            style={{ color: "rgba(245,240,232,0.7)", maxWidth: "34rem", fontSize: "1rem" }}
          >
            Nothing here is a term you&apos;ve heard before. Here&apos;s what each one is and what it
            teaches you.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROTOCOL_TERMS.map((term) => (
              <article
                key={term.name}
                className="p-5"
                style={{
                  backgroundColor: "var(--ink2)",
                  borderLeft: "2px solid var(--gold)",
                  border: "1px solid rgba(196,160,106,0.25)",
                  borderLeftWidth: "2px",
                  borderLeftColor: "var(--gold)",
                }}
              >
                <h3
                  className="font-cormorant font-semibold text-2xl mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {term.name}
                </h3>
                <p
                  className="font-outfit font-medium text-sm mb-3"
                  style={{ color: "var(--cream)" }}
                >
                  {term.tagline}
                </p>
                <p
                  className="font-outfit font-light leading-relaxed mb-3"
                  style={{ color: "rgba(245,240,232,0.8)", fontSize: "0.9375rem" }}
                >
                  {term.what}
                </p>
                <p
                  className="font-outfit font-light leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.8)", fontSize: "0.9375rem" }}
                >
                  <span
                    className="font-medium uppercase tracking-widest text-xs mr-2"
                    style={{ color: "var(--gold)" }}
                  >
                    You learn
                  </span>
                  {term.teaches}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 text-left max-w-2xl mx-auto">
          <h2
            className="font-cormorant font-semibold text-3xl mb-8 text-center"
            style={{ color: "var(--cream)" }}
          >
            What&apos;s inside
          </h2>
          <div className="space-y-8">
            {PROTOCOL_PARTS.map((part) => (
              <section key={part.title} aria-labelledby={`part-${part.title}`}>
                <h3
                  id={`part-${part.title}`}
                  className="font-outfit text-xs uppercase tracking-widest font-medium mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  {part.title}
                </h3>
                <ul className="space-y-3">
                  {part.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-outfit font-light text-sm leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.8)" }}
                    >
                      <span style={{ color: "var(--gold)" }}>
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <p className="font-outfit font-light text-sm mt-12" style={{ color: "rgba(245,240,232,0.5)" }}>
          Want something to start with now?{" "}
          <Link href="/guides" className="story-link" style={{ color: "var(--gold)" }}>
            Read the free guides
          </Link>
        </p>
      </div>
    </section>
  );
}
