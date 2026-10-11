import Link from "next/link";
import Reveal from "./Reveal";
import SectionSeam from "./SectionSeam";

const teaserProducts = [
  {
    title: "UNMONITORED",
    tag: "Flagship Product",
    description: "A book and 90-day recalibration system for social anxiety.",
    price: "$27+",
    href: "/products",
  },
  {
    title: "The Mitch Protocol",
    tag: "Conversational System",
    description:
      "The complete system for stepping into your most socially confident self, until Mitch is just you.",
    price: "Waitlist open",
    href: "/waitlist",
  },
];

export default function ProductsTeaser() {
  return (
    <section className="relative py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }}>
      <SectionSeam to="var(--ink)" />
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4 text-center"
          style={{ color: "var(--sage-deep)" }}
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
                href={product.href}
                className="card-lift group p-6 h-full flex flex-col"
                style={{
                  backgroundColor: "var(--ink)",
                  border: "1px solid rgba(196,160,106,0.3)",
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
                    className="font-outfit text-xs font-medium uppercase tracking-wide transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "var(--cream)" }}
                  >
                    View&nbsp;&rarr;
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
