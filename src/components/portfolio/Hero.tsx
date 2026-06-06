import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, MousePointer2, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/piyush.png";

/* ── animation presets ─────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.4 + i * 0.1, ease },
  }),
};

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  /* 3‑D tilt on portrait */
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });

  /* parallax float on button */
  const pX = useSpring(useTransform(mx, [-0.5, 0.5], [-20, 20]), {
    stiffness: 80,
    damping: 20,
  });
  const pY = useSpring(useTransform(my, [-0.5, 0.5], [-20, 20]), {
    stiffness: 80,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:px-12 lg:px-20"
    >
      {/* ── Main Content ─────────────────────────────── */}
      <div className="mx-auto w-full max-w-7xl">
        {/* ── Top Row: Badge ──────────────────────────── */}
        <motion.div
          custom={0}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mb-8 md:mb-10"
        >
        </motion.div>

        {/* ── Hero Grid: Text + Image ─────────────────── */}
        <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* Left — Typography & CTA */}
          <div className="w-full text-center lg:text-left">
            {/* Title */}
            <motion.h1
              custom={1}
              variants={rise}
              initial="hidden"
              animate="show"
              className="font-display text-[15vw] font-black uppercase leading-[0.88] tracking-tight sm:text-[12vw] md:text-[10vw] lg:text-[6.5vw] xl:text-[6vw]"
            >
              <span className="block">Digital</span>
              <span className="mt-1 block text-lime md:mt-2">Designer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-8 lg:mx-0 lg:max-w-lg"
            >
              Crafting impactful visuals, brands, and user-focused digital
              products — blending creativity with strategy for memorable
              experiences.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              custom={3}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-10 lg:justify-start"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-wide text-lime-foreground shadow-lg transition-all duration-300 hover:scale-[1.04] hover:shadow-xl glow-lime"
              >
                Let's Talk
                <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.gulbhahar.com/"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
              >
                View Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              custom={4}
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-8 sm:gap-12 md:mt-14 lg:mx-0 lg:max-w-none lg:justify-start"
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Happy Clients" },
                { value: "2+", label: "Years Exp." },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-black text-foreground sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <motion.div
            custom={2}
            variants={scaleIn}
            initial="hidden"
            animate="show"
            className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-none"
          >
            {/* 3D‑tilt wrapper */}
            <motion.div
              style={{
                rotateX: rotX,
                rotateY: rotY,
                transformPerspective: 900,
              }}
              className="relative"
            >
              {/* Glow backdrop */}
              <div className="absolute -inset-4 rounded-[3rem] bg-lime/10 blur-3xl" />

              {/* Image card */}
             <div className="relative w-full max-w-[600px] overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl">
  <img
    src={heroPortrait}
    alt="Piyush Chandra portrait"
    className="w-full h-auto object-cover"
  />
  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
</div>

              {/* Floating CTA Button */}
              <motion.div
                style={{ x: pX, y: pY }}
                className="absolute -bottom-5 -right-5 z-10 md:-bottom-6 md:-right-6"
              >
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-lime-foreground shadow-xl transition-transform duration-300 hover:scale-110 glow-lime md:h-16 md:w-16">
                  <MousePointer2 className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </motion.div>

              {/* Floating Badge — Top Left */}
              <motion.div
                custom={5}
                variants={scaleIn}
                initial="hidden"
                animate="show"
                className="absolute -left-3 -top-3 z-10 rounded-2xl border border-border/60 glass px-4 py-3 shadow-lg sm:-left-5 sm:-top-4 md:-left-6"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-lime" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Creative
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────── */}
      <motion.div
        custom={6}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-muted-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
