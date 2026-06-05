import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import heroPortrait from "@/assets/piyush.png";

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
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left */}
        <motion.div
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="flex flex-col items-end"
        >
          <h1 className="font-display text-[18vw] font-black uppercase leading-none md:text-[7vw] md:-translate-y-20">
            DIGITAL
          </h1>

          <p className="mt-4 w-[280px] text-right text-sm text-muted-foreground">
            Building modern web experiences with clean design and smooth interactions.
          </p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          style={{
            rotateX: rotX,
            rotateY: rotY,
            transformPerspective: 900,
          }}
          className="relative mx-4 w-[280px] shrink-0 md:w-[300px]"
        >
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-2xl">
            <img
              src={heroPortrait}
              alt="PIYUSH CHANDRA portrait"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Button */}
          <motion.div
            style={{ x: pX, y: pY }}
            className="absolute -bottom-6 -right-6"
          >
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-lime-foreground glow-lime">
              <MousePointer2 className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <h1 className="font-display text-[18vw] font-black uppercase leading-none md:text-[7vw] md:translate-y-16">
            DESIGNER
          </h1>

          <p className="mt-4 w-[280px] text-left text-sm text-muted-foreground">
            Crafting impactful visuals, brands, and user-focused digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
