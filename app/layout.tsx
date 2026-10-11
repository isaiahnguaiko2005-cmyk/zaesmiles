import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

// Live site URL. Link previews (og:image etc.) are built from this, so it must be a
// domain that actually resolves. Swap to the custom domain once one is bought.
const SITE_URL = "https://zaesmiles.vercel.app";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  // Explicit (it's the default) so this font's build hash changes: Vercel's
  // build cache had served HTML with the previous build's Cormorant class,
  // leaving --font-cormorant empty and every serif heading in Outfit.
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  // 600 is the hero headline weight; without it the browser fakes bold.
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  themeColor: "#0C0F14",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Zae Smiles — UNMONITORED",
  description:
    "Stop monitoring yourself. Start being in the room. UNMONITORED is a 90-day recalibration system for social anxiety.",
  openGraph: {
    title: "Zae Smiles — UNMONITORED",
    description:
      "Social anxiety is not a personality trait. It is a calibration problem. I built UNMONITORED to fix it at the source.",
    url: SITE_URL,
    siteName: "Zae Smiles",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-sm font-outfit"
          style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
