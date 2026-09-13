import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaesmiles.com"),
  title: "Zae Smiles — UNMONITORED",
  description:
    "Stop monitoring yourself. Start being in the room. UNMONITORED is a 90-day recalibration system for social anxiety.",
  openGraph: {
    title: "Zae Smiles — UNMONITORED",
    description:
      "Social anxiety is not a personality trait. It is a calibration problem. I built UNMONITORED to fix it at the source.",
    url: "https://zaesmiles.com",
    siteName: "Zae Smiles",
  },
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
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
