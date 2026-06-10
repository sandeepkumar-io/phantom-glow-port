// src\components\portfolio\Services.tsx
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/lib/portfolio-data";

const ease = [0.22, 1, 0.36, 1] as const;

function SkillCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 });
  const sheenX = useSpring(useTransform(mx, [-0.5, 0.5], [-110, 110]), {
    stiffness: 90,
    damping: 18,
  });
  const iconX = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 170, damping: 16 });
  const iconY = useSpring(useTransform(my, [-0.5, 0.5], [-5, 5]), { stiffness: 170, damping: 16 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
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
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease }}
      whileHover={{ y: -12, scale: 1.015 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative isolate min-h-[286px] overflow-hidden rounded-[1.6rem] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(244,248,239,0.72)_48%,rgba(184,255,82,0.22))] p-7 shadow-[0_22px_70px_rgba(8,13,20,0.16)] transition-colors duration-500 hover:border-lime/60 dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(11,14,23,0.94)_48%,rgba(164,255,75,0.14))] dark:shadow-[0_22px_70px_rgba(0,0,0,0.44)]"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <motion.div
        style={{ x: sheenX }}
        className="absolute -inset-y-20 -left-20 -z-10 w-28 rotate-12 bg-white/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-[linear-gradient(to_top,rgba(164,255,75,0.2),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-5xl font-black text-lime/55 transition-colors duration-500 group-hover:text-lime">
            {service.number}
          </span>
          <motion.span
            style={{ x: iconX, y: iconY }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-lime/25 bg-lime/10 text-lime opacity-70 transition-all duration-500 group-hover:border-lime/60 group-hover:bg-lime group-hover:text-lime-foreground group-hover:opacity-100 group-hover:shadow-[0_0_38px_rgba(164,255,75,0.46)]"
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.span>
        </div>

        <div className="mt-auto pt-12">
          <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors duration-500 group-hover:text-foreground/78">
            {service.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-[1600px] overflow-hidden px-4 py-28">
      <div className="pointer-events-none absolute inset-x-[-12vw] bottom-10 top-24 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_42%,rgba(164,255,75,0.14)),repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_128px)] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_84%,transparent)]" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="font-display text-stretch text-[14vw] font-black uppercase leading-none md:text-[8vw]"
      >
        Skills
      </motion.h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <SkillCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
