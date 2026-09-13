"use client";

const tiers = [
  {
    label: "Foundation",
    price: "$197 / mo",
    description:
      "Social anxiety framework support and weekly accountability. For anyone ready to stop overthinking and start showing up.",
    includes: [
      "Weekly check-in call",
      "Unlimited DM access",
      "UNMONITORED framework implementation",
      "Social anxiety recalibration roadmap",
    ],
    highlight: false,
  },
  {
    label: "Elite",
    price: "$497 / mo",
    description:
      "Full transformation — social, physical, identity. The 3 Pillars system built around you. For people serious about a complete rebuild.",
    includes: [
      "2x weekly calls",
      "Priority DM access",
      "Full 3 Pillars implementation",
      "Social anxiety + physical transformation",
      "Identity reconstruction framework",
    ],
    highlight: true,
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
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--gold)" }}
        >
          Coming Soon
        </span>
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-2"
          style={{ color: "var(--cream)" }}
        >
          Coaching
        </h2>
        <p
          className="font-outfit font-light mb-12"
          style={{ color: "rgba(245,240,232,0.45)" }}
        >
          Not open yet. Here&apos;s a preview of what&apos;s coming, join the Discord to hear first when it opens.
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
        opacity: 0.6,
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--gold)" }}
        >
          {tier.label}
        </span>
        <span
          className="font-outfit text-xs px-2 py-0.5"
          style={{
            color: "rgba(245,240,232,0.5)",
            border: "1px solid rgba(245,240,232,0.25)",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </span>
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

      <div
        className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider"
        style={{
          border: "1px solid rgba(245,240,232,0.25)",
          color: "rgba(245,240,232,0.5)",
          padding: "14px 24px",
          minHeight: "48px",
        }}
        aria-label={`${tier.label} coaching not open yet`}
      >
        Not Open Yet
      </div>
    </div>
  );
}
