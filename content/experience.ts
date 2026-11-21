import type { ShowEntry } from "./types";

export const experience: ShowEntry[] = [
  {
    slug: "pg-project-manager",
    category: "experience",
    title: "Procter & Gamble",
    subtitle: "Project Manager",
    years: "2026-Present",
    tags: ["Season 2", "Product Strategy", "Cross-Functional Leadership"],
    color: "oklch(0.42 0.09 250)",
    synopsis:
      "Ran capital projects at P&G end-to-end, from feasibility and design through funding, fabrication, and startup, working across cross-functional teams as the scope evolved.",
    episodes: [
      {
        title: "Two Projects, One Timeline",
        summary: "Running a new export sachet line and a selenium-based tech rollout at once.",
        readTime: "4 min",
        body: "Managed 2 concurrent capital projects (a new shampoo sachet export line built for Latin American markets, and a selenium-based technology rollout), alongside a plant area revamp running in parallel with both. None of the three shared a stakeholder set: the export line answered to a commercial team focused on a launch date tied to a regional market window, the technology rollout answered to engineering and safety sign-off, and the area revamp answered to the plant's own operating schedule. Running all three at once meant a change on one, a supplier delay on the sachet line, say, or a spec change on the selenium rollout, routinely had knock-on effects on the other two's timeline. So a meaningful part of the job was just keeping three separate stakeholder groups aware of dependencies they had no direct visibility into otherwise.",
      },
      {
        title: "The Money Side",
        summary: "Owning ₹3+ crore across active capital projects.",
        readTime: "3 min",
        body: "Delivered ₹3+ crore in capital projects, owning budget, timeline, and feasibility together rather than handing them off to separate owners the way larger, more siloed projects often do. That single-owner structure changes what a status update actually means: 'we're behind schedule' and 'we're over budget' stop being two conversations with two different owners and become one tradeoff conversation. It's slower to set up but harder to get wrong, since nobody can quietly protect their own metric at the expense of the project's actual health.",
      },
      {
        title: "Learning EWP",
        summary: "P&G's internal project methodology, roughly PMP-level.",
        readTime: "3 min",
        body: "Ran execution using P&G's EWP (Engineering Work Process) methodology, a structured framework roughly on par with PMP-level project certification, and the backbone for how every capital project gets scoped, funded, and signed off internally. The part of it that actually changes daily behavior is smaller than the name suggests: it forces a written feasibility case before anyone gets to invest real effort in a specific solution, so feasibility comes before design, design comes before funding, and funding comes before fabrication. That ordering sounds obvious on paper. It's very easy to skip under real deadline pressure though, which is exactly when skipping it gets expensive.",
      },
    ],
  },
  {
    slug: "magilabs-founder",
    category: "experience",
    title: "MagiLabs",
    subtitle: "Founder, AI Solutions Studio",
    years: "2025-2026",
    tags: ["Original Series", "AI Systems", "0 to 1"],
    color: "oklch(0.44 0.12 30)",
    synopsis:
      "Founded an applied AI studio building autonomous agents for real-world, noisy environments, and shipped 2 production AI systems that generated $20K+ in early revenue.",
    episodes: [
      {
        title: "Building the Text-to-Video Pipeline",
        summary: "How we turned 8-second clip generators into a coherent 2-minute story.",
        readTime: "5 min",
        body: "No text-to-video model generates more than a few coherent seconds, so the actual product was the orchestration layer around it. GPT-4 breaks a brief into roughly 15 timestamped scenes as structured JSON; each scene is generated against a locked character sheet so the same character doesn't drift in face or outfit from clip to clip; generation runs sequentially with the last frame of one clip feeding in as the first frame of the next (via Runway Gen-3 and Kling) to hold scene continuity; and FFmpeg stitches the accepted clips into a single video with crossfades. Character consistency was the hardest single problem to solve: fixing a character-sheet prompt with reference-image conditioning is what stopped faces and outfits from mutating clip to clip.",
      },
      {
        title: "The Self-Evaluation Loop",
        summary: "Why we didn't trust the model's first output, ever.",
        readTime: "4 min",
        body: "Every generated clip is graded before it ships: GPT-4V scores 3 keyframes per clip against a rubric (character fidelity, scene accuracy, visual quality, continuity), each on a 1-5 scale. Anything scoring under 4 on any axis gets regenerated, up to 3 times, before falling back to a flagged manual review. That loop alone moved human-approval from roughly 65% to 92%, without a person reviewing every clip by hand.",
      },
      {
        title: "Metrics That Mattered (Latency vs. Cost)",
        summary: "The tradeoff that actually ran the business.",
        readTime: "4 min",
        body: "Five numbers decided whether the system was actually working: output acceptance rate (92%, against a 90% target), API cost per video (the real unit economics, with budget alerts to catch runaway regen loops), end-to-end latency (cut from roughly 40 minutes to 18 by parallelizing independent scenes instead of generating them in sequence), hallucination/scene-mismatch rate (a clip-level quality signal separate from final acceptance), and regen rate (a proxy for both cost and speed, and the number that showed which scene types were consistently hardest to get right). Latency and cost pulled in opposite directions. Parallelizing sped things up but multiplied concurrent API spend, so most of the tuning work was finding where that tradeoff actually paid off.",
      },
      {
        title: "Reading a Room Through a Camera",
        summary: "Turning 'teacher energy' into something a model can actually measure.",
        readTime: "4 min",
        body: "Classroom engagement isn't something a model reads off pixels directly. It had to be translated into signals first: movement entropy (Shannon entropy on the teacher's position, tracked via YOLOv8 grid-zone tracking), interaction frequency (proximity and pose estimation via DeepSORT and MediaPipe), and response latency (silence-window measurement via voice-activity detection). The system was validated against 5 metrics: 90%+ detection reliability, a Pearson correlation above 0.75 against human ratings, under 10% false-alert rate, 85%+ session coverage, and deployment uptime. The goal wasn't a perfect score. It was a number a school could actually trust.",
      },
    ],
  },
  {
    slug: "remedo-pm-intern",
    category: "experience",
    title: "Remedo",
    subtitle: "Product Management Intern",
    years: "2025",
    tags: ["Guest Arc", "GTM", "Growth"],
    color: "oklch(0.4 0.1 150)",
    synopsis:
      "Built a GTM strategy for ConvertLens, identifying that high-value clinics had 3x higher LTV but 40% lower adoption than solo practices, then closed that gap from both the funnel and the product side.",
    episodes: [
      {
        title: "The LTV Paradox",
        summary: "High-value clinics were also the hardest to convert.",
        readTime: "4 min",
        body: "Built a GTM strategy for ConvertLens by segmenting the existing user base rather than treating every prospective clinic as the same funnel. The segmentation surfaced something counterintuitive: high-value Dental Service Organizations (DSOs, chains running 10 to 50 clinics) had a 3x higher lifetime value than solo practices, but a 40% lower adoption rate. That's the exact opposite of who should be easiest to onboard, and it meant the sales motion optimized for the wrong segment by default, spending the most effort on solo clinics that converted easily but were worth far less, while the highest-value accounts churned out of the funnel before they ever adopted.",
      },
      {
        title: "Fixing the Funnel",
        summary: "A 30% drop-off at demo-to-trial, and what closed it.",
        readTime: "4 min",
        body: "The funnel data showed a 30% drop-off specifically at the demo-to-trial stage: clinics that watched the full product demo but never started a trial within 48 hours, a gap that pointed to hesitation rather than disinterest. Closing it meant a new nurture sequence targeted at exactly that window rather than a generic follow-up cadence, and activation (defined as a user completing their first patient recall workflow within 7 days of signup) improved by 20% as a result. This was measured as a before/after cohort comparison across the four weeks before and after the sequence launched rather than a clean randomized test, which is a real limitation worth admitting. But the size and consistency of the shift held directionally across both cohorts.",
      },
      {
        title: "Writing the PRD",
        summary: "AI Patient Recall, from sales feedback to 15+ user stories.",
        readTime: "5 min",
        body: "The problem came directly from GTM feedback: reading through call transcripts from 15+ clinic conversations, the same complaint surfaced over and over: patients get treated once and never come back for their follow-up, and front desk staff are too stretched to chase every overdue patient by phone. That pattern, repeated across nearly every clinic, was the signal this was worth a full PRD rather than a small tweak. User research split into two personas with genuinely different jobs-to-be-done: front desk coordinators, who needed to identify overdue patients and reach out without losing a morning to manual list-pulling, and clinic owners or DSO managers, who cared about chair utilization and revenue they couldn't currently see leaking away.",
      },
      {
        title: "Designing the Recall Engine",
        summary: "Four modules, 15+ user stories, and one deliberate design constraint.",
        readTime: "5 min",
        body: "The resulting PRD specced a 4-module AI Patient Recall Engine. Patient risk scoring ranked every patient by recall urgency: days since last visit weighted heavily (180+ days flagged high urgency), plus treatment type, appointment/cancellation history, and insurance renewal timing, all feeding into a single prioritized list. Personalized messaging generated outreach that referenced the patient's actual treatment history instead of a generic template, since early testing showed generic messages read as spam and referenced ones got measurably better response rates. Optimal send-time scheduling used historical response data to pick the highest-response windows, typically Tuesday through Thursday, 10am-12pm or 6-8pm, and scheduled sends automatically rather than leaving timing to whoever happened to be at the front desk. Response tracking and handoff was the one deliberate design constraint in the whole spec: keep a human in the loop only at the booking-confirmation step, never earlier, so the front desk's time went toward the one moment that actually needed judgment instead of the repetitive parts that didn't. The full spec ran to 15+ user stories, and the recall workflow it described is what drove the 20% drop in activation-stage churn.",
      },
    ],
  },
  {
    slug: "pg-product-supply-intern",
    category: "experience",
    title: "Procter & Gamble",
    subtitle: "Product Supply Intern",
    years: "2025",
    tags: ["Season 1", "ML", "Manufacturing"],
    color: "oklch(0.42 0.09 250)",
    synopsis:
      "Spearheaded an internal ML control-logic product (95% prediction accuracy), generating $70M in annualized value by cutting material waste to a record-low 0.4%, the internship that led to the PPO.",
    episodes: [
      {
        title: "$70M From a Control Loop",
        summary: "An ML product that cut riddling losses to 0.4%.",
        readTime: "5 min",
        body: "'Riddling' is manufacturing terminology from glass and bottle production (the process of rotating and settling bottles on the line), and riddling losses are the breakage and waste that happen during it. Spearheaded an internal ML control-logic product, built with the data science team, that predicted optimal control parameters to minimize exactly that: 95% prediction accuracy, cutting material waste to a record-low 0.4% and generating $70M in annualized value, calculated by the plant finance team from the resulting material-cost savings. The data science team owned the model itself; the product contribution was defining the requirements it needed to satisfy and running the validation that proved it was safe to trust on a live line: 30+ A/B trials, a written validation protocol, and stakeholder sign-off across both engineering and operations before it touched real product. It shipped as an internal tool used by real operators every shift, not a proof-of-concept that stayed in a slide deck.",
      },
      {
        title: "Benchmarking 5 Sites",
        summary: "Turning scattered best practices into shared ones.",
        readTime: "3 min",
        body: "Every plant site tends to accumulate its own local fixes and workarounds that never make it back to a shared playbook. Someone finds a better calibration setting, it stays on that line, and every other site keeps solving the same problem independently. Benchmarked 5+ global sites specifically to surface those scattered, undocumented best practices, then partnered with engineering and data science to integrate 3 of the strongest ones into how the line actually ran, turning site-local knowledge into a shared standard rather than leaving it to spread by word of mouth.",
      },
      {
        title: "Zero Incidents, 50+ Operators",
        summary: "Validating the system before it touched a live line.",
        readTime: "4 min",
        body: "A prediction model is only as good as the trust operators place in it, and that trust has to be earned before rollout, not after an incident. Validated the new production system through 30+ A/B tests and live plant trials before it went anywhere near full production, checking not just prediction accuracy in isolation but stability under real operating conditions, shift changes, and edge cases the training data hadn't seen. The result was 100% stability and a zero-incident rollout to 50+ operators across the site, which is what ultimately turned the internship into a return offer. The rollout was the proof point, not the model's accuracy number on its own.",
      },
    ],
  },
];
