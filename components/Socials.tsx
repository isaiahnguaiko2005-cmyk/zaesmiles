import Reveal from "./Reveal";
import {
  DiscordIcon,
  InstagramIcon,
  SOCIAL_LINKS,
  SpotifyIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./SocialIcons";

type LivePlatform = {
  name: string;
  handle: string;
  description: string;
  cta: string;
  href: string;
  Icon: (props: { size?: number }) => JSX.Element;
  highlight?: boolean;
};

const live: LivePlatform[] = [
  {
    name: "Instagram",
    handle: "@zae.smiles",
    description: "Daily content on social anxiety, psychology, and identity.",
    cta: "Follow on Instagram",
    href: SOCIAL_LINKS.instagram,
    Icon: InstagramIcon,
  },
  {
    name: "TikTok",
    handle: "@zae.smiles0",
    description: "Short-form videos. Skits. Social psychology content.",
    cta: "Follow on TikTok",
    href: SOCIAL_LINKS.tiktok,
    Icon: TikTokIcon,
  },
  {
    name: "Discord",
    handle: "UNMONITORED Community",
    description:
      "Free server. Drop in, ask questions, meet people working on the same thing.",
    cta: "Join the Discord",
    href: SOCIAL_LINKS.discord,
    Icon: DiscordIcon,
    highlight: true,
  },
];

const comingSoon = [
  {
    name: "YouTube",
    description: "Long-form video. Deeper breakdowns than the shorts and reels.",
    Icon: YouTubeIcon,
  },
  {
    name: "Spotify",
    description: "Long-form podcast on social anxiety and life advice for people who feel stuck.",
    Icon: SpotifyIcon,
  },
];

export default function Socials() {
  return (
    <section
      id="socials"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-4"
          style={{ color: "var(--cream)" }}
        >
          Platforms
        </h2>
        <p
          className="font-outfit font-light mb-12"
          style={{ color: "rgba(245,240,232,0.6)" }}
        >
          Follow along wherever you spend your time.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {live.map((p, i) => (
            <Reveal key={p.name} delay={i * 50} className={p.highlight ? "sm:col-span-2 lg:col-span-1" : ""}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.cta}, opens in new tab`}
                className="card-lift group h-full p-6 flex flex-col"
                style={{
                  backgroundColor: "var(--ink2)",
                  border: p.highlight ? "1px solid var(--gold)" : "1px solid rgba(245,240,232,0.12)",
                  minHeight: "200px",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div style={{ color: p.highlight ? "var(--gold)" : "var(--cream)" }}>
                    <p.Icon size={28} />
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-xl font-semibold"
                      style={{ color: "var(--cream)" }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="font-outfit text-xs"
                      style={{ color: "rgba(245,240,232,0.55)" }}
                    >
                      {p.handle}
                    </div>
                  </div>
                </div>
                <p
                  className="font-outfit font-light text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "rgba(245,240,232,0.7)" }}
                >
                  {p.description}
                </p>
                <span
                  className="font-outfit text-sm font-medium uppercase tracking-wide inline-flex items-center gap-2"
                  style={{ color: p.highlight ? "var(--gold)" : "var(--cream)" }}
                >
                  {p.cta}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                   &nbsp;&rarr;
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Not live yet: kept visible so people know they're coming, but not
            dressed up as cards you can click. */}
        <ul className="mt-4 grid sm:grid-cols-2 gap-4" aria-label="Coming soon">
          {comingSoon.map(({ name, description, Icon }) => (
            <li
              key={name}
              className="flex items-center gap-4 px-6 py-4"
              style={{ border: "1px dashed rgba(245,240,232,0.14)" }}
            >
              <span style={{ color: "rgba(245,240,232,0.4)" }}>
                <Icon size={22} />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="font-cormorant text-lg font-semibold" style={{ color: "rgba(245,240,232,0.75)" }}>
                    {name}
                  </span>
                  <span
                    className="font-outfit uppercase tracking-widest"
                    style={{ color: "var(--gold)", fontSize: "0.65rem" }}
                  >
                    Coming soon
                  </span>
                </div>
                <p className="font-outfit font-light text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
