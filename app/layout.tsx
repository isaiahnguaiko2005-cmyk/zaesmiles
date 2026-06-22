import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
