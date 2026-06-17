type Props = {
  label: string;
};

export function StackChip({ label }: Props) {
  return (
    <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft border border-ink/20 px-2.5 py-1 bg-paper/50">
      {label}
    </span>
  );
}

export function StackChipList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <StackChip key={item} label={item} />
      ))}
    </div>
  );
}
