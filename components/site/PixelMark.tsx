export default function PixelMark() {
  return (
    <svg className="pixel-mark" viewBox="0 0 8 8" shapeRendering="crispEdges" aria-hidden="true">
      <path d="M1 1h1v6H1zM6 1h1v6H6zM2 4h4v1H2z" fill="currentColor" />
      <path d="M6 0h2v1H6z" fill="var(--accent)" />
    </svg>
  );
}
