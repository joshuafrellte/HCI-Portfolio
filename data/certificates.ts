export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "[Placeholder] Web Development Fundamentals",
    issuer: "Placeholder Issuer (e.g., Coursera)",
    date: "Jan 2025",
    link: "#",
  },
  {
    id: "cert-2",
    title: "[Placeholder] UX Design Essentials",
    issuer: "Placeholder Issuer (e.g., Google)",
    date: "Mar 2025",
    link: "#",
  },
  {
    id: "cert-3",
    title: "[Placeholder] Cloud Computing Basics",
    issuer: "Placeholder Issuer (e.g., AWS)",
    date: "Jun 2025",
    link: "#",
  },
  {
    id: "cert-4",
    title: "[Placeholder] Data Structures & Algorithms",
    issuer: "Placeholder Issuer (e.g., Udemy)",
    date: "Sep 2025",
    link: "#",
  },
];
