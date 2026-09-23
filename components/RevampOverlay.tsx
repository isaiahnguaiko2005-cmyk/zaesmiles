function WrenchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.5 5.5L3 18l3 3 6.2-6.2a4 4 0 0 0 5.5-5.5l-2.8 2.8-2-2 2.8-2.8Z" />
    </svg>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <span
        className="relative inline-flex rounded-full h-2 w-2"
        style={{ backgroundColor: "var(--gold)" }}
      />
    </span>
  );
}

/** Centered "Under Revamp" badge — no scrim or blur, so the card underneath stays legible. */
export default function RevampOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" role="status">
      <div
        className="flex items-center gap-2 font-outfit text-xs font-medium uppercase tracking-widest px-4 py-2"
        style={{
          border: "1px solid var(--gold)",
          color: "var(--gold)",
          backgroundColor: "rgba(12,15,20,0.85)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
        }}
      >
        <PulseDot />
        <WrenchIcon />
        Under Revamp
      </div>
    </div>
  );
}
