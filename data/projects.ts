export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "flagship-project",
    title: "[Placeholder] Flagship Academic Project",
    description:
      "A capstone-style project demonstrating full-stack development, user research, and iterative design.",
    problem:
      "Students struggled to track coursework deadlines across multiple platforms with no unified view.",
    solution:
      "Built a centralized dashboard with calendar sync, smart reminders, and a mobile-first interface.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/yourusername/flagship-project",
    featured: true,
  },
  {
    id: "project-two",
    title: "[Placeholder] HCI Prototype",
    description:
      "Interactive prototype exploring usability patterns for a campus navigation app.",
    problem:
      "New students had difficulty finding buildings and services on a large campus.",
    solution:
      "Designed and tested a wayfinding app with AR markers and accessible voice guidance.",
    techStack: ["React", "Figma", "Usability Testing"],
    link: "https://github.com/yourusername/hci-prototype",
  },
  {
    id: "project-three",
    title: "[Placeholder] Data Visualization Tool",
    description:
      "Web tool for visualizing survey results from a user research study.",
    problem:
      "Research data was stored in spreadsheets that were hard to interpret at a glance.",
    solution:
      "Created filterable charts and exportable reports for stakeholders.",
    techStack: ["Python", "D3.js", "Pandas"],
    link: "https://github.com/yourusername/data-viz-tool",
  },
  {
    id: "project-four",
    title: "[Placeholder] Mobile Study Companion",
    description:
      "A lightweight flashcard and quiz app built for a software engineering course.",
    problem:
      "Existing study apps were cluttered and did not support offline review.",
    solution:
      "Shipped a minimal PWA with spaced repetition and offline caching.",
    techStack: ["React Native", "AsyncStorage", "Expo"],
    link: "https://github.com/yourusername/study-companion",
  },
];
