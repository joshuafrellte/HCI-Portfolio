import { skillCategories } from "@/data/skills";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="skills-heading"
        index="02"
        title="Skills & Tech Stack"
        description="Technologies and competencies developed through coursework, projects, and self-directed learning."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {skillCategories.map(({ name, skills }, index) => (
          <Card key={name} className="p-4 sm:p-6">
            <span
              className="text-sm font-medium tabular-nums text-archivum-red"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-serif text-xl font-semibold text-eerie-black">
              {name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="archivum-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
