"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0 rounded-full overflow-hidden"
              style={{ border: "2px solid var(--gold)" }}
            >
              {imgError ? (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{ backgroundColor: "var(--cream2)" }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    style={{ color: "rgba(12,15,20,0.3)" }}
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span
                    className="font-outfit text-sm"
                    style={{ color: "rgba(12,15,20,0.4)" }}
                  >
                    Photo coming soon
                  </span>
                </div>
              ) : (
                <Image
                  src="/mitch.png"
                  alt="Mitch, creator of UNMONITORED"
                  fill
                  unoptimized
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="mb-4">
              <span
                className="font-cormorant text-3xl lg:text-4xl font-semibold"
                style={{ color: "var(--ink)" }}
              >
                Mitch
              </span>
              <span
                className="font-outfit text-sm ml-3"
                style={{ color: "var(--gold)" }}
              >
                @zae.smiles
              </span>
            </div>

            <div
              className="font-outfit font-light leading-relaxed space-y-4 mb-8"
              style={{ color: "var(--ink)", fontSize: "1rem" }}
            >
              <p>
                I am a 21-year-old content creator and founder building
                UNMONITORED, a book and 90-day recalibration system for people
                who are socially exhausted, not socially unskilled.
              </p>
              <p>
                Social anxiety is not a personality trait. It is a calibration
                problem. I built UNMONITORED to fix it at the source.
              </p>
              <p>
                Project 300K is the 183-day public challenge (June 30 – Dec 30)
                where I grow this brand to 300,000 followers across TikTok
                and Instagram, while building a real business around it. I
                document everything, and it&apos;s all laid out
                next: the goals, the live tracker, and the reasoning behind
                every part of it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
