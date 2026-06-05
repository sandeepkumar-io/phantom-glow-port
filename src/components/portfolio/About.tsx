import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { skillGroups } from "@/lib/portfolio-data";
import heroPortrait from "@/assets/piyush.png";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const education = [
  "Digital Marketing & Creative Strategy 1.5+ Years Experience",
  "Managed social media campaigns and brand growth initiatives",
  "Created AI-powered content, visuals, and marketing assets",
  "Skilled in graphic design, video editing, and digital storytelling",
];

const workExperience = [
  "1.5+ Years in Digital Marketing & Branding",
  "AI Content Creator & Graphic Designer",
  "Social Media Strategy & Brand Growth Specialist",
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/piyush-chandra-digitalmarketer/",
  },
  { label: "Email", icon: Mail, href: "#contact" },
  { label: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919811970043" },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/piyush77.___?igsh=Nmd4MndpaXVyeWl4",
  },
];

export function About() {
  const featuredSkills = [...skillGroups[0].items.slice(0, 4), ...skillGroups[1].items.slice(0, 6)];

  return (
    <section id="about" className="relative mx-auto max-w-[1600px] px-4 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 5 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.85, ease }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070914] px-5 py-6 text-white shadow-2xl md:px-10 md:py-9 lg:px-14 lg:py-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_45%,rgba(34,92,255,0.72),transparent_24%),linear-gradient(110deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.04))]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative grid min-h-[680px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex min-h-[560px] flex-col justify-between">
            <div className="relative z-10 text-center">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
                className="text-sm font-medium text-white/78 md:text-base"
              >
                Hello, I am
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.18, ease }}
                className="font-display whitespace-nowrap text-4xl font-black uppercase leading-[0.86] sm:text-5xl md:text-6xl xl:text-7xl"
              >
                PIYUSH CHANDRA
              </motion.h2>
            </div>

            <motion.img
              src={heroPortrait}
              alt="PIYUSH CHANDRA"
              loading="lazy"
              width={800}
              height={1000}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="absolute left-1/2 top-[52%] h-auto w-[90%] max-w-[760px] -translate-x-1/2 -translate-y-1/2 object-contain object-center drop-shadow-[0_32px_80px_rgba(0,0,0,0.72)]"
            />
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-9">
            <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, delay: 0.2, ease }}
              >
                <h3 className="font-display text-4xl font-bold text-white md:text-5xl">About Me</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                  Creative digital marketing professional focused on social media management,
                  graphic design, AI-powered content creation, and brand marketing. I build engaging
                  campaigns, generate AI images and videos, and shape polished visual stories for
                  modern brands.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, delay: 0.28, ease }}
              >
                <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                  Work Experience
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/68">
                  {workExperience.map((item) => (
                    <li key={item} className="border-l border-white/18 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, delay: 0.36, ease }}
              >
                <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                  Professional Experience
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/68">
                  {education.map((item) => (
                    <li key={item} className="border-l border-white/18 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, delay: 0.44, ease }}
              >
                <h3 className="font-display text-3xl font-bold text-white md:text-4xl">Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white/76"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.52, ease }}
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-12 w-12 items-center justify-center rounded border border-white/12 bg-white/[0.07] text-white/70 transition-colors hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white"
                >
                  <social.icon className={social.label === "WhatsApp" ? "h-6 w-6" : "h-5 w-5"} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
