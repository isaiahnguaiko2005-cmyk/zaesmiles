"use client";

const goals = [
  {
    label: "300,000 Followers",
    description: "Across Instagram and TikTok, combined.",
  },
  {
    label: "$30K a Month",
    description:
      "UNMONITORED, coaching, and brand work built into a real, recurring revenue business, built in public, not behind closed doors.",
  },
  {
    label: "The Jaguar Fund",
    description:
      "My personal reward for hitting both goals: a live-tracked savings fund earmarked for the $8,400 down payment on a 2018 Jaguar F-Type (30% down on the car). Every dollar it grows is proof the business is actually working, not just the follower count.",
  },
];

export default function Project300K() {
  return (
    <section
      id="project-300k"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--ink2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Copy */}
          <div>
            <span
              className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
              style={{ color: "var(--gold)" }}
            >
              The Challenge
            </span>
            <h2
              className="font-cormorant font-semibold mb-6"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
              }}
            >
              What is Project 300K?
            </h2>
            <div
              className="font-outfit font-light leading-relaxed space-y-4"
              style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem" }}
            >
              <p>
                Project 300K is a 183-day public build. From June 30 to
                December 30, 2026, I&apos;m growing this brand from scratch to
                300,000 followers, $30,000 a month in revenue, and a fully
                funded Jaguar F-Type down payment, all in full view, with
                nothing edited out.
              </p>
              <p>
                No polished highlight reel. Every follower gained, every
                dollar earned, every setback is tracked live on this site so
                you can watch the actual process, not the after-photo.
              </p>
              <p>
                If you&apos;re building something of your own, this is the
                proof that it&apos;s possible to do it in the open, and the
                Discord is where I break down exactly how, week by week.
              </p>
            </div>

            <a
              href="https://discord.gg/vWhm6srVqz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all mt-8 focus:outline-none"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--cream)",
                padding: "14px 28px",
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
            >
              Follow the Build &rarr;
            </a>
          </div>

          {/* Goals */}
          <div className="space-y-4">
            {goals.map((goal) => (
              <div
                key={goal.label}
                className="p-6"
                style={{
                  backgroundColor: "var(--ink)",
                  border: "1px solid rgba(196,160,106,0.25)",
                }}
              >
                <div
                  className="font-cormorant font-semibold text-2xl mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  {goal.label}
                </div>
                <p
                  className="font-outfit font-light text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.65)" }}
                >
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
