import Label from "@/components/site/Label";
import { RESUME_URL } from "@/lib/links";

export const metadata = { title: "Resume · Harleen Kaur" };

export default function ResumePage() {
  return (
    <main className="wrap">
      <section className="page-head">
        <Label>Resume</Label>
        <h1 className="h-page">Resume</h1>
        <div className="links">
          <a href={RESUME_URL} download className="btn btn-dark">
            Download PDF
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            Open in new tab ↗
          </a>
        </div>
      </section>
      <iframe src={RESUME_URL} title="Harleen Kaur resume" className="resume-frame" />
    </main>
  );
}
