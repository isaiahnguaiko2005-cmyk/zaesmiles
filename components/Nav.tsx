"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        backgroundColor: "rgba(12,15,20,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(196,160,106,0.15)",
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
          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-outfit text-sm font-medium tracking-wide transition-colors hover:text-gold"
              style={{ color: "rgba(245,240,232,0.7)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,240,232,0.7)")
              }
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/vWhm6srVqz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Discord"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--cream)" }}
          >
            <DiscordIcon />
          </a>
        </div>
      </div>

      {/* CTA — anchors the right edge so the header reads as one balanced
          bar instead of a logo and a link cluster floating apart */}
      <Link
        href="/guides"
        className="hidden lg:inline-flex items-center justify-center font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] flex-shrink-0"
        style={{
          backgroundColor: "var(--gold)",
          color: "var(--ink)",
          padding: "10px 22px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 18px rgba(196,160,106,0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        Free Guides
      </Link>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span
          className="block w-6 h-0.5 transition-all"
          style={{
            backgroundColor: "var(--cream)",
            transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all"
          style={{
            backgroundColor: "var(--cream)",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all"
          style={{
            backgroundColor: "var(--cream)",
            transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col py-4 lg:hidden"
          style={{ backgroundColor: "var(--ink)", borderBottom: "1px solid rgba(196,160,106,0.2)" }}
        >
          <div className="flex items-center gap-3 px-6 pb-4 mb-2" style={{ borderBottom: "1px solid rgba(196,160,106,0.15)" }}>
            <div
              className="relative rounded-full overflow-hidden flex-shrink-0"
              style={{ width: "44px", height: "44px", border: "1px solid var(--gold)" }}
            >
              <Image src="/mitch.png" alt="Mitch" fill unoptimized className="object-cover" />
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

          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-outfit text-sm px-6 py-3 tracking-wide"
              style={{ color: "var(--cream)" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-5 px-6 pt-4 mt-2" style={{ borderTop: "1px solid rgba(196,160,106,0.15)" }}>
            <a
              href="https://www.instagram.com/zae.smiles"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "rgba(245,240,232,0.6)" }}
              onClick={() => setOpen(false)}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@zae.smiles0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{ color: "rgba(245,240,232,0.6)" }}
              onClick={() => setOpen(false)}
            >
              <TikTokIcon />
            </a>
            <a
              href="https://discord.gg/vWhm6srVqz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              style={{ color: "rgba(245,240,232,0.6)" }}
              onClick={() => setOpen(false)}
            >
              <DiscordIcon />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
