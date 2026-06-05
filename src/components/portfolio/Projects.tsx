import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group rounded-[1.4rem] border border-border bg-card p-2"
    >
      <div className="relative overflow-hidden rounded-[1rem]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1000}
          height={750}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-lime text-lime-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="p-3">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">{project.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-foreground nav-link"
        >
          View Project <ArrowUpRight className="h-3.5 w-3.5 text-lime" />
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1600px] px-4 py-28">
      <div className="mb-12 flex items-end justify-between gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-stretch text-[14vw] font-black uppercase leading-none md:text-[8vw]"
        >
          Projects
        </motion.h2>
        <span className="hidden text-sm text-muted-foreground md:block">
          Selected work — 2024 / 2026
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
