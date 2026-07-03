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
      "A research project management platform that centralizes student-adviser collaboration, project lifecycle tracking, and defense scheduling.",
    problem:
      "Academic institutions lacked a single place to manage project milestones, advisor reviews, and defense logistics.",
    solution:
      "Built a centralized portal with progress dashboards, version history, team communication, and defense planning tools.",
    techStack: ["Next.js", "TypeScript", "Express.js", "MySQL", "Tailwind CSS", "FastAPI", "Python", "Docker", "DigitalOcean"],
    link: "https://archivum-portal.duckdns.org/",
    featured: true,
    screenshotLabels: ["Dashboard view", "Document version history", "Defense scheduling", "Project lifecycle tracking"],
    screenshotImages: [
      "/archivum-dashboard.png",
      "/archivum-history.png",
      "/archivum-defense-scheduling.png",
      "/archivum-project.png",
    ],
  },
  {
    id: "smashq",
    title: "SmashQ (f.k.a. ProjectBQO)",
    description:
      "A badminton court queueing and matchmaking platform with player profiles, automated queues, and match analytics.",
    problem:
      "Court operators managed queues and matchmaking manually, leading to unfair pairings and wasted court time.",
    solution:
      "Built a matchmaking system with automated queueing, skill-based pairing, court management, and real-time player analytics.",
    techStack: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    link: "https://smashq-murex.vercel.app/",
  },
  {
    id: "machine-problems",
    title: "Machine Problems",
    description:
      "A set of five string-processing exercises (remove spaces, search word, replace substring, count characters, email validation) built as interactive tools.",
    problem:
      "Coursework required implementing and demonstrating fundamental string manipulation algorithms.",
    solution:
      "Built five standalone panels, each taking input and running its own string-processing logic on click.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://joshuafrellte.github.io/IT103-M1-FA3-Machine-Problems/",
  },
  {
    id: "greensense",
    title: "GreenSense",
    description:
      "A landing page for a concept platform that turns small greenhouse farmers' purchase and sales data into profitability insights.",
    problem:
      "Small-scale farmers lack visibility into which crops are actually profitable, leading to overplanting and financial blind spots.",
    solution:
      "Designed a persuasive landing page explaining the product's transaction tracking, AI insights, and alerting features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://joshuafrellte.github.io/IT103-FA2-LandingPage/",
  },
  {
    id: "photo-gallery",
    title: "Interactive Photo Gallery",
    description:
      "A hover-driven photo gallery that swaps a large preview image based on which thumbnail the user hovers over.",
    problem:
      "Wanted to practice DOM manipulation and event-driven interactivity beyond static layouts.",
    solution:
      "Built a thumbnail grid that updates a large preview panel on hover using vanilla JavaScript.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://joshuafrellte.github.io/InteractivePhotoGallery/gallery.html",
  },
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    description:
      "A minimal study timer implementing the Pomodoro technique with start, pause, and reset controls.",
    problem:
      "Needed a distraction-free timer for practicing focused work intervals.",
    solution:
      "Built a clean circular timer UI with session controls and visual countdown feedback.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://pomodoro-timer-puce-seven.vercel.app/",
  },
  {
    id: "gwa-calculator",
    title: "GWA Calculator for CS 1Y 2T",
    description:
      "A grade calculator that computes general weighted average across a fixed set of CS 2Y 1T subjects (CS106, CS106L, ENV075, HUM021, MATH035, IT102, IT102L, PE014, CS121).",
    problem:
      "Students had to manually compute their GWA each term using scattered spreadsheets or by hand.",
    solution:
      "Built a form-based calculator that outputs the final GWA instantly from entered subject grades.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://joshuafrellte.github.io/GWA-Calculator-for-MMCM-CS-2Y-1T/",
  },
  {
    id: "mmcm-gwa-calculator",
    title: "MMCM CS GWA Calculator",
    description:
      "A more developed GWA calculator supporting multiple terms (2Y-1T, 2Y-2T, 2Y-3T) with term-specific subject lists.",
    problem:
      "The earlier GWA calculator only covered one term, so it couldn't scale to a student's full academic year.",
    solution:
      "Built a term-selectable calculator that swaps in the correct subject list per term and computes GWA accordingly.",
    techStack: ["Next.js", "TypeScript"],
    link: "https://mmcm-cs-gwa-calculator.vercel.app/",
  },
  {
    id: "number-guessing-game",
    title: "Number Guessing Web Game",
    description:
      "A browser-based number guessing game with selectable difficulty ranges (0-100 up to 0-10000).",
    problem:
      "Wanted a simple project to practice basic JavaScript logic and DOM interaction.",
    solution:
      "Built a guess-the-number game with adjustable number ranges and win/lose feedback.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://joshuafrellte.github.io/Guess-The-Number-JavaScript/",
  },
  {
    id: "fetch-pokemon",
    title: "Fetch Pokemon With PokeAPI",
    description:
      "A tool that fetches and displays a Pokemon's sprite, ID, base experience, height, weight, types, abilities, and base stats using the public PokeAPI.",
    problem:
      "Wanted hands-on practice consuming a public REST API and rendering dynamic data.",
    solution:
      "Built a search interface that fetches and displays a Pokemon's stats, types, and abilities.",
    techStack: ["JavaScript", "REST API", "HTML", "CSS"],
    link: "https://joshuafrellte.github.io/Fetch-Pokemon-with-PokeAPI/",
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "A configurable password generator with adjustable length, character set toggles (lowercase, uppercase, numbers, symbols), a copy button, and a live strength indicator.",
    problem:
      "Needed a simple, controllable way to generate strong passwords with specific constraints.",
    solution:
      "Built a generator with sliders and checkboxes for length, casing, numbers, and symbols, plus real-time strength feedback.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://joshuafrellte.github.io/Password-Generator/passwordGenerator.html",
  },
  {
    id: "random-quote-generator",
    title: "Random Quote Generator",
    description:
      "A simple app that displays a random inspirational quote on each button click.",
    problem:
      "Wanted a lightweight project to practice fetching and displaying randomized content.",
    solution:
      "Built a minimal interface pulling from a quote source with a single-click refresh action.",
    techStack: ["Next.js", "TypeScript"],
    link: "https://random-quote-generator-topaz-nine.vercel.app/",
  },
  {
    id: "tailwind-tutorial-blog",
    title: "Tailwind Tutorial Blog Page",
    description:
      "A blog-style walkthrough teaching Tailwind CSS setup, utility classes, flex/grid layout, and responsive breakpoints, complete with live examples and code snippets.",
    problem:
      "Needed a structured way to practice and document utility-first CSS styling and responsive layout.",
    solution:
      "Built a getting-started blog page covering setup, layout, and responsive utility classes with live demos.",
    techStack: ["Next.js", "Tailwind CSS"],
    link: "https://tailwindtutorialblogpage.vercel.app/",
  },
  {
    id: "digital-clock",
    title: "Digital Clock",
    description:
      "A full-screen digital clock with a background image and live-updating time display, built with React.",
    problem:
      "Wanted a small project to practice real-time state updates and component-based UI in React.",
    solution:
      "Built a clock that updates every second, styled over a full-bleed background image.",
    techStack: ["React"],
    link: "https://digital-clock-with-react.vercel.app/",
  },
  {
    id: "exam-web-app",
    title: "Part 3 Exam Web App",
    description:
      "A quote board displaying 50 quotes in a themed grid, built as an IT103 Module 1 summative exam requirement.",
    problem:
      "Coursework required building a functioning web app under exam time constraints.",
    solution:
      "Built a quote board interface with themed styling and grid-based quote cards.",
    techStack: ["Next.js", "TypeScript"],
    link: "https://it-103-m1-summative-exam-part-3.vercel.app/",
  },
  {
    id: "inventory-api",
    title: "Simple Inventory API",
    description:
      "A simple inventory web API built with Express.js currenty in progress.",
    problem:
      "Coursework required building a functioning web app under exam time constraints.",
    solution:
      "Built a quote board interface with themed styling and grid-based quote cards.",
    techStack: ["Node.js", "Express.js", "MySQL"],
    link: "https://github.com/joshuafrellte/inventory-api-rework.git",
  },
  {
    id: "teen-mental-health-model",
    title: "Teen Mental Health Model",
    description:
      "A simple model created using Python's Scikit-learn libraries for predicting teen mental health outcomes.",
    problem:
      "Coursework required building a functioning web app under exam time constraints.",
    solution:
      "Built a quote board interface with themed styling and grid-based quote cards.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "https://github.com/joshuafrellte/Teen-Mental-Health_Model",
  },
];