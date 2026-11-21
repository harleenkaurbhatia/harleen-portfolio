import Link from "next/link";
import { LINKEDIN_URL, GITHUB_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <h2>Let&apos;s talk.</h2>
        <p>Open to product, founder&apos;s office and forward-deployed roles.</p>
        <div className="footer-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="fine">
          <span>© {new Date().getFullYear()} Harleen Kaur</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </footer>
  );
}
