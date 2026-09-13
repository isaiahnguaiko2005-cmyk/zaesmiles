"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const monthlyStats = [
  { label: "Loan Payment", value: "$393 – $533" },
  { label: "Insurance", value: "$350 – $550" },
  { label: "Maintenance", value: "$300 – $550" },
  { label: "Tires (amortized)", value: "$50 – $100" },
  { label: "Fuel", value: "$100 – $150" },
];

const oneTimeStats = [
  { label: "Sales Tax (PA, 6%)", value: "$1,680 – $2,280" },
  { label: "Title & Registration", value: "$100 – $200" },
  { label: "Pre-Purchase Inspection", value: "$150 – $300" },
];

export default function JaguarFType() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -14, y: x * 18 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      id="jaguar-fund"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span
          className="font-outfit text-xs uppercase tracking-widest font-medium block mb-4 text-center"
          style={{ color: "var(--gold)" }}
        >
          Why This Car
        </span>
        <h2
          className="font-cormorant font-semibold mb-4 text-center"
          style={{
            color: "var(--cream)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.1,
          }}
        >
          Why the Jaguar F-Type
        </h2>
        <p
          className="font-outfit font-light text-center mb-4"
          style={{ color: "rgba(245,240,232,0.5)" }}
        >
          2018 F-TYPE &middot; V6 340hp &middot; S / R-Dynamic &middot; Coupe
        </p>

        {/* Holographic projection */}
        <div
          ref={containerRef}
          className="relative flex justify-center items-center my-8 lg:my-4"
          style={{ perspective: "1000px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`hologram-pop ${visible ? "hologram-visible" : ""}`}
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="hologram-float">
              <div
                className="relative hologram-flicker mx-auto"
                style={{
                  width: "min(85vw, 460px)",
                  aspectRatio: "1 / 1",
                  border: "1px solid var(--gold)",
                  boxShadow:
                    "0 0 40px rgba(143,217,232,0.25), 0 0 70px rgba(196,160,106,0.2)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/jaguar-ftype.png"
                  alt="2018 Jaguar F-Type coupe"
                  fill
                  className="object-cover"
                  style={{ filter: "contrast(1.12) saturate(1.2) brightness(0.95)" }}
                  priority
                />

                {/* Gold/cyan duotone wash */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(143,217,232,0.35) 0%, transparent 45%, rgba(196,160,106,0.3) 100%)",
                    mixBlendMode: "color",
                  }}
                />

                {/* Holographic grid texture */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(143,217,232,0.12) 0px, rgba(143,217,232,0.12) 1px, transparent 1px, transparent 4px)",
                    opacity: 0.5,
                  }}
                />

                {/* Scanline sweep */}
                <div
                  className="absolute left-0 right-0 pointer-events-none hologram-scanline"
                  style={{
                    height: "35%",
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(143,217,232,0.35) 50%, transparent 100%)",
                  }}
                />

                {/* Edge vignette to blend into the ink background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 60px rgba(12,15,20,0.65)",
                  }}
                />
              </div>

              {/* Projector base */}
              <div
                className="mx-auto hologram-ring"
                style={{
                  width: "min(60vw, 340px)",
                  height: "10px",
                  marginTop: "12px",
                  borderRadius: "999px",
                  background:
                    "radial-gradient(ellipse at center, rgba(143,217,232,0.5) 0%, rgba(196,160,106,0.25) 45%, transparent 75%)",
                  filter: "blur(2px)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-8">
          {/* Description */}
          <div
            className="font-outfit font-light leading-relaxed space-y-4"
            style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem" }}
          >
            <p>
              Most people building a brand around social anxiety would not
              pick a car that gets stared at. That is the point.
            </p>
            <p>
              The F-Type is not the safe choice. It is not the car people
              expect from someone who talks about nervous systems and
              self-monitoring for a living. That is exactly why it works.
              Every time it shows up on camera, it does the thing this brand
              is actually about: being seen without flinching.
            </p>
            <p>
              There is also a practical case underneath the symbolic one.
              The 2018 model year sits at the point where Jaguar had worked
              through the early production issues from the car&apos;s first
              few years on the market, while keeping the original body
              design, the one with the aggression and the E-Type nose that
              got softened in the 2021 redesign. It photographs and films
              better than almost anything in its price range. Cheaper cars
              do not turn heads on camera. More expensive cars do not leave
              room for the bet to feel real.
            </p>
            <p>
              The car is not the goal. It is the proof. $8,400 down on a
              $28,000 car is the same math as the whole mission: 30
              percent, on a deadline, in public, with no guarantee it works
              out. If it gets funded, it means the system worked. If it does
              not, that is public too.
            </p>
          </div>

          {/* Stats */}
          <div>
            <div
              className="p-6 mb-4"
              style={{
                backgroundColor: "var(--ink2)",
                border: "1px solid var(--gold)",
              }}
            >
              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-3"
                style={{ color: "var(--gold)" }}
              >
                Headline Number (Conservative Case)
              </span>
              <div
                className="font-cormorant font-semibold"
                style={{ color: "var(--cream)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                $28,000 car &middot; $8,400 down &middot; $1,193/mo all-in
              </div>
            </div>

            <div
              className="p-6"
              style={{
                backgroundColor: "var(--ink2)",
                border: "1px solid rgba(196,160,106,0.25)",
              }}
            >
              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-1"
                style={{ color: "var(--gold)" }}
              >
                Purchase Price Target
              </span>
              <div
                className="font-cormorant font-semibold text-2xl mb-1"
                style={{ color: "var(--cream)" }}
              >
                $28,000 &ndash; $38,000
              </div>
              <p
                className="font-outfit font-light text-xs mb-5"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                Down payment (30%): $8,400 &ndash; $11,400 &middot; Financing:
                60 months at 7.5% APR
              </p>

              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-3"
                style={{ color: "var(--gold)" }}
              >
                Monthly Cost of Ownership
              </span>
              <ul className="space-y-2 mb-5">
                {monthlyStats.map((s) => (
                  <li
                    key={s.label}
                    className="flex justify-between font-outfit text-sm"
                    style={{ color: "rgba(245,240,232,0.7)" }}
                  >
                    <span>{s.label}</span>
                    <span style={{ color: "var(--cream)" }}>{s.value}/mo</span>
                  </li>
                ))}
              </ul>
              <div
                className="flex justify-between font-outfit text-sm font-medium pt-3 mb-5"
                style={{
                  color: "var(--gold)",
                  borderTop: "1px solid rgba(196,160,106,0.2)",
                }}
              >
                <span>Total Monthly Cost</span>
                <span>$1,193 &ndash; $1,883/mo</span>
              </div>

              <span
                className="font-outfit text-xs uppercase tracking-widest font-medium block mb-3"
                style={{ color: "var(--gold)" }}
              >
                One-Time Costs at Purchase
              </span>
              <ul className="space-y-2">
                {oneTimeStats.map((s) => (
                  <li
                    key={s.label}
                    className="flex justify-between font-outfit text-sm"
                    style={{ color: "rgba(245,240,232,0.7)" }}
                  >
                    <span>{s.label}</span>
                    <span style={{ color: "var(--cream)" }}>{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
