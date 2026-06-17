import type { Project } from "@/store";
import { StackChip } from "./StackChip";
import { RevealOnScroll } from "./RevealOnScroll";

type Props = {
  project: Project;
};

export function CompactProjectCard({ project }: Props) {
  return (
    <RevealOnScroll className="border border-ink/15 bg-paper/40 p-6 hover:bg-paper hover:border-ink/30 transition-colors h-full flex flex-col">
      <div className="flex flex-wrap gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent mb-3">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h4 className="font-serif text-2xl tracking-tightish leading-tight mb-3">
        {project.name}
      </h4>
      <p className="font-serif italic text-[15px] leading-snug text-ink-soft mb-4">
        {project.hook}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-ink/10">
        {project.stack.slice(0, 4).map((s) => (
          <StackChip key={s} label={s} />
        ))}
      </div>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft hover:text-accent transition-colors mt-3"
        >
          Visit live →
        </a>
      )}
    </RevealOnScroll>
  );
}
