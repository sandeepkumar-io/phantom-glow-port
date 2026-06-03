import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease },
  }),
};

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const pX = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 20 });
  const pY = useSpring(useTransform(my, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 20 });

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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-12 pt-28"
    >
      {/* glow blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-lime/30 blur-[100px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-lime/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mb-6 text-center text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Sandeep Kumar — Frontend Developer
        </motion.p>

        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <motion.h1
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="font-display text-stretch text-center text-[18vw] font-900 uppercase md:text-right md:text-[9vw]"
          >
            Digital
          </motion.h1>

          {/* center image */}
          <motion.div
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
            className="relative mx-auto w-[64vw] max-w-[300px] md:w-[22vw]"
          >
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-2xl">
              <img
                src={heroPortrait}
                alt="Sandeep Kumar portrait"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            {/* glowing button */}
            <motion.div
              style={{ x: pX, y: pY }}
              className="absolute -bottom-6 -right-6"
            >
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-lime-foreground glow-lime">
                <MousePointer2 className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              custom={3}
              variants={rise}
              initial="hidden"
              animate="show"
              className="font-display text-stretch text-center text-[18vw] font-900 uppercase md:text-left md:text-[9vw]"
            >
              Developer
            </motion.h1>
            <motion.p
              custom={4}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-xs text-center text-sm text-muted-foreground md:text-left"
            >
              I'm a frontend developer building modern AI-powered web experiences.
            </motion.p>
          </div>
        </div>

        {/* floating preview card */}
        <motion.div
          custom={5}
          variants={rise}
          initial="hidden"
          animate="show"
          style={{ x: pX, y: pY }}
          className="glass mx-auto mt-10 flex w-fit items-center gap-3 rounded-2xl border border-border p-3 md:absolute md:right-6 md:top-40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/20 text-lime">
            <ArrowUpRight className="h-5 w-5" />
          </span>
          <div className="text-left">
            <p className="text-xs font-semibold">Available for work</p>
            <p className="text-xs text-muted-foreground">2026 — Open to projects</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14 overflow-hidden"
        >
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease }}
            className="text-center font-display text-[9vw] font-800 uppercase leading-none text-muted-foreground/40 md:text-[5vw]"
          >
            The only portfolio you need
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
