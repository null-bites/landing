type Scene = {
  n: string;
  title: string;
  caption: string;
  icon: React.ReactNode;
};

function AiCore() {
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="sc-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
          <stop offset="70%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="70" fill="url(#sc-core-glow)" />
      {/* Orbit rings */}
      {[35, 50, 65].map((r, i) => (
        <circle
          key={r}
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity={0.7 - i * 0.15}
        />
      ))}
      {/* Orbiting particles using SMIL animation */}
      <circle r="3.5" fill="var(--accent)">
        <animateMotion
          dur="3.8s"
          repeatCount="indefinite"
          path="M 115 80 A 35 35 0 1 1 45 80 A 35 35 0 1 1 115 80"
        />
      </circle>
      <circle r="2.5" fill="var(--accent-warm)">
        <animateMotion
          dur="5.5s"
          repeatCount="indefinite"
          path="M 130 80 A 50 50 0 1 0 30 80 A 50 50 0 1 0 130 80"
        />
      </circle>
      <circle r="2" fill="var(--accent-ink)">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          path="M 145 80 A 65 65 0 1 1 15 80 A 65 65 0 1 1 145 80"
        />
      </circle>
      {/* Core */}
      <circle
        cx="80"
        cy="80"
        r="16"
        fill="var(--bg)"
        stroke="var(--accent)"
        strokeWidth="1.2"
      />
      <circle cx="80" cy="80" r="5" fill="var(--accent)" className="pulse-dot" />
    </svg>
  );
}

function RankBars() {
  const bars = [18, 32, 48, 62, 78, 52, 38, 24];
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden>
      <g transform="translate(20 130) scale(1 -1)">
        {bars.map((h, i) => {
          const isTop = h >= 70;
          return (
            <g key={i}>
              <rect
                x={i * 15}
                y={0}
                width={10}
                height={h}
                fill={isTop ? "var(--accent)" : "var(--border-strong)"}
                opacity={isTop ? 1 : 0.5}
                rx="1.5"
              >
                <animate
                  attributeName="height"
                  values={`${h};${h - 6};${h + 4};${h}`}
                  dur={`${2 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          );
        })}
      </g>
      {/* baseline */}
      <line
        x1="20"
        y1="130"
        x2="140"
        y2="130"
        stroke="var(--border-strong)"
        strokeWidth="1"
      />
      {/* threshold line */}
      <line
        x1="20"
        y1="60"
        x2="140"
        y2="60"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.7"
      />
      <text
        x="140"
        y="58"
        textAnchor="end"
        fontFamily="var(--font-geist-mono)"
        fontSize="8"
        letterSpacing="1"
        fill="var(--accent)"
      >
        top 1%
      </text>
    </svg>
  );
}

function FlaskRibbon() {
  // Flask body (Erlenmeyer). Neck: x 68-92, y 30-65.
  // Shoulder slope 65→120 widens to x 38-122. Bottom y=135.
  // Usable interior ≈ y 100-128, x 52-108.
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden>
      {/* Flask outline */}
      <path
        d="M 68 30 L 68 65 L 38 120 Q 38 135 53 135 L 107 135 Q 122 135 122 120 L 92 65 L 92 30 Z"
        fill="var(--bg)"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Neck cap */}
      <rect
        x="65"
        y="26"
        width="30"
        height="6"
        rx="1.5"
        fill="var(--accent)"
        opacity="0.85"
      />
      {/* Liquid level */}
      <path
        d="M 46 108 Q 80 114 114 108"
        stroke="var(--accent)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Protein coil — stays inside the lower bulb (y 102-128, x 56-104) */}
      <g transform="translate(80 116)">
        <path
          d="M -18 0 C -22 -10, -8 -14, 0 -8 C 8 -2, 18 -10, 22 0 C 20 10, 6 14, 0 8 C -6 2, -14 10, -18 0 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="18s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      {/* Bubbles rising but kept inside bulb (clamped at y=70, inside the shoulder) */}
      {[
        { x: 60, y: 126, r: 2.2, d: 2.6, rise: 18 },
        { x: 74, y: 130, r: 1.6, d: 3.3, rise: 22 },
        { x: 92, y: 124, r: 2.4, d: 2.9, rise: 20 },
        { x: 100, y: 130, r: 1.4, d: 3.7, rise: 24 },
      ].map((b, i) => (
        <circle
          key={i}
          cx={b.x}
          cy={b.y}
          r={b.r}
          fill="var(--accent)"
          opacity="0.55"
        >
          <animate
            attributeName="cy"
            values={`${b.y};${b.y - b.rise};${b.y}`}
            dur={`${b.d}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.55;0.1;0.55"
            dur={`${b.d}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

function ChefProduct() {
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden>
      {/* Product bar outline */}
      <rect
        x="32"
        y="62"
        width="96"
        height="54"
        rx="6"
        fill="var(--bg)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* Label stripe */}
      <rect
        x="32"
        y="84"
        width="96"
        height="10"
        fill="var(--accent)"
        opacity="0.85"
      />
      {/* NB mark */}
      <text
        x="80"
        y="92"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono)"
        fontSize="8"
        letterSpacing="2"
        fill="var(--bg)"
      >
        NULL BITES
      </text>
      {/* Bite out of top-right (arc cutout) */}
      <path
        d="M 128 62 Q 108 64 108 82 Q 108 62 128 62 Z"
        fill="var(--bg)"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Chef hat above */}
      <g transform="translate(80 40)">
        <ellipse cx="0" cy="6" rx="22" ry="5" fill="var(--accent)" opacity="0.9" />
        <path
          d="M -18 6 Q -22 -16 -10 -14 Q -6 -24 4 -20 Q 16 -22 16 -8 Q 22 -10 20 6 Z"
          fill="var(--bg)"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      {/* Sparkle */}
      <g>
        <circle cx="140" cy="70" r="2" fill="var(--accent)">
          <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="108" r="1.8" fill="var(--accent-warm)">
          <animate attributeName="opacity" values="1;0;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

const scenes: Scene[] = [
  {
    n: "01",
    title: "The AI runs experiments",
    caption:
      "An autonomous scientist reads every new paper, writes new amino-acid sequences, and never sleeps.",
    icon: <AiCore />,
  },
  {
    n: "02",
    title: "We score, it re-scores itself",
    caption:
      "Every candidate folded in silico and stress-tested. A self-critic throws out 99% as too optimistic.",
    icon: <RankBars />,
  },
  {
    n: "03",
    title: "Top designs go to the bench",
    caption:
      "The survivors are ordered as DNA, expressed in bacteria, purified, and handed to a human food scientist.",
    icon: <FlaskRibbon />,
  },
  {
    n: "04",
    title: "A product you can eat",
    caption:
      "Formulated, sensory-panelled, shipped. The only benchmark that counts is a person taking a bite.",
    icon: <ChefProduct />,
  },
];

export function ScientistStory() {
  return (
    <div className="relative">
      <div className="reveal-stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {scenes.map((s, i) => (
          <div
            key={s.n}
            className={`relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 ${
              i > 0 ? "lg:border-l-0 lg:rounded-l-none" : ""
            } ${i < scenes.length - 1 ? "lg:rounded-r-none" : ""}`}
          >
            {/* Flow connector between cards (only desktop, between cards) */}
            {i < scenes.length - 1 && (
              <span
                aria-hidden
                className="pointer-events-none absolute -right-[9px] top-1/2 z-10 hidden h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] lg:flex"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden>
                  <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}

            <div className="aspect-square w-full">{s.icon}</div>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--text-muted)]">
                {s.n}
              </span>
              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>
            <h3 className="mt-2 text-[17px] font-medium leading-tight tracking-tight text-[var(--text)]">
              {s.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--text-dim)]">
              {s.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
