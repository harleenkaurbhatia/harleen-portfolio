export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="label">
      <i className="px" />
      {children}
    </span>
  );
}
