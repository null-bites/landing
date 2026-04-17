export function LoopDiagram() {
  const steps = [
    { id: "01", label: "Ingest", sub: "LLM reader" },
    { id: "02", label: "Design", sub: "ProteinMPNN" },
    { id: "03", label: "Fold", sub: "ESMFold" },
    { id: "04", label: "Rank", sub: "Self-critic" },
    { id: "05", label: "Bench", sub: "Gene · E.coli" },
    { id: "06", label: "Product", sub: "Formulate · eat" },
  ];

  const cx = 260;
  const cy = 260;
  const r = 180;
  const angles = steps.map((_, i) => -Math.PI / 2 + (i * 2 * Math.PI) / steps.length);
  const pts = angles.map((a) => ({
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a),
  }));

  const arcs = pts.map((p, i) => {
    const next = pts[(i + 1) % pts.length];
    return `M ${p.x} ${p.y} A ${r} ${r} 0 0 1 ${next.x} ${next.y}`;
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 520 520" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="70%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Central glow */}
        <circle cx={cx} cy={cy} r="150" fill="url(#core-glow)" />

        {/* Outer dashed orbit (slow rotating) */}
        <g className="spin-slow" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <circle
            cx={cx}
            cy={cy}
            r={r + 30}
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="1"
            strokeDasharray="2 10"
            opacity="0.5"
          />
        </g>

        {/* Connecting flow arcs */}
        {arcs.map((d, i) => (
          <g key={i}>
            <path
              d={d}
              fill="none"
              stroke="var(--border-strong)"
              strokeWidth="1.25"
              opacity="0.35"
            />
            <path
              d={d}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.75"
              strokeDasharray="6 10"
              strokeLinecap="round"
              opacity="0.85"
              className="flow-dash"
              style={{ animationDelay: `${i * -0.35}s` }}
            />
          </g>
        ))}

        {/* Center AI core */}
        <g>
          <circle
            cx={cx}
            cy={cy}
            r="48"
            fill="var(--bg)"
            stroke="var(--border-strong)"
            strokeWidth="1"
          />
          <circle
            cx={cx}
            cy={cy}
            r="12"
            fill="var(--accent)"
            className="pulse-dot"
            filter="url(#soft-glow)"
          />
          <circle cx={cx} cy={cy} r="5" fill="var(--accent)" />
          <text
            x={cx}
            y={cy + 34}
            textAnchor="middle"
            fontFamily="var(--font-geist-mono)"
            fontSize="10"
            letterSpacing="2"
            fill="var(--text-dim)"
          >
            AI CORE
          </text>
        </g>

        {/* Step nodes */}
        {pts.map((p, i) => {
          const s = steps[i];
          return (
            <g key={s.id}>
              <circle
                cx={p.x}
                cy={p.y}
                r="30"
                fill="var(--bg)"
                stroke="var(--accent)"
                strokeWidth="1.25"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r="6"
                fill="var(--accent)"
                className="pulse-dot"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <g>
                <text
                  x={p.x + Math.cos(angles[i]) * 52}
                  y={p.y + Math.sin(angles[i]) * 52 + 3}
                  textAnchor={
                    Math.cos(angles[i]) > 0.2
                      ? "start"
                      : Math.cos(angles[i]) < -0.2
                        ? "end"
                        : "middle"
                  }
                  fontFamily="var(--font-geist-mono)"
                  fontSize="9"
                  letterSpacing="1.5"
                  fill="var(--text-muted)"
                >
                  {s.id}
                </text>
                <text
                  x={p.x + Math.cos(angles[i]) * 52}
                  y={p.y + Math.sin(angles[i]) * 52 + 18}
                  textAnchor={
                    Math.cos(angles[i]) > 0.2
                      ? "start"
                      : Math.cos(angles[i]) < -0.2
                        ? "end"
                        : "middle"
                  }
                  fontFamily="var(--font-geist-sans)"
                  fontSize="14"
                  fontWeight="500"
                  fill="var(--text)"
                >
                  {s.label}
                </text>
                <text
                  x={p.x + Math.cos(angles[i]) * 52}
                  y={p.y + Math.sin(angles[i]) * 52 + 32}
                  textAnchor={
                    Math.cos(angles[i]) > 0.2
                      ? "start"
                      : Math.cos(angles[i]) < -0.2
                        ? "end"
                        : "middle"
                  }
                  fontFamily="var(--font-geist-mono)"
                  fontSize="10"
                  fill="var(--text-dim)"
                >
                  {s.sub}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
