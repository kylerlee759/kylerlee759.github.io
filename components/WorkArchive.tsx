"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  capabilityOrder,
  industryFilters,
  projects,
  tierLabels,
} from "@/store";
import { CaseStudyCard } from "./CaseStudyCard";
import { CompactProjectCard } from "./CompactProjectCard";
import { ExpandedProjectCard } from "./ExpandedProjectCard";
import { IndustryFilter } from "./IndustryFilter";

const QUERY_KEY = "tag";
const DEFAULT_FILTER = "All";

export function WorkArchive() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawActive = searchParams.get(QUERY_KEY) ?? DEFAULT_FILTER;
  const active = industryFilters.includes(rawActive) ? rawActive : DEFAULT_FILTER;

  const filtered = useMemo(() => {
    if (active === DEFAULT_FILTER) return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  const featured = filtered.filter((p) => p.tier === 1);
  const tier3 = filtered.filter((p) => p.tier === 3);

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === DEFAULT_FILTER) {
      params.delete(QUERY_KEY);
    } else {
      params.set(QUERY_KEY, value);
    }
    const qs = params.toString();
    router.replace(qs ? `/work?${qs}` : "/work", { scroll: false });
  };

  const totalAfterFilter = filtered.length;

  return (
    <div>
      <IndustryFilter
        options={industryFilters}
        active={active}
        onChange={handleChange}
      />

      <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {totalAfterFilter} / {projects.length} projects shown
        {active !== DEFAULT_FILTER && (
          <button
            type="button"
            onClick={() => handleChange(DEFAULT_FILTER)}
            className="ml-3 text-accent hover:text-accent-deep underline-offset-4 hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>

      {totalAfterFilter === 0 && (
        <div className="mt-16 py-20 border-t border-b border-ink/15 text-center">
          <p className="font-serif italic text-2xl text-ink-soft">
            No projects under <span className="text-accent">{active}</span> yet.
          </p>
        </div>
      )}

      {featured.length > 0 && (
        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-2">
            {tierLabels.featured}
          </h2>
          <div>
            {featured.map((project, i) => (
              <CaseStudyCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      {capabilityOrder.map((capability) => {
        const inGroup = filtered.filter(
          (p) => p.tier === 2 && p.capability === capability,
        );
        if (inGroup.length === 0) return null;
        return (
          <section key={capability} className="mt-20">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tightish display-opsz-large mb-2">
              {capability}
            </h2>
            <div>
              {inGroup.map((project) => (
                <ExpandedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        );
      })}

      {tier3.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tightish display-opsz-large mb-8">
            Specialized & R&D
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tier3.map((project) => (
              <CompactProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
