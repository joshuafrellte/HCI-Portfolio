import Image from "next/image";
import { 
  FiExternalLink, 
  FiImage,
  FiGithub,
  FiBook,
} from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import type { Project } from "@/data/projects";
import Card from "@/components/ui/Card";
import { techIcons } from "@/lib/techIcons";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const hasScreenshots =
    featured && (project.screenshotImages?.length ?? 0) > 0;

  if (hasScreenshots) {
    return (
      <div className="space-y-6">
        <div className="grid lg:grid-cols-[2.2fr_340px] gap-6">
          <Card className="h-full p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium uppercase tracking-widest text-neon-magenta">
                  Final Project
                </span>
              </div>

              <div>
                <h3 
                  className="font-serif text-3xl font-semibold text-neon-yellow" 
                  style={{ textShadow: "0 0 3px rgba(255, 211, 0, 1), 0 0 2px rgba(255, 211, 0, 1)" }}
                >
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-200">
                  {project.description}
                </p>
              </div>

              <div className="grid gap-3 border-t border-neutral-300 pt-4 text-sm sm:grid-cols-2 sm:gap-4">
                <div>
                  <p className="font-medium text-neon-cyan">Problem</p>
                  <p className="mt-1 text-neutral-200">{project.problem}</p>
                </div>
                <div>
                  <p className="font-medium text-neon-cyan">Solution</p>
                  <p className="mt-1 text-neutral-200">{project.solution}</p>
                </div>
              </div>

              <ul className="flex flex-wrap justify-between gap-2" aria-label="Tech stack">
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <span className="flex border border-neon-cyan bg-[#1a0933] px-2.5 py-1 text-sm font-medium text-neon-cyan items-center gap-2">
                      <span className="text-sm">
                        {techIcons[tech] ?? <FaCode />}
                      </span>
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          {/* RIGHT CARD */}
          <Card className="flex flex-col p-6">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-neon-magenta">
                Resources
              </span>

              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Project resources and documentation.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 group flex items-center justify-between rounded-lg border border-neon-cyan/25 p-3 transition-all duration-200 hover:border-neon-cyan hover:bg-neon-cyan/5"
              >
                <div className="flex items-center gap-3">
                  <FiExternalLink className="h-5 w-5 text-neon-cyan" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Live Demo
                    </p>
                    <p className="text-xs text-neutral-300">
                      Visit the deployed app
                    </p>
                  </div>
                </div>

                <FiExternalLink className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/Very-Formal-Group-Dev-Team/research-pipeline-web/blob/staging/DOCS/USER_GUIDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 group flex items-center justify-between rounded-lg border border-neon-cyan/25 p-3 transition-all duration-200 hover:border-neon-cyan hover:bg-neon-cyan/5"
              >
                <div className="flex items-center gap-3">
                  <FiBook className="h-5 w-5 text-neon-cyan" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      User Guide
                    </p>
                    <p className="text-xs text-neutral-300">
                      Documentation & walkthrough
                    </p>
                  </div>
                </div>

                <FiExternalLink className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/Very-Formal-Group-Dev-Team/research-pipeline-web"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 group flex items-center justify-between rounded-lg border border-neon-cyan/25 p-3 transition-all duration-200 hover:border-neon-cyan hover:bg-neon-cyan/5"
              >
                <div className="flex items-center gap-3">
                  <FiGithub className="h-5 w-5 text-neon-cyan" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      GitHub Repository
                    </p>
                    <p className="text-xs text-neutral-300">
                      Browse the source code
                    </p>
                  </div>
                </div>

                <FiExternalLink className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </a>

            </div>
          </Card>
        </div>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center gap-2.5 text-sm font-medium text-neon-cyan">
            <FiImage className="h-4 w-4 text-archivum-red" aria-hidden="true" />
            <span className="uppercase tracking-widest">Project screenshots</span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {project.screenshotImages!.map((src, index) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-sm border border-neutral-700 bg-neutral-950/30 aspect-[16/9]"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
                {project.screenshotLabels?.[index] && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-150">
                    {project.screenshotLabels[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  return (
   <Card
      interactive
      className={`h-[300px] flex flex-col ${featured ? "p-6 sm:p-8" : "p-4 sm:p-6"}`}
    >
      <div className={`flex flex-1 flex-col gap-4 ${featured ? "lg:gap-6" : ""}`}>
        {featured && (
          <span className="text-sm font-medium tabular-nums text-archivum-red">
            Flagship
          </span>
        )}

        <div>
          <h3
            className={`font-serif font-semibold text-neon-cyan ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-200">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <span className="flex border border-neon-cyan bg-[#1a0933] px-2.5 py-1 text-sm font-medium text-neon-cyan items-center gap-2">
                <span className="text-sm">
                  {techIcons[tech] ?? <FaCode />}
                </span>
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-neon-magenta transition-all duration-200 hover:text-deep-space-blue hover:underline hover:underline-offset-4"
        >
          View project
          <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
