"use client";

const tiers = [
  {
    label: "Foundation",
    price: "$197 / mo",
    description:
      "Weekly accountability, content review, and direct feedback on your social situation.",
    includes: [
      "Weekly check-in call",
      "Unlimited DM access",
      "UNMONITORED framework implementation",
    ],
    cta: "Apply via Email",
    mailto: "mailto:isaiahnguaiko6@gmail.com?subject=Foundation%20Coaching%20Application",
    highlight: false,
    badge: null,
  },
  {
    label: "Elite",
    price: "$497 / mo",
    description:
      "Full transformation support. For people serious about rewiring this in 90 days.",
    includes: [
      "2x weekly calls",
      "Priority DM access",
      "Full UNMONITORED implementation",
      "Content strategy review",
    ],
    cta: "Apply via Email",
    mailto: "mailto:isaiahnguaiko6@gmail.com?subject=Elite%20Coaching%20Application",
    highlight: true,
    badge: "Limited Spots",
  },
];

export default function Coaching() {
  return (
    <section
      id="coaching"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-2"
          style={{ color: "var(--cream)" }}
        >
          Work With Me
        </h2>
        <p
          className="font-outfit font-light mb-12"
          style={{ color: "rgba(245,240,232,0.45)" }}
        >
          Two tiers. Apply via email.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {tiers.map((tier) => (
            <CoachingCard key={tier.label} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoachingCard({
  tier,
}: {
  tier: (typeof tiers)[0];
}) {
  return (
    <div
      className="p-8 flex flex-col"
      style={{
        backgroundColor: "var(--ink2)",
        border: tier.highlight
          ? "1px solid var(--gold)"
          : "1px solid rgba(245,240,232,0.12)",
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--gold)" }}
        >
          {tier.label}
        </span>
        {tier.badge && (
          <span
            className="font-outfit text-xs px-2 py-0.5"
            style={{
              color: "var(--ink)",
              backgroundColor: "var(--gold)",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {tier.badge}
          </span>
        )}
      </div>

      <div
        className="font-cormorant font-semibold text-3xl mt-2 mb-4"
        style={{ color: "var(--cream)" }}
      >
        {tier.price}
      </div>

      <p
        className="font-outfit font-light text-sm leading-relaxed mb-6"
        style={{ color: "rgba(245,240,232,0.65)" }}
      >
        {tier.description}
      </p>

      <ul className="space-y-2 mb-8 flex-1" aria-label={`${tier.label} includes`}>
        {tier.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 font-outfit font-light text-sm"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            <span style={{ color: "var(--sage)" }} aria-hidden="true">
              —
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={tier.mailto}
        className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all focus:outline-none"
        style={{
          border: "1px solid var(--gold)",
          color: "var(--cream)",
          padding: "14px 24px",
          minHeight: "48px",
        }}
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
        aria-label={`Apply for ${tier.label} coaching via email`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
