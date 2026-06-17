import type { Project } from "@/store";
import { StackChipList } from "./StackChip";
import { RevealOnScroll } from "./RevealOnScroll";

type Props = {
  project: Project;
};

export function ExpandedProjectCard({ project }: Props) {
  return (
    <RevealOnScroll className="border-t border-ink/20 py-10 md:py-12 group">
      <article className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3 className="font-serif text-3xl md:text-[36px] leading-[1.05] tracking-tightish display-opsz-large group-hover:text-accent-deep transition-colors">
            {project.name}
          </h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-accent transition-colors w-fit"
            >
              Visit live →
            </a>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-serif italic text-[19px] leading-[1.45] text-ink border-l-2 border-accent pl-5">
            {project.hook}
          </p>
          <p className="font-sans text-[15px] leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <StackChipList items={project.stack} />
        </div>
      </article>
    </RevealOnScroll>
  );
}
