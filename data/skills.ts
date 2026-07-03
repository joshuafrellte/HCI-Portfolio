import {
  FiCode,
  FiDatabase,
  FiPenTool,
  FiUsers,
} from "react-icons/fi";

import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  name: string;
  icon: IconType;
  skills: Skill[];
}

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGit,
  SiFigma,
} from "react-icons/si";

export const skillCategories: SkillCategory[] = [
  {
    name: "Web Development",
    icon: FiCode,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs" },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    name: "Data Science & AI",
    icon: FiDatabase,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Matplotlib" },
      { name: "Jupyter Notebook", icon: SiJupyter },
    ],
  },

  {
    name: "Design & Workflow",
    icon: FiPenTool,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      { name: "Agile" },
      { name: "Accessibility" },
      { name: "Responsive Design" },
    ],
  },

  {
    name: "Human Skills",
    icon: FiUsers,
    skills: [
      { name: "Problem Solving" },
      { name: "Collaboration" },
      { name: "Communication" },
      { name: "Adaptability" },
      { name: "Continuous Learning" },
    ],
  },
];