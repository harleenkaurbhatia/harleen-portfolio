import type { ShowEntry } from "./types";

export const projects: ShowEntry[] = [
  {
    slug: "mumbai-flood-warning-system",
    category: "projects",
    title: "Mumbai Flood Warning System",
    subtitle: "Climate Studies, IIT Bombay",
    years: "2023 – 2024",
    tags: ["Product Strategy", "ML / Forecasting", "Cross-Functional Leadership"],
    color: "oklch(0.4 0.11 220)",
    synopsis:
      "A multi-platform flood warning system built in partnership with MCGM (Mumbai's city government) to give residents real-time, hyperlocal rainfall forecasts. Led a 20+ member product-engineering team from first concept to a citywide MVP, live across Web, iOS, and Android.",
    episodes: [
      {
        title: "The Problem",
        summary: "A city-wide forecast nobody could actually act on.",
        readTime: "4 min",
        body: "Mumbai floods every monsoon, and the forecast everyone actually had access to was written for the whole city at once — useful for a news headline, useless for deciding whether to leave the house or move a car before the water rises on a specific street. The gap wasn't a data problem; India Meteorological Department data existed. It was a translation problem: nobody had turned city-wide rainfall data into something a resident in a specific low-lying pocket of the city could act on in the next few hours. Launched a multi-platform flood warning system — Web, iOS, and Android — in collaboration with MCGM (Mumbai's municipal government) specifically to close that gap, built for residents who needed street-level information, not city-level averages.",
      },
      {
        title: "Building the Forecast Engine",
        summary: "Distilling ML models into a feature people could use.",
        readTime: "4 min",
        body: "The underlying forecasting models produced exactly the kind of output a data scientist wants and a resident can't use — raw probability distributions and grid-cell rainfall estimates. The product work was distilling that into a single user-facing 'hyperlocal forecast' feature: actionable 3-hourly and 3-day rainfall predictions tied to a resident's actual location, instead of a single city-wide number that told them nothing about their specific street. That distillation — deciding what granularity of forecast a non-technical resident could actually act on, and what to deliberately leave out of the interface — mattered more to whether the product got used than any improvement to the underlying model's accuracy.",
      },
      {
        title: "Shipping the MVP",
        summary: "Aligning MCGM and HDFC ERGO, then shipping everywhere.",
        readTime: "5 min",
        body: "Led the product-engineering collaboration across a 20+ member team, which meant aligning two very different stakeholders on what 'done' meant: MCGM, the city government partner, cared about civic reach and accuracy the city could stand behind publicly; HDFC ERGO, the insurance partner, cared about the risk-signaling use case and how the same data could inform claims and coverage decisions. Neither stakeholder's priorities were wrong, but they pulled the roadmap in different directions, and reconciling them into one shared MVP scope was as much of the job as the product work itself. The result shipped across every platform Mumbai actually uses — Web, iOS, and Android — taking the project from a Climate Studies coursework concept to a citywide-ready launch.",
      },
    ],
  },
  {
    slug: "pii-sanitizer",
    category: "projects",
    title: "PII Sanitizer for LLM Chat Tools",
    subtitle: "Personal Project",
    years: "Ongoing",
    tags: ["Privacy Tooling", "Chrome Extension", "Open Source"],
    color: "oklch(0.4 0.1 300)",
    repoUrl: "https://github.com/harleenkaurbhatia/pii-sanitizer",
    synopsis:
      "A local-only privacy tool for Claude.ai and ChatGPT — a Chrome extension paired with a FastAPI + Presidio backend that detects and redacts PII before any message leaves the user's machine.",
    episodes: [
      {
        title: "Redact Before It Leaves the Machine",
        summary: "Chrome extension + FastAPI/Presidio, fully local.",
        readTime: "4 min",
        body: "The premise is simple: nothing you type into an LLM chat should have to trust a remote server to keep it safe before you've even hit send. The tool is split into two pieces — a local FastAPI server running Microsoft's Presidio detection engine, and a Chrome extension that intercepts the send action on claude.ai and chatgpt.com before the message actually leaves the browser. The extension forwards the draft text to the local server on localhost, Presidio analyzes and redacts it, and only the sanitized version continues to the AI — the whole round trip happens on-machine, so the raw, unredacted message is never transmitted anywhere. The first run downloads a ~400MB spaCy language model that Presidio depends on for entity detection, cached afterward so it only happens once.",
      },
      {
        title: "10+ Categories, 6 Providers",
        summary: "Emails, SSNs, credit cards — and API keys too.",
        readTime: "3 min",
        body: "Engineered detection across 10+ PII categories (emails, phone numbers, SSNs, credit cards, addresses, names) plus custom regex recognizers for API keys and tokens across 6 providers, including OpenAI/Anthropic, AWS, GitHub, Slack, Google, and Stripe.",
      },
      {
        title: "Catching PII in Screenshots",
        summary: "OCR support for scanned PDFs and images.",
        readTime: "3 min",
        body: "Extended redaction to file uploads by adding OCR support for scanned PDFs and images, with a fallback heuristic that caught fragmented PII in low-quality scans — trading a small amount of over-redaction for zero missed-PII risk.",
      },
      {
        title: "Zero External Calls",
        summary: "Shipped fully local, open-sourced under MIT.",
        readTime: "3 min",
        body: "Shipped with zero external API calls and fully local inference, open-sourced under MIT — for a tool whose entire pitch is 'trust it with your sensitive data,' calling out to any third-party service, even a reputable one, would have undermined the premise. Detection depends only on the open-source Presidio library rather than a hosted classification API, and the extension itself doesn't store or transmit usage data — the server logs stay local, and the only network calls the extension makes are to localhost. If the local server is unreachable, the extension shows a red status badge and simply won't sanitize rather than silently letting an unredacted message through, since a privacy tool that fails open is worse than no privacy tool at all.",
      },
    ],
  },
  {
    slug: "dynamic-ad-placement",
    category: "projects",
    title: "DynamicAdPlacement",
    subtitle: "Personal Project — Antler Crackathon",
    years: "2025",
    tags: ["AI Video", "Top 75 of 1,200+"],
    color: "oklch(0.44 0.13 15)",
    repoUrl: "https://github.com/harleenkaurbhatia/dynamic-ad-placement",
    synopsis:
      "An AI-driven virtual product placement pipeline for OTT and streaming video that inserts ads into existing footage without reshoots. Selected top 75 of 1,200+ teams at the Antler Crackathon.",
    episodes: [
      {
        title: "Finding the Ad Slot",
        summary: "Blank billboards, unbranded props, silent dialogue gaps.",
        readTime: "4 min",
        body: "The detection stage samples frames from the uploaded video, transcribes the audio, and asks a vision-language model to score every candidate ad surface it can find — a blank billboard, an unbranded prop on a table, a screen showing nothing in particular — plus any silent gaps in the dialogue track. Results are cached per video so re-running placement on the same clip doesn't re-pay the detection cost. A separate 'directive' layer takes plain-English instructions like 'put a Coke can on the kitchen counter around 0:45' and resolves them to one of these detected slots, falling back to the nearest real opportunity if the exact ask isn't actually present in the footage.",
      },
      {
        title: "Targeting the Same Slot Differently, Per Viewer",
        summary: "Same scene, different brand, depending on who's watching.",
        readTime: "4 min",
        body: "A brand catalog (JSON per category — name, spoken name, generic terms it can replace, which scenes it fits, target audience, tagline) gets ranked against preset viewer segments defined by age band, gender, income, and interests. For the recommendation endpoint specifically, that ranking blends with how well a brand actually fits the content of the detected scene, not just the demographic profile in isolation — so two viewers watching the identical shot can be shown two different products in the same ad slot, matched to who they are rather than baked into the video once at export time.",
      },
      {
        title: "A Voice That Was Never There",
        summary: "Voice-cloned dialogue insertion, timed to the original pause.",
        readTime: "4 min",
        body: "Three separate placement engines handle the three ad types. Visual placement runs through Runway Aleph 2.0 for video-to-video compositing, matching lighting, perspective, and film grain so the inserted brand reads as part of the original shot rather than pasted on top. Audio placement writes a short ad line via an LLM and ducks it into a detected silent gap using edge-tts. Dialogue placement is the hardest of the three — it rewrites a line so a character says a brand name instead of a generic term, in that character's own cloned voice, timed to fit the existing pause — tried through Runway Seed Audio first, with local VoiceCraft, XTTS, and edge-tts as fallbacks so the feature still works without a paid API key, just with lower fidelity.",
      },
      {
        title: "Top 75 of 1,200+",
        summary: "What it took to place at the Antler Crackathon, and what it isn't yet.",
        readTime: "3 min",
        body: "Built as a hackathon/demo project — a Flask API backend plus a React/Vite frontend — inserting ads into existing footage without reshoots, and placing top 75 of 1,200+ teams at the Antler Crackathon. Worth being direct about scope: both the visual and dialogue engines depend on paid third-party APIs (OpenRouter for detection/LLM calls, Runway for compositing and default voice cloning) — only the local dialogue fallbacks run without them — and detection plus voice-cloned dialogue swaps run on CPU by default, so a longer clip takes real time. There's no auth on the API and no request validation beyond the happy path; it was built to prove the pipeline works end-to-end, not hardened for production traffic.",
      },
    ],
  },
  {
    slug: "sector-forecasting",
    category: "projects",
    title: "Nifty Sector Forecasting",
    subtitle: "Personal Project — Quantitative Finance",
    years: "2024",
    tags: ["Time Series", "SARIMAX", "Quant Research"],
    color: "oklch(0.42 0.1 165)",
    repoUrl: "https://github.com/harleenkaurbhatia/Sector-Analyis",
    synopsis:
      "A time-series model that forecasts Nifty sector indices using macroeconomic variables like GDP and inflation, rather than price history alone.",
    episodes: [
      {
        title: "Forecasting Nifty Auto With Macro Data",
        summary: "GDP and inflation as exogenous inputs, not just past prices.",
        readTime: "4 min",
        body: "Most simple index forecasts extrapolate from price history alone. This model instead uses SARIMAX — Seasonal AutoRegressive Integrated Moving Average with eXogenous regressors — to fold GDP and inflation into the prediction as exogenous variables, on the premise that a sector like Nifty Auto moves with the broader economy, not in isolation from it. Historical index data comes from Yahoo Finance across seven indices (Nifty Fifty, Auto, FMCG, IT, Media, Metal, Realty); GDP and inflation come in from separate macro datasets. The build focused on Nifty Auto specifically, with the same pipeline usable on the other six.",
      },
      {
        title: "Getting the Timing Right, Then Evaluating It",
        summary: "Why the macro data gets shifted by a year before it's used.",
        readTime: "4 min",
        body: "The trickiest part of the pipeline wasn't the model, it was alignment: index data and macro data don't arrive on the same clock. GDP and inflation figures for a given year aren't actually known until well after that year ends, so using same-year macro data to 'predict' that year's index would leak information the market didn't have yet. The fix was shifting macroeconomic data back by one year, so the model predicts using the prior year's GDP and inflation — resampling index data to yearly frequency to match, then merging the two on date once both were numeric and missing values were handled. The model was fit on a train split, evaluated on a held-out test split using mean squared error, and checked visually by plotting actual against predicted values rather than trusting a single error number in isolation.",
      },
    ],
  },
  {
    slug: "bike-manual-assistant",
    category: "projects",
    title: "Bike Manual Assistant",
    subtitle: "Personal Project — Multilingual Voice AI",
    years: "2025",
    tags: ["Voice AI", "RAG", "Multilingual"],
    color: "oklch(0.44 0.12 55)",
    repoUrl: "https://github.com/harleenkaurbhatia/sarvm",
    synopsis:
      "A single-file chat assistant that answers bike troubleshooting questions — by text or voice, in six Indian languages — grounded in the owner's actual manual PDF.",
    episodes: [
      {
        title: "Ask Your Bike's Manual a Question",
        summary: "Upload the owner's and service manuals, then just ask.",
        readTime: "3 min",
        body: "Most bike manuals are 200-page PDFs nobody actually reads until something's already wrong. This tool flips that: upload the owner's manual and, separately, the service manual, and ask questions in a normal chat interface instead of searching a table of contents. It's built as a single self-contained HTML file — no backend server — where the browser holds the API key locally and calls the Sarvam AI platform directly, which kept the whole project deployable as one static file with nothing to host or maintain.",
      },
      {
        title: "Building for Six Indian Languages",
        summary: "Voice in, voice out, in Hindi, Tamil, Telugu, Kannada, and Marathi too.",
        readTime: "3 min",
        body: "The language switcher isn't cosmetic — the assistant accepts and responds to voice input across English, Hindi, Tamil, Telugu, Kannada, and Marathi, using Sarvam AI's speech APIs, which are built specifically for Indian languages rather than adapted from an English-first model. That mattered because the actual owners of the entry-level and mid-range bikes these manuals cover are frequently more comfortable troubleshooting out loud in a regional language than typing technical terms in English — an English-only chat box would have solved the wrong problem for the actual user.",
      },
    ],
  },
  {
    slug: "expense-regulator",
    category: "projects",
    title: "Expense Regulator",
    subtitle: "Personal Project — Android, Phase 1",
    years: "2025",
    tags: ["Android", "Kotlin", "On-Device"],
    color: "oklch(0.4 0.09 200)",
    synopsis:
      "A native Android app that builds a spending log automatically by reading bank and UPI transaction SMS on-device — no bank linking, no cloud.",
    episodes: [
      {
        title: "Reading Transactions Straight From SMS",
        summary: "Real-time detection plus a full inbox scan, filtered for the real thing.",
        readTime: "4 min",
        body: "Built natively in Kotlin rather than as a cross-platform wrapper, since the core feature depends entirely on Android's SMS APIs. A BroadcastReceiver watches for new transaction SMS in real time, while a separate inbox scan sweeps existing messages on first launch. The harder problem was filtering: bank SMS inboxes are mostly noise — OTPs, promotional offers, EMI reminders — so detection runs on keyword and pattern matching tuned specifically to skip those (an OTP message and a debit alert can share several words) while catching the actual transaction signals: 'debited', 'spent', UPI references, and masked account/card patterns like 'XXXX XXXX' or 'ending with'.",
      },
      {
        title: "Designed to Never Leave the Phone",
        summary: "No bank linking, no cloud storage, no analytics — Phase 1 of 2.",
        readTime: "3 min",
        body: "Every piece of this — SMS reading, filtering, and display — runs entirely on-device, with no cloud storage, no external servers, and no analytics collecting usage data; the tradeoff for that privacy stance is that it can only see what arrives as SMS, not a full linked-account transaction history. Phase 1, which is built and working, covers detection, filtering, and a live scrollable list of what it found. Phase 2 is scoped but not yet built: parsing each SMS into structured fields (amount, bank, merchant), storing them in a local Room database, and adding basic categorization — turning a list of raw messages into an actual spending log.",
      },
    ],
  },
];
