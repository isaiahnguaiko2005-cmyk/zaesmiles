"use client";

import Reveal from "./Reveal";

const entries: { when: string; title: string; body: string[] }[] = [
  {
    when: "Growing Up",
    title: "An unstable home",
    body: [
      "My story starts in a home environment that was unstable, not the kind of place that teaches you what a healthy relationship actually looks like. I'm not going to lay out every detail here, but growing up that way shaped how I saw myself, and how long it took me to understand what love, trust, and confidence were actually supposed to feel like.",
    ],
  },
  {
    when: "Relationships",
    title: "Learning the hard way",
    body: [
      "The relationships I was in as I got older followed a pattern I didn't have a name for yet: attachment, control, and staying too long because I didn't think I had another option. Every one of them taught me something about boundaries and self-worth that I wish I'd learned a faster, cheaper way.",
    ],
  },
  {
    when: "The Breakup",
    title: "The turning point",
    body: [
      "The relationship that ended up mattering most wasn't the end of my story, it was the start of a different one. Instead of staying defined by it, I started putting the energy I'd spent on that relationship into rebuilding myself, physically, mentally, and socially. That decision is the actual origin of everything on this site.",
    ],
  },
  {
    when: "Rebuilding",
    title: "Becoming someone I could respect",
    body: [
      "I got deliberate about my body, my discipline, my appearance, and how I showed up socially. Not to impress anyone, but because I wanted to be someone I actually respected. That's still the whole philosophy behind UNMONITORED: you're not permanently defined by where you came from or what's been done to you. You can rebuild, on purpose.",
    ],
  },
  {
    when: "First Content",
    title: "Documenting instead of hiding",
    body: [
      "I started posting under @zae.smiles, testing everything: talking-head videos, carousels, memes, straight social psychology breakdowns. I wasn't chasing views for their own sake. I wanted to understand why people struggle socially, and turn what I was learning about myself into something other people could actually use.",
    ],
  },
  {
    when: "First Real Traction",
    title: "The trial reel",
    body: [
      "At one point Instagram was pulling close to 12M monthly views. A single trial reel — what I started calling the \"Milkman method\" — did around 15 million views on its own and brought in about 1,600 followers. That was the moment I stopped thinking of this as posting videos and started thinking about it as a business.",
    ],
  },
  {
    when: "May 2026",
    title: "The first real lead magnet",
    body: [
      "I put out a free guide, \"15 Psychology Hacks to Make Friends Easier,\" and ran it through a ManyChat funnel. It pulled in around 87 real contacts in two days. Small number, but it proved something bigger: I could build an actual audience I owned, not just views I was renting from an algorithm.",
    ],
  },
  {
    when: "Working Through It",
    title: "Building this on the side of full shifts",
    body: [
      "None of this happened from a comfortable starting position. I've worked Sheetz, two stints at Amazon pulling 50-60 hour weeks, and Panera in between, while trying to keep a business and school moving at the same time. There were real stretches where I had to think hard about food, gas, and rent. That's part of the story too — I'm not building this from a position of already having it figured out.",
    ],
  },
  {
    when: "June 30, 2026",
    title: "Project 300K begins",
    body: [
      "I launched UNMONITORED and started Project 300K in public: 183 days, a live tracker, a revenue goal, and the Jaguar Fund as a way to make the whole thing accountable instead of private. Nothing edited out, including the weeks that don't go well.",
    ],
  },
  {
    when: "Right Now",
    title: "What this is actually for",
    body: [
      "The goal was never just to escape where I started. It's to build something real, and then use it to help other people recognize the same patterns faster than I did — in relationships, in confidence, in believing they can rebuild themselves on purpose. That's the whole point of everything I post.",
    ],
  },
];

export default function StoryTimeline() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--ink)" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4"
          style={{ color: "var(--gold)" }}
        >
          My Story
        </span>
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-16"
          style={{ color: "var(--cream)" }}
        >
          How I actually got here.
        </h2>

        <div className="relative">
          <div
            className="absolute left-0 top-2 bottom-2 hidden sm:block"
            style={{ width: "1px", backgroundColor: "rgba(196,160,106,0.25)" }}
            aria-hidden="true"
          />
          <div className="space-y-14">
            {entries.map((entry, i) => (
              <Reveal key={entry.title} className="relative sm:pl-10">
                <div
                  className="hidden sm:flex absolute left-0 top-1 -translate-x-1/2 items-center justify-center rounded-full"
                  style={{
                    width: "18px",
                    height: "18px",
                    backgroundColor: "var(--ink)",
                    border: "2px solid var(--gold)",
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="font-outfit text-[9px] font-semibold"
                    style={{ color: "var(--gold)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <span
                  className="font-outfit text-xs uppercase tracking-widest font-medium block mb-2"
                  style={{ color: "var(--sage)" }}
                >
                  {entry.when}
                </span>
                <h3
                  className="font-cormorant font-semibold text-2xl mb-3"
                  style={{ color: "var(--cream)" }}
                >
                  {entry.title}
                </h3>
                {entry.body.map((p, j) => (
                  <p
                    key={j}
                    className="font-outfit font-light leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.7)" }}
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
