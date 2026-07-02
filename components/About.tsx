import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const facts = [
  { label: "School", value: "Mapúa Malayan Colleges Mindanao" },
  { label: "Year Level", value: "[Placeholder — e.g., 3rd Year]" },
  { label: "Focus Area", value: "[Placeholder — e.g., HCI & Web Development]" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="about-heading"
        index="01"
        title="About"
        description="Background, academic focus, and the work I am building toward."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
        <Card className="p-4 sm:p-6">
          <div className="space-y-5 text-base leading-relaxed text-neutral-600">
            <p>
              [Placeholder paragraph 1] I am a Computer Science student with a
              growing interest in human-computer interaction, software design,
              and building tools that feel intuitive to use.
            </p>
            <p>
              [Placeholder paragraph 2] Through coursework and personal projects,
              I have explored front-end development, user research methods, and
              iterative prototyping — always with an eye toward clarity and
              accessibility.
            </p>
            <p>
              [Placeholder paragraph 3] I am currently looking for opportunities
              to collaborate on meaningful projects, internships, and research
              that bridge technical skill with user-centered thinking.
            </p>
          </div>
        </Card>

        <aside aria-label="Quick facts">
          <Card className="h-fit p-4 sm:p-6">
            <h3 className="border-b border-neutral-300 pb-4 font-sans text-sm font-semibold uppercase tracking-wider text-neutral-500">
              At a glance
            </h3>
            <dl className="mt-4 space-y-4">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-sm text-neutral-500">{label}</dt>
                  <dd className="mt-0.5 font-medium text-eerie-black">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </aside>
      </div>
    </section>
  );
}
