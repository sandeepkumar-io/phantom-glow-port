import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "AI Video Generator",
    description: "A text-to-video studio that turns prompts into cinematic clips with real-time previews.",
    tags: ["Next.js", "TypeScript", "AI"],
    image: project1,
    link: "#",
  },
  {
    title: "AI Image Cleaner",
    description: "One-tap tool to remove noise, objects and imperfections using on-device AI models.",
    tags: ["React", "Tailwind", "AI"],
    image: project2,
    link: "#",
  },
  {
    title: "Real Estate CMS Dashboard",
    description: "A data-rich admin to manage listings, leads and analytics with live charts.",
    tags: ["React", "Node.js", "MongoDB"],
    image: project3,
    link: "#",
  },
  {
    title: "Background Remover App",
    description: "Instantly cut out backgrounds from any photo with crisp, AI-powered edges.",
    tags: ["Next.js", "AI", "Canvas"],
    image: project4,
    link: "#",
  },
  {
    title: "College Website",
    description: "A modern, responsive university website with admissions and program discovery.",
    tags: ["React", "Tailwind", "UI"],
    image: project5,
    link: "#",
  },
  {
    title: "Property Posting Dashboard",
    description: "A streamlined dashboard for agents to post, edit and track property listings.",
    tags: ["React", "API", "Dashboard"],
    image: project6,
    link: "#",
  },
];

export const skills: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "API Integration",
  "AI Tools",
];

export interface Service {
  title: string;
  description: string;
  number: string;
}

export const services: Service[] = [
  { number: "01", title: "Frontend Development", description: "Pixel-perfect, performant interfaces built with React & Next.js." },
  { number: "02", title: "AI Website Design", description: "Modern AI-powered web experiences that feel alive and intelligent." },
  { number: "03", title: "Dashboard Development", description: "Data-dense admin panels with charts, tables and live updates." },
  { number: "04", title: "API Integration", description: "Reliable REST & third-party integrations wired into your product." },
  { number: "05", title: "Responsive UI Development", description: "Fluid layouts that look flawless on every screen size." },
  { number: "06", title: "Landing Page Design", description: "High-converting, cinematic landing pages with bold motion." },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#services" },
  { label: "Contact", href: "#contact" },
];
