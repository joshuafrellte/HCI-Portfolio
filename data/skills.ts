export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "MySQL"],
  },
  {
    name: "Data Science & Machine Learning",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Jupyter Notebook"],
  },
  {
    name: "Design & Workflow",
    skills: ["Git", "Figma", "Agile", "Accessibility", "Responsive Design"],
  },
  {
    name: "Human Skills",
    skills: ["Problem Solving", "Collaboration", "Communication", "Adaptability", "Continuous Learning"],
  },
];
