import { FiExternalLink, FiImage } from "react-icons/fi";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const screenshotLabels = [
  "Landing view",
  "Research workspace",
  "Progress tracker",
  "Defense scheduling",
];

export default function FinalProject() {
  return (
    <section
      id="final-project"
      aria-labelledby="final-project-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="final-project-heading"
        index="03.5"
        title="Final Project"
        description="The final version of my HCI project, built to support academic collaboration and research management."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-end gap-3">
            <a
              href="https://archivum-portal.duckdns.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-oxford-blue transition-all duration-200 hover:text-deep-space-blue hover:underline hover:underline-offset-4"
            >
              Open prototype
              <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <h3 className="mt-4 font-serif text-2xl font-semibold text-eerie-black sm:text-3xl">
            Archivum
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">
            Archivum is a comprehensive platform for managing academic research
            projects. It helps students collaborate with advisers, track project
            progress, and schedule defenses in one place.
          </p>

          <div className="mt-6 rounded-sm border border-neutral-300 bg-neutral-50 p-4 sm:p-5">
            <p className="text-sm font-medium text-eerie-black">Prototype link</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Explore the live prototype at the link above to view the full user
              experience and interface flow.
            </p>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-eerie-black">
              <FiImage className="h-4 w-4 text-archivum-red" aria-hidden="true" />
              Prototype screenshots
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {screenshotLabels.map((label, index) => (
                <div
                  key={label}
                  className="flex aspect-[4/3] items-center justify-center rounded-sm border border-dashed border-neutral-400 bg-neutral-50 px-3 text-center"
                >
                  <div>
                    <p className="text-sm font-medium text-eerie-black">
                      Screenshot {index + 1}
                    </p>
                    <p className="mt-1 text-xs text-neutral-600">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <p className="text-sm leading-relaxed text-neutral-600">
            You can replace these placeholder frames with your own uploaded
            images whenever you are ready.
          </p>
        </div>
      </div>
    </section>
  );
}
