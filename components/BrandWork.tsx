"use client";

const partners = ["OLOV Trimmer", "Based Bodyworks", "Crispy Halal", "Rimbério"];

export default function BrandWork() {
  return (
    <section
      id="brand-work"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-2"
          style={{ color: "var(--ink)" }}
        >
          Brand Partnerships
        </h2>
        <p
          className="font-outfit font-light mb-10"
          style={{ color: "rgba(12,15,20,0.5)" }}
        >
          Working with brands that fit the audience and the brand.
        </p>

        {/* Partners */}
        <div className="flex flex-wrap gap-3 mb-10">
          {partners.map((partner) => (
            <div
              key={partner}
              className="font-outfit text-sm font-medium px-4 py-2"
              style={{
                backgroundColor: "var(--ink)",
                color: "var(--cream)",
                border: "1px solid var(--gold)",
              }}
            >
              {partner}
            </div>
          ))}
        </div>

        {/* UGC Portfolio card */}
        <div
          className="p-8 lg:p-10 mb-8"
          style={{
            backgroundColor: "var(--ink2)",
            border: "1px solid var(--gold)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-3"
                style={{ color: "var(--gold)" }}
              >
                UGC Portfolio
              </span>
              <p
                className="font-outfit font-light"
                style={{ color: "rgba(245,240,232,0.7)" }}
              >
                View past brand work, content formats, and results.
              </p>
            </div>
            <a
              href="https://canva.link/cqq4b3dqwf0xrzm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all focus:outline-none flex-shrink-0"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--cream)",
                padding: "14px 28px",
                minHeight: "48px",
              }}
              aria-label="View UGC Portfolio — opens in new tab"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
                (e.currentTarget as HTMLElement).style.outlineOffset = "3px";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.outline = "none";
              }}
            >
              View Portfolio →
            </a>
          </div>
        </div>

        {/* Inquiry */}
        <p
          className="font-outfit text-sm"
          style={{ color: "rgba(12,15,20,0.45)" }}
        >
          For partnership inquiries:{" "}
          <a
            href="mailto:isaiahnguaiko6@gmail.com"
            className="transition-colors focus:outline-none"
            style={{ color: "var(--gold)" }}
            onFocus={(e) => {
              (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
              (e.currentTarget as HTMLElement).style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLElement).style.outline = "none";
            }}
          >
            isaiahnguaiko6@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
