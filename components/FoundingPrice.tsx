import { FOUNDING_PERCENT_OFF, FOUNDING_PRICE, REGULAR_PRICE } from "@/lib/launch";

/** Regular price struck through, founding price, and the shimmering "% off" badge. */
export default function FoundingPrice({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <div className={`flex items-center flex-wrap ${big ? "gap-4 justify-center" : "gap-3"}`}>
      <span
        className={`font-cormorant font-semibold ${big ? "text-6xl" : "text-3xl"}`}
        style={{ color: "var(--gold)", fontVariantNumeric: "tabular-nums" }}
      >
        ${FOUNDING_PRICE}
      </span>
      <span
        className={`font-outfit ${big ? "text-xl" : "text-base"} line-through`}
        style={{ color: "rgba(245,240,232,0.5)", fontVariantNumeric: "tabular-nums" }}
      >
        <span className="sr-only">Regular price </span>${REGULAR_PRICE}
      </span>
      <span
        className="badge-shimmer font-outfit font-medium uppercase tracking-widest px-3 py-1"
        style={{
          backgroundColor: "var(--gold)",
          color: "var(--ink)",
          fontSize: big ? "0.8rem" : "0.7rem",
        }}
      >
        {FOUNDING_PERCENT_OFF}% off founding price
      </span>
    </div>
  );
}
