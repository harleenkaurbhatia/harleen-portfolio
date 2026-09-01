"use client";

import { useRouter } from "next/navigation";

export default function CloseButton({ fallbackHref = "/" }: { fallbackHref?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallbackHref);
      }}
      aria-label="Close"
      className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-text backdrop-blur-sm hover:bg-black/70"
    >
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="4" y1="4" x2="16" y2="16" />
        <line x1="16" y1="4" x2="4" y2="16" />
      </svg>
    </button>
  );
}
