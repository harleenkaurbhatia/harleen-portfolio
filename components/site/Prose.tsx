export default function Prose({ text }: { text: string }) {
  return (
    <div className="prose">
      {text
        .trim()
        .split(/\n\n+/)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </div>
  );
}
