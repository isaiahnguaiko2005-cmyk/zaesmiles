import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zae Smiles — UNMONITORED";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0C0F14",
          border: "2px solid #C4A06A",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src="https://zaesmiles.vercel.app/mitch.png"
            width={420}
            height={420}
            alt=""
            style={{
              objectFit: "cover",
              border: "3px solid #C4A06A",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 70px 60px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#C4A06A",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            ZAE.SMILES
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#F5F0E8",
              fontSize: 52,
              lineHeight: 1.15,
              fontWeight: 600,
              marginBottom: 28,
            }}
          >
            <span>Stop monitoring yourself.</span>
            <span>Start being in the room.</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(245,240,232,0.6)",
              fontSize: 24,
              fontWeight: 300,
            }}
          >
            UNMONITORED · Project 300K
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
