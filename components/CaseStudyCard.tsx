import type { Project } from "@/store";
import { caseStudyBodyLabels } from "@/store";
import { StackChipList } from "./StackChip";
import { RevealOnScroll } from "./RevealOnScroll";

type Props = {
  project: Project;
  index: number;
};

export function CaseStudyCard({ project, index }: Props) {
  if (!project.caseStudy) return null;
  const num = String(index + 1).padStart(2, "0");
  const cs = project.caseStudy;

  return (
    <RevealOnScroll className="border-t-2 border-ink py-12 md:py-16">
      <article className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1.2fr] gap-6 md:gap-10">
        {/* Number */}
        <div className="font-serif text-[72px] md:text-[96px] leading-none text-ink display-opsz-large">
          <span className="hover:text-accent transition-colors cursor-default">
            {num}
          </span>
        </div>

        {/* Middle: meta */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3 className="font-serif text-4xl md:text-[44px] leading-[1.02] tracking-tightish display-opsz-large">
            {project.name}
          </h3>
          <p className="font-serif italic text-lg text-ink-soft leading-snug max-w-md">
            {project.hook}
          </p>
          <StackChipList items={project.stack} />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-accent transition-colors inline-flex items-center gap-1 w-fit"
            >
              Visit live →
            </a>
          )}
        </div>

        {/* Right: structured body */}
        <div className="flex flex-col gap-6">
          <CaseRow label={caseStudyBodyLabels.problem} body={cs.problem} />
          <CaseRow label={caseStudyBodyLabels.constraint} body={cs.constraint} />
          <CaseRow label={caseStudyBodyLabels.built} body={cs.built} />
          <CaseRow
            label={caseStudyBodyLabels.hardPart}
            body={cs.hardPart}
            warn
          />
          <PullQuote label={caseStudyBodyLabels.outcome} body={cs.outcome} />
        </div>
      </article>
    </RevealOnScroll>
  );
}

function CaseRow({
  label,
  body,
  warn,
}: {
  label: string;
  body: string;
  warn?: boolean;
}) {
  return (
    <div>
      <div
        className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-2 ${
          warn ? "text-accent" : "text-muted"
        }`}
      >
        {label}
        {warn && <span className="ml-2 normal-case tracking-normal">⚠️</span>}
      </div>
      <p className="font-serif text-[17px] leading-[1.55] text-ink-soft">
        {body}
      </p>
    </div>
  );
}

function PullQuote({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-accent pl-5 py-1">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
        {label}
      </div>
      <p className="font-serif italic text-[19px] leading-[1.45] text-ink">
        {body}
      </p>
    </div>
  );
}
