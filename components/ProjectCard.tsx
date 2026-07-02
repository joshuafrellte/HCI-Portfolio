import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";
import Card from "@/components/ui/Card";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      interactive
      className={`flex flex-col ${featured ? "p-6 sm:p-8" : "p-4 sm:p-6"}`}
    >
      <div className={`flex flex-col gap-4 ${featured ? "lg:gap-6" : ""}`}>
        {featured && (
          <span className="text-sm font-medium tabular-nums text-archivum-red">
            Flagship
          </span>
        )}

        <div>
          <h3
            className={`font-serif font-semibold text-eerie-black ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            {project.description}
          </p>
        </div>

        <div className="grid gap-3 border-t border-neutral-300 pt-4 text-sm sm:grid-cols-2 sm:gap-4">
          <div>
            <p className="font-medium text-eerie-black">Problem</p>
            <p className="mt-1 text-neutral-600">{project.problem}</p>
          </div>
          <div>
            <p className="font-medium text-eerie-black">Solution</p>
            <p className="mt-1 text-neutral-600">{project.solution}</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <span className="archivum-chip text-xs">{tech}</span>
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-oxford-blue transition-all duration-200 hover:text-deep-space-blue hover:underline hover:underline-offset-4"
        >
          View project
          <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
