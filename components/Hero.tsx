import Link from "next/link";
import Image from "next/image";
import CountUpNumber from "./CountUpNumber";
import { DiscordIcon, InstagramIcon, SOCIAL_LINKS, TikTokIcon } from "./SocialIcons";

const HERO_SOCIALS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
  { label: "Discord", href: SOCIAL_LINKS.discord, Icon: DiscordIcon },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-20 overflow-x-clip"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Grain overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.04 }}
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Warm light behind the portrait, so the photo sits in the room instead of on it */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{
          right: "8%",
          top: "18%",
          width: "560px",
          height: "560px",
          background: "radial-gradient(closest-side, rgba(196,160,106,0.10), transparent)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-6">
              <p
                className="font-outfit text-xs uppercase tracking-widest font-medium"
                style={{ color: "var(--gold)" }}
              >
                Social Psychology Creator &amp; Educator
              </p>
              <div className="flex items-center -mr-2.5">
                {HERO_SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label}, opens in new tab`}
                    className="link-icon flex items-center justify-center w-10 h-10"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <h1
              className="font-outfit font-semibold leading-[1.05] mb-6"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(2.75rem, 6vw, 4.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              I&apos;m Mitch.
            </h1>

            <p
              className="font-outfit font-light leading-relaxed mb-10 max-w-lg"
              style={{
                color: "rgba(245,240,232,0.72)",
                fontSize: "1.0625rem",
              }}
            >
              <span className="lg:hidden">
                I teach real, actionable psychology for making friends and being
                social. Everything I know is right here, all free.
              </span>
              <span className="hidden lg:inline">
                I teach people how to make friends and be social using real,
                actionable human psychology, not vague confidence advice. If you
                freeze up around people you like, go blank in group
                conversations, or just want small talk to feel less like a
                performance, there&apos;s an actual mechanism behind it, and a
                fix. Everything I know is right here. All free.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link href="/guides" className="btn btn-outline whitespace-nowrap">
                Free Guides&nbsp;&rarr;
              </Link>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline whitespace-nowrap"
              >
                Join the Free Discord&nbsp;&rarr;
              </a>
            </div>

            <Link
              href="/ask"
              className="link-gold inline-flex items-center gap-2 font-outfit font-medium text-base mt-6 min-h-[44px]"
            >
              Have a question? Ask Mitch&nbsp;&rarr;
            </Link>
          </div>

          {/* Right: profile photo + stats + CTA */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden group"
              style={{
                border: "2px solid var(--gold)",
                boxShadow: "0 0 0 8px rgba(196,160,106,0.06), 0 20px 50px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src="/mitch.webp"
                alt="Mitch, creator of UNMONITORED"
                fill
                unoptimized
                sizes="(min-width: 1024px) 320px, 256px"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 35%, rgba(245,240,232,0.45) 50%, transparent 65%)",
                }}
              />
            </div>

            <dl className="flex gap-10 mt-6">
              {[
                { value: "200M+", label: "Total Views" },
                { value: "10K+", label: "Followers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center flex flex-col-reverse">
                  <dt
                    className="font-outfit text-xs uppercase tracking-widest mt-1"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                  >
                    {stat.label}
                  </dt>
                  <dd>
                    <CountUpNumber
                      value={stat.value}
                      className="font-cormorant font-semibold block tabular"
                      style={{ color: "var(--gold)", fontSize: "1.75rem" }}
                    />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6">
              <a
                href="https://drive.google.com/file/d/1q8mP5kMepsgSYg8Ay0lNjye1uUa4LTZ9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold px-6"
              >
                Free Conversation Formula (Mitch Effect)
              </a>

              <Link
                href="/about"
                className="story-link link-muted font-outfit text-sm py-2 whitespace-nowrap"
              >
                My Story&nbsp;&rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
