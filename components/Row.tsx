import Link from "next/link";
import type { ReactNode } from "react";

export default function Row({
  title,
  href,
  id,
  children,
}: {
  title: string;
  href?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <div className="mb-4 flex items-center gap-1.5">
        {href ? (
          <Link href={href} className="group flex items-center gap-1.5">
            <h2 className="text-xl font-bold">{title}</h2>
            <svg
              viewBox="0 0 20 20"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-text-faint transition-transform group-hover:translate-x-0.5"
            >
              <polyline points="7,4 13,10 7,16" />
            </svg>
          </Link>
        ) : (
          <h2 className="text-xl font-bold">{title}</h2>
        )}
      </div>
      <div className="row-track flex gap-4 overflow-x-auto pb-2">{children}</div>
    </section>
  );
}
