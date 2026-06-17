export function GrainOverlay() {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>`;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-multiply"
      style={{
        opacity: 0.07,
        backgroundImage: `url("data:image/svg+xml;utf8,${svg}")`,
      }}
    />
  );
}
