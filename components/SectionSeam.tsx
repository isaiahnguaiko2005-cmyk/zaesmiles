export default function SectionSeam({ to }: { to: string }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ height: "64px", background: `linear-gradient(to bottom, transparent, ${to})` }}
      aria-hidden="true"
    />
  );
}
