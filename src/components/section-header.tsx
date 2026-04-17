type Props = {
  name: string;
  current: number;
  total: number;
};

export function SectionHeader({ name, current, total }: Props) {
  const pad = (n: number) => n.toString();
  return (
    <div className="flex items-center justify-between border-y border-[var(--border)] bg-[var(--surface)]/60 px-6 py-3 lg:px-10">
      <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--text-dim)] uppercase">
        {name}
      </span>
      <span className="font-mono text-[11px] text-[var(--text-muted)]">
        [&nbsp;<span className="text-[var(--accent)]">{pad(current)}</span>
        &nbsp;/&nbsp;{pad(total)}&nbsp;]
      </span>
    </div>
  );
}
