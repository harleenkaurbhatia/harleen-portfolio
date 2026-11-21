import Link from "next/link";
import Label from "@/components/site/Label";
import { LINKEDIN_URL, GITHUB_URL } from "@/lib/links";

export const metadata = { title: "Contact · Harleen Kaur" };

export default function ContactPage() {
  return (
    <main className="wrap">
      <section className="page-head">
        <Label>Contact</Label>
        <h1 className="h-page">Let&apos;s talk.</h1>
        <p className="lede">Open to product, founder&apos;s office and forward-deployed roles. LinkedIn is the fastest way to reach me.</p>
      </section>
      <ul className="contact-list">
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <span>LinkedIn ↗</span>
            <span>/in/harleenkauriitb</span>
          </a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <span>GitHub ↗</span>
            <span>@harleenkaurbhatia</span>
          </a>
        </li>
        <li>
          <Link href="/resume">
            <span>Resume →</span>
            <span>PDF</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
