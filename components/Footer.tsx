import Link from "next/link";
import { DiscordIcon, InstagramIcon, SOCIAL_LINKS, TikTokIcon } from "./SocialIcons";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Free Guides", href: "/guides" },
  { label: "Products", href: "/products" },
  { label: "For Brands", href: "/partnerships" },
  { label: "Ask Mitch", href: "/ask" },
  { label: "Coaching", href: "/coaching" },
];

const SOCIALS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
  { label: "Discord", href: SOCIAL_LINKS.discord, Icon: DiscordIcon },
];

export default function Footer() {
  return (
    <footer
      className="py-14"
      style={{
        backgroundColor: "var(--ink)",
        borderTop: "1px solid rgba(196,160,106,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          <div>
            <Link
              href="/"
              className="font-cormorant text-xl font-medium tracking-widest uppercase mb-1 inline-block"
              style={{ color: "var(--gold)" }}
            >
              ZAE.SMILES
            </Link>
            <p
              className="font-outfit font-light text-sm"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Stop monitoring. Be in the room.
            </p>

            <div className="flex items-center gap-1 mt-5 -ml-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}, opens in new tab`}
                  className="link-icon flex items-center justify-center w-11 h-11"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Site map: a way back to every page from the bottom of any page */}
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-muted font-outfit text-sm inline-flex items-center min-h-[40px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-6 font-outfit text-xs"
          style={{
            color: "rgba(245,240,232,0.4)",
            borderTop: "1px solid rgba(245,240,232,0.06)",
          }}
        >
          <span>&copy; 2026 UNMONITORED. All rights reserved.</span>
          <span>Built by @zae.smiles</span>
        </div>
      </div>
    </footer>
  );
}
