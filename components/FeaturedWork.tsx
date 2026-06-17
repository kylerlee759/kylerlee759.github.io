import { featuredProjects, featuredSectionHeader } from "@/store";
import { CaseStudyCard } from "./CaseStudyCard";
import { SectionHeader } from "./SectionHeader";

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <SectionHeader data={featuredSectionHeader} />

        <div className="mt-16 md:mt-20">
          {featuredProjects.map((project, i) => (
            <CaseStudyCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
