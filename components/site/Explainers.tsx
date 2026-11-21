// Short looping explainers for projects that have no real footage.
// Each is a 640x360 SVG so it fills a 16:9 box at any size. Timing lives in globals.css (.ex-*).

const INK = "#0b0b0c";
const BLUE = "#002fa7";
const BLUE_SOFT = "#dbe3f7";
const LINE = "#e2e2e5";
const MUTED = "#6b6b70";
const PAPER = "#ffffff";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg className="ex" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      <rect width="640" height="360" fill="#f6f6f5" />
      {children}
    </svg>
  );
}

/* ---------- Mumbai Flood Warning ---------- */

// Pixel outline of Mumbai, north at the top: [row, firstCol, lastCol]
const MUMBAI: [number, number, number][] = [
  [0, 3, 11], [1, 2, 11], [2, 2, 12], [3, 2, 12], [4, 2, 11], [5, 2, 11], [6, 3, 11], [7, 3, 10],
  [8, 3, 10], [9, 3, 9], [10, 4, 9], [11, 4, 9], [12, 4, 8], [13, 5, 8], [14, 5, 8], [15, 5, 7],
  [16, 6, 7], [17, 6, 7], [18, 6, 6], [19, 6, 6],
];
const isWard = (r: number, c: number) => r >= 3 && r <= 6 && c >= 3 && c <= 6;

function Flood() {
  const cells: React.ReactNode[] = [];
  for (const [r, a, b] of MUMBAI) {
    for (let c = a; c <= b; c++) {
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={40 + c * 14}
          y={42 + r * 14}
          width="13"
          height="13"
          className={isWard(r, c) ? "ex-ward" : undefined}
          fill={isWard(r, c) ? BLUE : "#e9e9ec"}
        />,
      );
    }
  }
  return (
    <Frame label="Rain builds over a Mumbai ward, then a flood alert is sent to residents">
      <text x="40" y="28" className="ex-mono" fill={MUTED}>MCGM RAIN FEED · LIVE</text>
      {cells}
      {Array.from({ length: 14 }, (_, i) => (
        <line
          key={i}
          x1={60 + ((i * 37) % 170)}
          y1="0"
          x2={56 + ((i * 37) % 170)}
          y2="12"
          stroke={BLUE}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="ex-rain"
          style={{ animationDelay: `${(i * 0.17) % 1.1}s` }}
        />
      ))}

      <g transform="translate(300 60)">
        <text className="ex-mono" fill={MUTED}>RAINFALL · ANDHERI WEST</text>
        <rect y="14" width="290" height="10" rx="2" fill={LINE} />
        <rect y="14" width="290" height="10" rx="2" fill={BLUE} className="ex-grow" />
        <text y="44" className="ex-mono" fill={MUTED}>0 mm/hr</text>
        <text x="290" y="44" textAnchor="end" className="ex-mono" fill={INK}>68 mm/hr</text>
      </g>

      <g className="ex-in-55">
        <rect x="300" y="132" width="290" height="150" rx="14" fill={PAPER} stroke={LINE} />
        <rect x="320" y="154" width="10" height="10" fill={BLUE} />
        <text x="340" y="164" className="ex-mono" fill={MUTED}>FLOOD ALERT · NOW</text>
        <text x="320" y="200" className="ex-h" fill={INK}>Heavy rain in Andheri West</text>
        <text x="320" y="228" className="ex-b" fill={MUTED}>68 mm expected in the next 2 hours.</text>
        <text x="320" y="252" className="ex-b" fill={MUTED}>Avoid the SV Road underpass.</text>
      </g>
    </Frame>
  );
}

/* ---------- DynamicAdPlacement ---------- */

function AdPlacement() {
  return (
    <Frame label="A blank wall in existing video footage gets a product placed on it, no reshoot">
      <g transform="translate(70 34)">
        <rect width="500" height="260" rx="10" fill="#d9d4cb" />
        <rect y="190" width="500" height="70" fill="#b9b0a3" />
        <rect x="360" y="40" width="100" height="120" rx="4" fill="#eef2f6" stroke="#c9c2b6" strokeWidth="6" />
        <rect x="40" y="150" width="170" height="60" rx="10" fill="#7a6f63" />
        <rect x="30" y="130" width="40" height="80" rx="10" fill="#6b6155" />
        <rect x="180" y="130" width="40" height="80" rx="10" fill="#6b6155" />

        <g className="ex-scan">
          <rect x="70" y="32" width="200" height="96" fill="none" stroke={BLUE} strokeWidth="2" strokeDasharray="6 5" />
          <rect x="70" y="10" width="148" height="20" fill={BLUE} />
          <text x="78" y="24" className="ex-mono" fill="#fff">SURFACE FOUND · 0.94</text>
        </g>

        <g className="ex-in-50">
          <rect x="74" y="36" width="192" height="88" rx="4" fill={BLUE} />
          <rect x="94" y="52" width="22" height="56" rx="8" fill="#fff" />
          <rect x="99" y="46" width="12" height="10" rx="2" fill="#fff" />
          <text x="132" y="78" className="ex-h" fill="#fff">FRESH</text>
          <text x="132" y="100" className="ex-mono" fill="#c8d3f3">NOW IN STORES</text>
        </g>
      </g>

      <g transform="translate(70 312)">
        <rect width="500" height="4" rx="2" fill={LINE} />
        <rect width="500" height="4" rx="2" fill={INK} className="ex-progress" />
        <text y="28" className="ex-mono" fill={MUTED}>EPISODE 04 · 12:31</text>
        <g className="ex-in-55">
          <text x="500" y="28" textAnchor="end" className="ex-mono" fill={BLUE}>PLACED · NO RESHOOT</text>
        </g>
      </g>
    </Frame>
  );
}

/* ---------- Nifty Sector Forecasting ---------- */

function Forecast() {
  const actual = "M60 250 L95 232 L130 241 L165 210 L200 218 L235 190 L270 198 L305 168 L340 176";
  const forecast = "M340 176 L380 158 L420 150 L460 132 L500 126 L540 108";
  const band = "M340 176 L380 140 L420 126 L460 104 L500 92 L540 70 L540 146 L500 160 L460 160 L420 174 L380 176 Z";
  return (
    <Frame label="A Nifty sector index forecast drawn from macro inputs like GDP, inflation and rates">
      <text x="60" y="40" className="ex-mono" fill={MUTED}>NIFTY IT · SECTOR INDEX</text>
      {[90, 150, 210, 270].map((y) => (
        <line key={y} x1="60" x2="580" y1={y} y2={y} stroke={LINE} />
      ))}
      <line x1="340" x2="340" y1="60" y2="290" stroke={INK} strokeDasharray="3 4" />
      <text x="346" y="300" className="ex-mono" fill={MUTED}>TODAY</text>

      <path d={actual} fill="none" stroke={INK} strokeWidth="2.5" pathLength={1} className="ex-draw" />
      <path d={band} fill={BLUE_SOFT} className="ex-in-45" />
      <path d={forecast} fill="none" stroke={BLUE} strokeWidth="2.5" strokeDasharray="6 5" className="ex-in-45" />
      <g className="ex-in-60">
        <circle cx="540" cy="108" r="5" fill={BLUE} />
        <text x="530" y="92" textAnchor="end" className="ex-mono" fill={BLUE}>FORECAST</text>
      </g>

      {["GDP", "INFLATION", "RATES"].map((t, i) => (
        <g key={t} className={`ex-in-${15 + i * 10}`}>
          <rect x={60 + i * 96} y="312" width={86} height="26" rx="4" fill={PAPER} stroke={LINE} />
          <rect x={70 + i * 96} y="322" width="6" height="6" fill={BLUE} />
          <text x={84 + i * 96} y="329" className="ex-mono" fill={INK}>{t}</text>
        </g>
      ))}
      <text x="580" y="329" textAnchor="end" className="ex-mono" fill={MUTED}>INPUTS → MODEL</text>
    </Frame>
  );
}

/* ---------- Bike Manual Assistant ---------- */

const LANGS = ["English", "हिन्दी", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "मराठी"];

function BikeManual() {
  return (
    <Frame label="A rider asks why the bike won't start and gets an answer from the owner's manual">
      <g transform="translate(40 36)">
        <rect width="390" height="288" rx="14" fill={PAPER} stroke={LINE} />
        <text x="20" y="30" className="ex-mono" fill={MUTED}>BIKE ASSISTANT</text>
        <line x1="0" x2="390" y1="44" y2="44" stroke={LINE} />

        <g className="ex-in-10">
          <rect x="150" y="62" width="220" height="40" rx="12" fill={INK} />
          <text x="166" y="87" className="ex-b" fill="#fff">सुबह बाइक स्टार्ट नहीं होती</text>
        </g>

        <g className="ex-typing">
          <rect x="20" y="118" width="64" height="32" rx="12" fill="#f1f1f3" />
          {[38, 52, 66].map((cx, i) => (
            <circle key={cx} cx={cx} cy="134" r="3.5" fill={MUTED} className="ex-dot" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </g>

        <g className="ex-in-45">
          <rect x="20" y="118" width="300" height="84" rx="12" fill="#f1f1f3" />
          <text x="36" y="144" className="ex-b" fill={INK}>Pull the choke lever fully, then</text>
          <text x="36" y="166" className="ex-b" fill={INK}>start. Still no luck? Check the</text>
          <text x="36" y="188" className="ex-b" fill={INK}>spark plug gap (0.8–0.9 mm).</text>
        </g>
        <g className="ex-in-60">
          <rect x="20" y="214" width="184" height="26" rx="4" fill={BLUE_SOFT} />
          <rect x="30" y="224" width="6" height="6" fill={BLUE} />
          <text x="44" y="231" className="ex-mono" fill={BLUE}>OWNER&apos;S MANUAL · P. 42</text>
        </g>
      </g>

      <g transform="translate(460 36)">
        <text className="ex-mono" fill={MUTED} y="14">6 LANGUAGES</text>
        <rect x="-8" y="30" width="148" height="36" rx="6" fill={BLUE_SOFT} stroke={BLUE} className="ex-langs" />
        {LANGS.map((l, i) => (
          <text key={l} x="8" y={54 + i * 42} className="ex-b" fill={INK}>
            {l}
          </text>
        ))}
      </g>
    </Frame>
  );
}

/* ---------- Expense Regulator ---------- */

function Expense() {
  const rows = [
    ["Travel", "Uber", "₹230"],
    ["Groceries", "BigBasket", "₹1,120"],
    ["Bills", "Airtel", "₹599"],
  ];
  return (
    <Frame label="A bank SMS is read on the phone and turned into a categorised expense entry">
      <g transform="translate(40 60)">
        <g className="ex-in-5">
        <text className="ex-mono" fill={MUTED} y="-14">SMS · VM-HDFCBK</text>
        <rect width="250" height="96" rx="14" fill={PAPER} stroke={LINE} />
        <text x="18" y="32" className="ex-b" fill={INK}>Rs.450.00 debited from</text>
        <text x="18" y="54" className="ex-b" fill={INK}>A/c XX21 to SWIGGY via</text>
        <text x="18" y="76" className="ex-b" fill={INK}>UPI. Ref 4102…</text>
        </g>
      </g>

      <g className="ex-in-25">
        <line x1="300" x2="350" y1="108" y2="108" stroke={BLUE} strokeWidth="2" />
        <path d="M344 102 L352 108 L344 114" fill="none" stroke={BLUE} strokeWidth="2" />
        <text x="40" y="200" className="ex-mono" fill={BLUE}>PARSED ON-DEVICE · NO BANK LINK</text>
      </g>

      <g transform="translate(40 228)">
        {[
          ["FOOD", 150, true],
          ["GROCERIES", 210, false],
          ["BILLS", 110, false],
          ["TRAVEL", 70, false],
        ].map(([name, w, isNew], i) => (
          <g key={name as string} transform={`translate(0 ${i * 24})`}>
            <text y="12" className="ex-mono" fill={MUTED}>{name}</text>
            <rect x="84" y="2" width="166" height="12" rx="2" fill={LINE} />
            <rect
              x="84"
              y="2"
              width={(w as number) * 0.79}
              height="12"
              rx="2"
              fill={isNew ? BLUE : INK}
              className={isNew ? "ex-grow-late" : undefined}
            />
          </g>
        ))}
      </g>

      <g transform="translate(362 40)">
        <rect width="238" height="280" rx="14" fill={PAPER} stroke={LINE} />
        <text x="18" y="30" className="ex-mono" fill={MUTED}>THIS MONTH</text>
        <g className="ex-in-40">
          <rect x="10" y="46" width="218" height="48" rx="8" fill={BLUE_SOFT} />
          <text x="22" y="67" className="ex-h2" fill={INK}>Food</text>
          <text x="22" y="85" className="ex-mono" fill={MUTED}>SWIGGY · NEW</text>
          <text x="214" y="76" textAnchor="end" className="ex-h2" fill={BLUE}>₹450</text>
        </g>
        {rows.map(([cat, who, amt], i) => (
          <g key={cat} transform={`translate(0 ${104 + i * 56})`}>
            <line x1="18" x2="220" y1="-6" y2="-6" stroke={LINE} />
            <text x="22" y="17" className="ex-h2" fill={INK}>{cat}</text>
            <text x="22" y="35" className="ex-mono" fill={MUTED}>{who.toUpperCase()}</text>
            <text x="214" y="26" textAnchor="end" className="ex-h2" fill={INK}>{amt}</text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

export const explainers: Record<string, () => React.ReactElement> = {
  "mumbai-flood-warning-system": Flood,
  "dynamic-ad-placement": AdPlacement,
  "sector-forecasting": Forecast,
  "bike-manual-assistant": BikeManual,
  "expense-regulator": Expense,
};
