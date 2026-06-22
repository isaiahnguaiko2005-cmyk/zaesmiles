"use client";

import guides from "../data/guides.json";

export default function Resources() {
  return (
    <section
      id="resources"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* UNMONITORED featured card */}
        <div
          className="mb-20 p-8 lg:p-12"
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
              <h2
                className="font-cormorant font-semibold mb-3"
                style={{
                  color: "var(--cream)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                UNMONITORED
              </h2>
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
                Social anxiety is not shyness. It is a calibration problem, your
                brain running self-monitoring at 4-5x normal volume and crashing
                your working memory in the process. UNMONITORED is the system to
                fix that. 90 days. 5 phases. Identity reconstruction from the
                inside out.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <span
                  className="font-cormorant font-semibold text-4xl"
                  style={{ color: "var(--gold)" }}
                >
                  $37
                </span>
                <a
                  href="https://isaiah60.gumroad.com/l/xdnsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all focus:outline-none"
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
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
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
            </div>

            <ul className="space-y-3" aria-label="What's included in UNMONITORED">
              {[
                "5-phase nervous system recalibration",
                "Behavioral identity reconstruction",
                "Conversational freedom system",
                "90-day implementation framework",
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
        </div>

        {/* Free guides */}
        <div>
          <h3
            className="font-cormorant font-semibold text-3xl lg:text-4xl mb-2"
            style={{ color: "var(--ink)" }}
          >
            Free Guides
          </h3>
          <p
            className="font-outfit font-light mb-10"
            style={{ color: "rgba(12,15,20,0.5)" }}
          >
            New guide drops every week. All free.
          </p>

          {guides.length === 0 ? (
            <div
              className="p-8 text-center font-outfit"
              style={{
                border: "1px solid rgba(138,158,140,0.3)",
                color: "rgba(12,15,20,0.5)",
              }}
            >
              First guide coming soon. Follow{" "}
              <a
                href="https://www.instagram.com/zae.smiles"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold)" }}
              >
                @zae.smiles
              </a>{" "}
              on Instagram to get it first.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function GuideCard({
  guide,
}: {
  guide: {
    id: string;
    title: string;
    description: string;
    category: string;
    link: string;
    linkLabel: string;
  };
}) {
  return (
    <div
      className="p-6 flex flex-col"
      style={{
        backgroundColor: "var(--cream)",
        border: "1px solid rgba(138,158,140,0.4)",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(138,158,140,0.4)")
      }
    >
      <span
        className="font-outfit text-xs uppercase tracking-widest font-medium mb-3 block"
        style={{ color: "var(--sage)" }}
      >
        {guide.category}
      </span>
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
