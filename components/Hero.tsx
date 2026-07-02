import { FiArrowDown } from "react-icons/fi";
import { highlights } from "@/data/highlights";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-padding-hero section-container flex min-h-[88vh] flex-col justify-center"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            Academic E-Portfolio
          </p>
          <h1
            id="hero-heading"
            className="mt-3 font-serif text-4xl font-semibold leading-[1.15] text-deep-space-blue sm:text-5xl lg:text-[3.25rem]"
          >
            [Your Full Name]
          </h1>
          <p className="mt-3 font-serif text-lg italic text-archivum-red sm:text-xl">
            Research, code, and design — archived with intent.
          </p>
          <p className="mt-4 text-base text-coordinator-ink sm:text-lg">
            BS Computer Science student at Mapúa Malayan Colleges Mindanao
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600">
            Building thoughtful digital experiences at the intersection of code,
            design, and human behavior.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" size="md">
              View projects
            </Button>
            <Button href="#contact" variant="outline" size="md">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Card className="flex h-56 w-56 items-center justify-center bg-snow sm:h-64 sm:w-64">
            <div
              role="img"
              aria-label="[Placeholder] Profile photo — replace with your headshot"
              className="flex h-full w-full items-center justify-center bg-neutral-100"
            >
              <span className="px-4 text-center text-sm text-neutral-500">
                Photo slot
              </span>
            </div>
          </Card>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-4 border-t border-neutral-300 pt-10 sm:grid-cols-4 sm:gap-6">
        {highlights.map(({ value, label }) => (
          <div key={label}>
            <dt className="text-sm text-neutral-600">{label}</dt>
            <dd className="mt-1 font-serif text-2xl font-semibold tabular-nums text-deep-space-blue sm:text-3xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href="#about"
        className="mt-12 inline-flex items-center gap-2 self-center text-sm font-medium text-oxford-blue transition-colors duration-200 hover:text-deep-space-blue lg:mt-16"
        aria-label="Scroll to About section"
      >
        <FiArrowDown className="h-4 w-4" aria-hidden="true" />
        Explore archive
      </a>
    </section>
  );
}
