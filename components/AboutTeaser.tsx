import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }}>
      <Reveal className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-6"
          style={{ color: "var(--sage-deep)" }}
        >
          A Bit About Me
        </span>
        {/* Set as a spoken line in the serif, so it reads as Mitch talking
            rather than another block of body copy. */}
        <p
          className="font-cormorant font-medium leading-snug mb-8"
          style={{ color: "var(--ink)", fontSize: "clamp(1.5rem, 3.2vw, 2rem)" }}
        >
          I started posting because I saw a gap: everyone talked about confidence
          like it was a personality trait. It isn&apos;t. Now I&apos;m building
          UNMONITORED and running Project 300K, a public 183-day challenge with
          a live tracker, a savings goal, and nothing edited out.
        </p>
        <div className="flex items-center justify-center gap-3">
          <span
            className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "1px solid var(--gold)" }}
          >
            <Image src="/mitch.webp" alt="" fill unoptimized sizes="36px" className="object-cover" />
          </span>
          <Link
            href="/about"
            className="story-link link-gold on-light font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2 py-2"
          >
            Read the full story&nbsp;&rarr;
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
