import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="projects-heading"
        index="03"
        title="Projects"
        description="Selected work highlighting problem-solving, technical implementation, and user-centered design."
      />

      <div className="mt-12 space-y-4 sm:space-y-6">
        {featured && <ProjectCard project={featured} featured />}

        {others.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
