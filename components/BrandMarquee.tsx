"use client";

import Image from "next/image";

export interface Brand {
  name: string;
  logo: string;
}

// One "lap" repeats the brand set 3x so a short logo list still reads as a
// continuous flow instead of an obvious 1-2-3 loop. The whole lap is then
// rendered twice back-to-back so a translateX(-50%) loop is seamless — same
// technique mavgpt.ai uses for its brand-partner strip.
function buildTrack(brands: Brand[]): Brand[] {
  const lap = [...brands, ...brands, ...brands];
  return [...lap, ...lap];
}

export default function BrandMarquee({
  brands,
  fadeColor = "var(--cream)",
}: {
  brands: Brand[];
  fadeColor?: string;
}) {
  const logos = buildTrack(brands);

  return (
    <div
      className="relative overflow-hidden"
      style={{ border: "1px solid rgba(12,15,20,0.1)" }}
    >
      {/* Edge fade so logos flow in/out instead of clipping hard */}
      <div
        className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
        aria-hidden="true"
      />
      <div className="brand-marquee-track flex items-center gap-8 w-max py-6 px-4">
        {logos.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center justify-center shrink-0 p-3 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            style={{ width: "132px", height: "68px", backgroundColor: "#FFFFFF", border: "1px solid rgba(12,15,20,0.06)" }}
          >
            <div className="relative w-full h-full">
              <Image src={brand.logo} alt={brand.name} fill unoptimized className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
