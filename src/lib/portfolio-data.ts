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
    title: "Gulbhahar Brand Growth",
    description:
      "Developed creative campaigns for a luxury ethnic fashion brand. Enhanced brand presence through visuals, content, and digital marketing.",
    tags: ["Fashion Brand", "Campaigns", "Brand Growth"],
    image: project1,
    link: "https://www.gulbhahar.com/",
  },
  {
    title: "Reeltor Marketing Campaign",
    description:
      "Created engaging real estate marketing creatives and content strategies. Focused on lead generation, brand awareness, and audience engagement.",
    tags: ["Real Estate", "Lead Generation", "Content Strategy"],
    image: project2,
    link: "https://www.reeltor.com/",
  },
  {
    title: "AI Creative Studio",
    description:
      "Produced AI-generated images, videos, and commercial ad creatives. Leveraged cutting-edge AI tools to deliver high-quality visual content.",
    tags: ["AI Visuals", "Ad Creatives", "Video"],
    image: project3,
    link: "#",
  },
  {
    title: "Social Media Strategy",
    description:
      "Planned and executed content strategies across social platforms. Optimized engagement, reach, and brand communication through data-driven content.",
    tags: ["Social Media", "Engagement", "Strategy"],
    image: project4,
    link: "#",
  },
  {
    title: "Brand Identity Design",
    description:
      "Designed cohesive visual identities and marketing assets for brands. Focused on storytelling, consistency, and memorable brand experiences.",
    tags: ["Brand Identity", "Marketing Assets", "Storytelling"],
    image: project5,
    link: "#",
  },
  {
    title: "AI Video Production",
    description:
      "Created AI-powered video advertisements and promotional content. Transformed ideas into cinematic visuals using advanced AI workflows.",
    tags: ["AI Video", "Advertisements", "Promotional Content"],
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
      "Digital Marketing Strategy",
      "Social Media Management",
      "Brand Identity Design",
      "Visual Storytelling",
      "Campaign Planning & Execution",
    ],
  },
  {
    title: "Tools & Technologies",
    items: ["Campaign Planning & Execution", "Visual Storytelling"],
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
    title: "AI Creative Direction",
    description:
      "Creating AI-powered visuals, videos, and campaigns that transform ideas into engaging brand experiences.",
  },
  {
    number: "02",
    title: "Digital Marketing Strategy",
    description:
      "Developing data-driven marketing strategies focused on growth, engagement, and brand visibility.",
  },
  {
    number: "03",
    title: "Brand Identity Design",
    description:
      "Crafting cohesive visual identities that help brands stand out and leave a lasting impression.",
  },
  {
    number: "04",
    title: "Social Media Growth",
    description:
      "Building content systems and platform strategies that drive audience engagement and community growth.",
  },
  {
    number: "05",
    title: "Visual Storytelling",
    description:
      "Turning concepts into compelling visual narratives that connect brands with their target audience.",
  },
  {
    number: "06",
    title: "AI Video Production",
    description:
      "Producing cinematic AI-generated commercials, fashion campaigns, and promotional content at scale.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#services" },
  { label: "Contact", href: "#contact" },
];
