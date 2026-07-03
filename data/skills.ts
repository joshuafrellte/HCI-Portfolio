export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    name: "Frameworks / Tools",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "Express.js", "Git", "Figma"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    name: "Design / Other",
    skills: ["UI/UX Design", "Responsive Layout", "Accessibility", "Agile"],
  },
];
