import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";
import heroPortrait from "@/assets/hero-portrait.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className="font-display text-stretch text-[16vw] font-black uppercase leading-none md:text-[10vw]"
      >
        About Me
      </motion.h2>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[2rem] border border-border"
        >
          <img
            src={heroPortrait}
            alt="Sandeep Kumar"
            loading="lazy"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I'm <span className="font-semibold text-foreground">Sandeep Kumar</span>, a frontend
            developer crafting fast, elegant and AI-powered web experiences. I blend clean code with
            cinematic design to build interfaces that feel premium and effortless — from marketing
            sites to data-rich dashboards.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                whileHover={{ y: -4 }}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
