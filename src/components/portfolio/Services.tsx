import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/portfolio-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-[1600px] px-4 py-28">
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
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[1.8rem] border border-border bg-card p-7"
          >
            <span className="font-display text-5xl font-black text-lime/30 transition-colors group-hover:text-lime">
              {s.number}
            </span>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            <ArrowUpRight className="absolute right-6 top-7 h-5 w-5 -translate-y-1 translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-lime group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
