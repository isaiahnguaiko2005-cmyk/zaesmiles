"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DiscordIcon, InstagramIcon, SOCIAL_LINKS, TikTokIcon } from "./SocialIcons";

const LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Free Guides", href: "/guides" },
  { label: "Products", href: "/products" },
  { label: "For Brands", href: "/partnerships" },
  { label: "Ask", href: "/ask" },
  { label: "Coaching", href: "/coaching" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes (including back/forward).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the menu, and the page behind it stops scrolling while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-[background-color,border-color,box-shadow] duration-300"
      style={{
        backgroundColor: scrolled || open ? "rgba(12,15,20,0.97)" : "rgba(12,15,20,0.85)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(10px)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(196,160,106,0.3)" : "1px solid rgba(196,160,106,0.12)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
      }}
    >
      {/* Logo + desktop links, grouped left so the header doesn't read as two
          islands with a dead gap between them */}
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="font-cormorant text-xl font-medium tracking-widest uppercase flex-shrink-0"
          style={{ color: "var(--gold)" }}
        >
          ZAE.SMILES
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link font-outfit text-sm font-medium tracking-wide py-2${active ? " is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Discord, opens in new tab"
            className="link-cream flex items-center justify-center w-10 h-10"
          >
            <DiscordIcon size={22} />
          </a>
        </div>
      </div>

      {/* CTA: anchors the right edge so the header reads as one balanced bar */}
      <Link
        href="/guides"
        className="btn btn-gold hidden lg:inline-flex flex-shrink-0"
        style={{ minHeight: "40px", padding: "10px 22px" }}
      >
        Free Guides
      </Link>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 -mr-2"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span
          className="block w-6 h-0.5 transition-transform duration-200"
          style={{
            backgroundColor: "var(--cream)",
            transform: open ? "translateY(8px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block w-6 h-0.5 transition-opacity duration-200"
          style={{ backgroundColor: "var(--cream)", opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-6 h-0.5 transition-transform duration-200"
          style={{
            backgroundColor: "var(--cream)",
            transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu absolute top-full left-0 right-0 flex flex-col py-4 lg:hidden overflow-y-auto overscroll-contain"
          style={{
            backgroundColor: "var(--ink)",
            borderBottom: "1px solid rgba(196,160,106,0.2)",
            maxHeight: "calc(100dvh - 73px)",
          }}
        >
          <div className="flex items-center gap-3 px-6 pb-4 mb-2" style={{ borderBottom: "1px solid rgba(196,160,106,0.15)" }}>
            <div
              className="relative rounded-full overflow-hidden flex-shrink-0"
              style={{ width: "44px", height: "44px", border: "1px solid var(--gold)" }}
            >
              <Image src="/mitch.webp" alt="" fill unoptimized sizes="44px" className="object-cover" />
            </div>
            <div>
              <div className="font-cormorant text-lg font-semibold" style={{ color: "var(--cream)" }}>
                Mitch
              </div>
              <div className="font-outfit text-xs" style={{ color: "var(--gold)" }}>
                @zae.smiles
              </div>
            </div>
          </div>

          {LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="font-outfit text-base px-6 py-3 tracking-wide flex items-center gap-3"
                style={{ color: active ? "var(--gold)" : "var(--cream)" }}
                onClick={() => setOpen(false)}
              >
                <span
                  aria-hidden="true"
                  className="block w-1 h-1 rounded-full"
                  style={{ backgroundColor: active ? "var(--gold)" : "transparent" }}
                />
                {item.label}
              </Link>
            );
          })}

          <div className="flex items-center gap-2 px-4 pt-4 mt-2" style={{ borderTop: "1px solid rgba(196,160,106,0.15)" }}>
            {[
              { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
              { label: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
              { label: "Discord", href: SOCIAL_LINKS.discord, Icon: DiscordIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}, opens in new tab`}
                className="link-icon flex items-center justify-center w-11 h-11"
                onClick={() => setOpen(false)}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
