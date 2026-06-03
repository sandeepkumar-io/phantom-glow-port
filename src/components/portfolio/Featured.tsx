import { motion } from "framer-motion";
import featured from "@/assets/featured-abstract.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Featured() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="group relative overflow-hidden rounded-[2.5rem] border border-border"
      >
        <img
          src={featured}
          alt="AI Creative Web Experience"
          loading="lazy"
          width={1400}
          height={900}
          className="h-[60vh] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="mb-5 rounded-full bg-lime px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lime-foreground glow-lime"
          >
            Featured Project
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="font-display text-stretch px-4 text-[12vw] font-black uppercase text-white md:text-[6vw]"
          >
            AI Creative Web Experience
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
}
