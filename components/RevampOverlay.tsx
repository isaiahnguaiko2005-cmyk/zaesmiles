export type RevampVariant = 1 | 2 | 3 | 4 | 5;

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

export default function RevampOverlay({ variant }: { variant: RevampVariant }) {
  switch (variant) {
    case 1:
      return <RibbonOverlay />;
    case 2:
      return <FrostedBadgeOverlay />;
    case 3:
      return <CautionFrameOverlay />;
    case 4:
      return <CornerTagOverlay />;
    case 5:
      return <StampOverlay />;
    default:
      return null;
  }
}

/** Variant 1 — a gold ribbon banner across the top-right corner. */
function RibbonOverlay() {
  return (
    <div
      className="absolute -right-14 top-7 w-52 text-center font-outfit text-[0.65rem] font-semibold uppercase tracking-widest"
      style={{
        transform: "rotate(45deg)",
        backgroundColor: "var(--gold)",
        color: "var(--ink)",
        padding: "6px 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      }}
      role="status"
    >
      Revamp in Progress
    </div>
  );
}

/** Variant 2 — a frosted-glass scrim with a centered pill badge. */
function FrostedBadgeOverlay() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(12,15,20,0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
      role="status"
    >
      <div
        className="flex items-center gap-2 font-outfit text-xs font-medium uppercase tracking-widest px-4 py-2"
        style={{
          border: "1px solid var(--gold)",
          color: "var(--gold)",
          backgroundColor: "rgba(12,15,20,0.75)",
        }}
      >
        <PulseDot />
        <WrenchIcon />
        Under Revamp
      </div>
    </div>
  );
}

/** Variant 3 — a hazard-stripe frame with a centered badge, construction-site energy. */
function CautionFrameOverlay() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none revamp-caution-frame"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center gap-2 font-outfit text-xs font-medium uppercase tracking-widest px-4 py-2"
          style={{
            backgroundColor: "var(--ink)",
            color: "var(--gold)",
            border: "1px solid var(--gold)",
          }}
          role="status"
        >
          <WrenchIcon />
          Revamp in Progress
        </div>
      </div>
    </>
  );
}

/** Variant 4 — a small, understated corner tag. Least intrusive option. */
function CornerTagOverlay() {
  return (
    <div
      className="absolute top-4 left-4 flex items-center gap-1.5 font-outfit text-[0.65rem] font-medium uppercase tracking-widest px-2.5 py-1"
      style={{
        backgroundColor: "rgba(12,15,20,0.85)",
        color: "var(--gold)",
        border: "1px solid rgba(196,160,106,0.5)",
      }}
      role="status"
    >
      <PulseDot />
      Revamp in Progress
    </div>
  );
}

/** Variant 5 — a rotated stamp treatment, like a rubber stamp across the card. */
function StampOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="false">
      <div
        className="font-outfit text-center font-semibold uppercase px-6 py-2"
        style={{
          transform: "rotate(-10deg)",
          border: "3px double var(--gold)",
          color: "var(--gold)",
          letterSpacing: "0.2em",
          fontSize: "1.1rem",
          backgroundColor: "rgba(12,15,20,0.35)",
        }}
        role="status"
      >
        Under Revamp
      </div>
    </div>
  );
}
