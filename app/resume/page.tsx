import { RESUME_URL } from "@/lib/links";

export const metadata = { title: "Resume · Harleen Kaur" };

export default function ResumePage() {
  return (
    <main className="wrap resume">
      <div className="resume-bar">
        <h1>Resume</h1>
        <div className="links">
          <a href={RESUME_URL} download className="btn btn-dark">
            Download PDF
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            Open full size ↗
          </a>
        </div>
      </div>
      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="resume-page">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/resume.webp" alt="Harleen Kaur resume" width={1854} height={2400} />
      </a>
    </main>
  );
}
