"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const teaserProducts = [
  {
    title: "UNMONITORED",
    tag: "Flagship Product",
    description: "A book and 90-day recalibration system for social anxiety.",
    price: "$27+",
  },
  {
    title: "The Mitch Protocol",
    tag: "Conversational System",
    description: "5 real conversations broken down move by move.",
    price: "$2.99",
  },
];

export default function ProductsTeaser() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4 text-center"
          style={{ color: "var(--sage)" }}
        >
          Paid Systems
        </span>
        <h2
          className="font-cormorant font-semibold text-3xl lg:text-4xl mb-10 text-center"
          style={{ color: "var(--ink)" }}
        >
          For when free isn&apos;t enough anymore.
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {teaserProducts.map((product, i) => (
            <Reveal key={product.title} delay={i * 60}>
              <Link
                href="/products"
                className="p-6 h-full flex flex-col transition-transform duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--ink)",
                  border: "1px solid rgba(196,160,106,0.3)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(196,160,106,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,160,106,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span
                  className="font-outfit text-xs uppercase tracking-widest font-medium mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  {product.tag}
                </span>
                <h3
                  className="font-cormorant font-semibold text-2xl mb-2"
                  style={{ color: "var(--cream)" }}
                >
                  {product.title}
                </h3>
                <p
                  className="font-outfit font-light text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "rgba(245,240,232,0.65)" }}
                >
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-cormorant font-semibold text-xl"
                    style={{ color: "var(--gold)" }}
                  >
                    {product.price}
                  </span>
                  <span
                    className="font-outfit text-xs font-medium uppercase tracking-wide"
                    style={{ color: "var(--cream)" }}
                  >
                    View &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
