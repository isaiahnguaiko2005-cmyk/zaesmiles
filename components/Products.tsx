"use client";

import productsData from "../data/products.json";
import { useCountdown } from "../lib/useCountdown";
import ReviewRotator, { RotatorItem } from "./ReviewRotator";
import Reveal from "./Reveal";
import RevampOverlay from "./RevampOverlay";

type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  link: string;
  linkLabel: string;
  discount?: {
    discountedPrice: string;
    endsAt: string;
    label?: string;
  };
  proof?: RotatorItem[];
  premium?: boolean;
  underRevamp?: boolean;
};

const UNMONITORED_PHASES = [
  {
    phase: "Phase 1",
    name: "Diagnosis",
    weeks: "Weeks 1-2",
    description:
      "Map which of the five anxiety architectures you're actually running and get real baseline numbers before you touch anything else.",
  },
  {
    phase: "Phase 2",
    name: "Internal Recalibration",
    weeks: "Weeks 3-4",
    description:
      "Down-regulate the nervous system, break the overthinking loop, and rebuild the self-image that's driving the freeze.",
  },
  {
    phase: "Phase 3",
    name: "Graduated Exposure",
    weeks: "Weeks 5-7",
    description:
      "A custom exposure ladder with repetition and recovery protocols built in, not just \"put yourself out there.\"",
  },
  {
    phase: "Phase 4",
    name: "Conversational Mastery",
    weeks: "Weeks 8-10",
    description:
      "The actual mechanics of a natural conversation: story banking, humor calibration, group dynamics, digital follow-up.",
  },
  {
    phase: "Phase 5",
    name: "Identity Integration",
    weeks: "Weeks 11-12",
    description:
      "Make it permanent: long-term maintenance, relapse protocols, and the shift from recalibrating to recalibrated.",
  },
];

const UNMONITORED_PROOF: RotatorItem[] = [
  {
    text: "5 phases, run in order, because the sequence is what makes the change hold instead of fade.",
  },
  {
    text: "Phase one calms the nervous system first. You cannot override a threat signal you have not quieted.",
  },
  {
    text: "Phase two rebuilds the identity, because behavior that fights your self-image snaps back.",
  },
  {
    text: "Most advice hands you the conversation tactics and skips the three phases that make them stick.",
  },
];

const products = productsData as Product[];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-2"
          style={{ color: "var(--ink)" }}
        >
          Products
        </h2>
        <p
          className="font-outfit font-light mb-10"
          style={{ color: "rgba(12,15,20,0.5)" }}
        >
          Paid systems built to fix social anxiety at the root.
        </p>

        {/* UNMONITORED flagship card */}
        <Reveal
          className="premium-glow mb-8 p-8 lg:p-12"
          style={{
            backgroundColor: "var(--ink)",
            border: "1px solid var(--gold)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
                style={{ color: "var(--gold)" }}
              >
                Flagship Product
              </span>
              <h3
                className="font-cormorant font-semibold mb-3"
                style={{
                  color: "var(--cream)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                UNMONITORED
              </h3>
              <p
                className="font-outfit font-light mb-4"
                style={{ color: "rgba(245,240,232,0.7)" }}
              >
                A book and 90-day recalibration system.
              </p>
              <p
                className="font-outfit font-light leading-relaxed mb-8"
                style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9375rem" }}
              >
                You know the version of you that talks easily with people you
                are comfortable with, then vanishes the second the stakes rise.
                That is not shyness or low confidence. It is a calibration
                problem: your brain running self-monitoring at 4 to 5 times
                normal volume, crashing the working memory the conversation
                needed. UNMONITORED is the 90-day system that recalibrates it at
                the source. 5 phases, in order, because the sequence is what
                makes the change hold instead of fade.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <span
                  className="font-cormorant font-semibold text-4xl"
                  style={{ color: "var(--gold)" }}
                >
                  $27+
                </span>
                <a
                  href="https://isaiah60.gumroad.com/l/xdnsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus:outline-none"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--ink)",
                    padding: "14px 28px",
                    minHeight: "48px",
                    border: "1px solid var(--gold)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(196,160,106,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
                    (e.currentTarget as HTMLElement).style.outlineOffset = "3px";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.outline = "none";
                  }}
                >
                  Get UNMONITORED
                </a>
              </div>
              <p
                className="font-outfit font-light text-xs mt-3"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                Checkout and refunds run through Gumroad. Not for you? Reach out anytime.
              </p>
            </div>

            <ul className="space-y-3" aria-label="What's included in UNMONITORED">
              {[
                "5-phase nervous system recalibration",
                "Behavioral identity reconstruction",
                "Conversational freedom system",
                "90-day implementation framework",
                "Fillable companion workbook (worksheets, trackers, templates)",
                "Immediate digital download",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-outfit font-light text-sm"
                  style={{ color: "rgba(245,240,232,0.8)" }}
                >
                  <span style={{ color: "var(--gold)" }} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(196,160,106,0.2)" }}
          >
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
              style={{ color: "var(--gold)" }}
            >
              What&apos;s inside
            </span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
              {UNMONITORED_PHASES.map((p, i) => (
                <Reveal key={p.phase} delay={i * 60} style={{ borderLeft: "2px solid rgba(196,160,106,0.4)", paddingLeft: "12px" }}>
                  <div
                    className="font-outfit text-xs uppercase tracking-widest font-medium mb-1"
                    style={{ color: "var(--gold)" }}
                  >
                    {p.phase} &middot; {p.weeks}
                  </div>
                  <div
                    className="font-cormorant font-semibold text-lg mb-1.5"
                    style={{ color: "var(--cream)" }}
                  >
                    {p.name}
                  </div>
                  <p
                    className="font-outfit font-light text-xs leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    {p.description}
                  </p>
                </Reveal>
              ))}
            </div>
            <ReviewRotator items={UNMONITORED_PROOF} label="Why it works" />
          </div>
        </Reveal>

        {/* Additional paid products + coming soon */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
          <div
            className="p-8 flex flex-col justify-center"
            style={{
              backgroundColor: "var(--cream2)",
              border: "1px dashed rgba(138,158,140,0.6)",
              minHeight: "160px",
              opacity: 0.7,
            }}
            aria-label="More products coming soon"
          >
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium mb-3 block"
              style={{ color: "var(--sage)" }}
            >
              Coming Soon
            </span>
            <h4
              className="font-cormorant font-semibold text-2xl mb-2"
              style={{ color: "var(--ink)" }}
            >
              New Products
            </h4>
            <p
              className="font-outfit font-light text-sm leading-relaxed"
              style={{ color: "rgba(12,15,20,0.6)" }}
            >
              More paid systems and resources are on the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { isActive, display } = useCountdown(product.discount?.endsAt);
  const isRevamp = !!product.underRevamp;

  return (
    <div
      className={`relative overflow-hidden p-6 flex flex-col transition-transform duration-200${
        isRevamp ? "" : " hover:-translate-y-1"
      }${product.premium && !isRevamp ? " premium-glow" : ""}`}
      style={{
        backgroundColor: "var(--ink)",
        border: isActive ? "1px solid var(--gold)" : "1px solid rgba(196,160,106,0.25)",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (isRevamp) return;
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(196,160,106,0.2)";
      }}
      onMouseLeave={(e) => {
        if (isRevamp) return;
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div
        style={
          isRevamp
            ? { filter: "grayscale(1)", opacity: 0.8, pointerEvents: "none" }
            : undefined
        }
        className="flex flex-col flex-1"
      >
      <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--gold)" }}
        >
          {product.category}
        </span>
        {isActive && (
          <span
            className="font-outfit text-xs font-medium px-2 py-0.5"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--ink)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontSize: "0.65rem",
            }}
          >
            {product.discount?.label ?? "On Sale"}
          </span>
        )}
      </div>
      <h4
        className="font-cormorant font-semibold text-xl mb-2"
        style={{ color: "var(--cream)" }}
      >
        {product.title}
      </h4>
      <p
        className="font-outfit font-light text-sm leading-relaxed flex-1 mb-5"
        style={{ color: "rgba(245,240,232,0.65)" }}
      >
        {product.description}
      </p>
      <div className="mb-4">
        <div className="flex items-center gap-3">
          {isActive ? (
            <>
              <span
                className="font-cormorant font-semibold text-2xl"
                style={{ color: "var(--gold)" }}
              >
                {product.discount!.discountedPrice}
              </span>
              <span
                className="font-outfit text-sm line-through"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                {product.price}
              </span>
            </>
          ) : (
            <span
              className="font-cormorant font-semibold text-2xl"
              style={{ color: "var(--gold)" }}
            >
              {product.price}
            </span>
          )}
        </div>
        {isActive && (
          <div
            className="font-outfit text-xs mt-1.5"
            style={{ color: "var(--gold)" }}
          >
            Sale ends in {display}
          </div>
        )}
      </div>
      {isRevamp ? (
        <span
          aria-disabled="true"
          className="font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2"
          style={{ color: "rgba(245,240,232,0.5)", cursor: "not-allowed" }}
        >
          Unavailable during revamp
        </span>
      ) : (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2 focus:outline-none"
          style={{ color: "var(--cream)" }}
          aria-label={`${product.linkLabel} — ${product.title}`}
          onFocus={(e) => {
            (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
            (e.currentTarget as HTMLElement).style.outlineOffset = "3px";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLElement).style.outline = "none";
          }}
        >
          {product.linkLabel} →
        </a>
      )}
      <p
        className="font-outfit font-light text-xs mt-3"
        style={{ color: "rgba(245,240,232,0.35)" }}
      >
        Checkout and refunds run through Gumroad.
      </p>
      {product.proof && product.proof.length > 0 && (
        <div
          className="mt-6 pt-5"
          style={{ borderTop: "1px solid rgba(196,160,106,0.15)" }}
        >
          <ReviewRotator items={product.proof} label="Built on research" />
        </div>
      )}
      </div>
      {isRevamp && <RevampOverlay />}
    </div>
  );
}
