import type { ShowEntry } from "./types";

export const education: ShowEntry[] = [
  {
    slug: "iit-bombay",
    category: "education",
    title: "Indian Institute of Technology, Bombay",
    subtitle: "B.Tech, Chemical Engineering",
    years: "2022 – 2026",
    tags: ["Completed", "Minor in Management", "GPA 8.55/10"],
    color: "oklch(0.4 0.08 85)",
    synopsis:
      "B.Tech in Chemical Engineering with a Minor in Management, completed in 2026. The show that started it all — where the flood warning system, the first product internships, and the habit of shipping things solo all began.",
    episodes: [
      {
        title: "Chemical Engineering, Minor in Management",
        summary: "Two disciplines that turned out to overlap constantly.",
        readTime: "3 min",
        body: "Major in Chemical Engineering, Minor in Management — GPA 8.55/10. On paper these look like two unrelated tracks; in practice they turned out to be the same muscle applied to different problems. Chemical Engineering trains you to think in process systems — inputs, constraints, throughput, failure modes, the way a change at one stage of a pipeline ripples downstream to every stage after it. The Management minor gave that same instinct a business vocabulary: stakeholders instead of unit operations, tradeoffs instead of yield, roadmaps instead of reactor design. Running two concurrent capital projects at P&G later made the overlap concrete rather than theoretical — a plant is a process system, and the org chart around it is a second one layered on top of it.",
      },
      {
        title: "Where the Flood Project Came From",
        summary: "Climate Studies coursework that became a real product.",
        readTime: "3 min",
        body: "The Mumbai Flood Warning System started as coursework under Climate Studies at IIT Bombay, not as a startup idea or a hackathon entry — the assignment was to design something that addressed a real climate risk to the city, and Mumbai's monsoon flooding was an obvious, unavoidable choice given how many people it displaces every year. What made it different from most coursework was that it didn't stop at the report. The forecasting logic and the product framing were strong enough to take to MCGM, Mumbai's city government, and turn into an actual citywide MVP shipped across Web, iOS, and Android with a 20+ member product-engineering team — one of a handful of projects here that outgrew the classroom it was born in, and the clearest early evidence that the habit of shipping things solo, or shipping things at all, started well before any internship did.",
      },
      {
        title: "Four Years, Bittersweet Symphony",
        summary: "Graduating in 2026, and what four years on campus actually added up to.",
        readTime: "3 min",
        body: "Four years at IIT Bombay were, without question, a bittersweet symphony. They gave friends, surrounded a very ambitious cohort of people, and gave the best possible platform to make mistakes, learn from them, and never quite stop experimenting — a startup, research, clubs, more directions tried than any one person could fully commit to, which brought its own share of FOMO along with it. The campus became a genuine comfort zone, to the point that every next step now carries a little more fear than the last one did at 18. But the version of that fear at 22 is a different, more useful kind — less afraid of exploring and experimenting than the version that showed up on day one, and considerably less afraid of the wildlife that comes with four years of co-living with crocodiles and leopards on a campus that borders a national park. Graduating didn't feel like an ending so much as the point where the show's origin story closes and the next season actually starts.",
      },
    ],
  },
];
