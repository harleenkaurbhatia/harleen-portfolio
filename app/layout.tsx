import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harleen Kaur — The Series",
  description: "Product, AI, and a few unscripted detours — told as a series.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-bg text-text">
        <Suspense fallback={<div className="h-[68px]" />}>
          <Nav />
        </Suspense>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
