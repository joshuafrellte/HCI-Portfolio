export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  link: string;
  featured?: boolean;
  screenshotLabels?: string[];
  screenshotImages?: string[];
}

export const projects: Project[] = [
  {
    id: "archivum",
    title: "Archivum",
    description:
      "A research project management platform that centralizes student-adviser collaboration, project tracking, and defense scheduling.",
    problem:
      "Academic teams lacked a single place to manage project milestones, advisor reviews, and defense logistics.",
    solution:
      "Built a centralized portal with progress dashboards, version history, team communication, and defense planning tools.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://archivum-portal.duckdns.org/",
    featured: true,
    screenshotLabels: ["Dashboard view", "History view", "Defense scheduling", "Project details"],
    screenshotImages: [
      "/archivum-dashboard.png",
      "/archivum-history.png",
      "/archivum-defense-scheduling.png",
      "/archivum-project.png",
    ],
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
