import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiDocker,
  SiDigitalocean,
  SiHtml5,
  SiNodedotjs,
  SiScikitlearn,
  SiPandas,
  SiGithub,
} from "react-icons/si";

import { IoLogoCss3 } from "react-icons/io";

import { FaServer } from "react-icons/fa";

export const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <SiJavascript />,
  React: <SiReact />,
  "Express.js": <SiExpress />,
  "Node.js": <SiNodedotjs />,
  MySQL: <SiMysql />,
  "Tailwind CSS": <SiTailwindcss />,
  Python: <SiPython />,
  FastAPI: <SiFastapi />,
  Docker: <SiDocker />,
  DigitalOcean: <SiDigitalocean />,
  HTML: <SiHtml5 />,
  CSS: <IoLogoCss3 />,
  "REST API": <FaServer />,
  "Scikit-learn": <SiScikitlearn />,
  Pandas: <SiPandas />,
  GitHub: <SiGithub />,
};