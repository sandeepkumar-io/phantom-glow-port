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
    description:
      "A text-to-video studio that turns prompts into cinematic clips with real-time previews.",
    tags: ["Next.js", "TypeScript", "AI"],
    image: project1,
    link: "#",
  },
  {
    title: "AI Image Cleaner",
    description:
      "One-tap tool to remove noise, objects and imperfections using on-device AI models.",
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

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Expertise",
    items: [
      "AI Content Creation",
      "Social Media Management",
      "Visual Storytelling",
      "Graphic Design & Branding",
      "Content Strategy & Campaign Planning",
      "Brand Building & Creative Direction",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Gemini",
      "Midjourney",
      "Leonardo AI",
      "Kling AI",
      "Veo 3",
      "Seedance AI",
      "Flow AI",
      "Grok",
      "Higgsfield",
      "Runway ML",
      "Eleven Labs",
    ],
  },
];

export const skills: string[] = skillGroups.flatMap((group) => group.items);

export interface Service {
  title: string;
  description: string;
  number: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "AI Content Creation",
    description:
      "AI-generated images, videos, campaign visuals and brand assets for digital launches.",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Complete social media presence, content calendars and audience engagement strategy.",
  },
  {
    number: "03",
    title: "Graphic Design & Branding",
    description:
      "Banners, product creatives, promotional campaigns and polished visual identities.",
  },
  {
    number: "04",
    title: "Campaign Strategy",
    description:
      "Seasonal, festive and high-converting campaign planning from concept to execution.",
  },
  {
    number: "05",
    title: "Visual Storytelling",
    description:
      "Creative concepts that turn brand messages into clear, memorable visual narratives.",
  },
  {
    number: "06",
    title: "AI Creative Workflow",
    description:
      "Image enhancement, background replacement and faster production using modern AI tools.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#services" },
  { label: "Contact", href: "#contact" },
];
