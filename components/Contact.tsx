"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--ink2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
        <div
          className="w-full max-w-2xl p-10 lg:p-14 text-center"
          style={{
            border: "1px solid var(--gold)",
            backgroundColor: "var(--ink)",
          }}
        >
          <span
            className="font-outfit text-xs uppercase tracking-widest font-medium block mb-6"
            style={{ color: "var(--gold)" }}
          >
            Business Email
          </span>

          <a
            href="mailto:isaiahnguaiko6@gmail.com"
            className="font-cormorant font-semibold block transition-colors focus:outline-none"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--cream)")
            }
            onFocus={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              (e.currentTarget as HTMLElement).style.outline = "2px solid var(--gold)";
              (e.currentTarget as HTMLElement).style.outlineOffset = "4px";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--cream)";
              (e.currentTarget as HTMLElement).style.outline = "none";
            }}
          >
            isaiahnguaiko6@gmail.com
          </a>

          <div className="mt-6 space-y-1">
            <p
              className="font-outfit font-light text-sm"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              For brand partnerships, coaching inquiries, and collaborations.
            </p>
            <p
              className="font-outfit font-light text-sm"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              Response within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
