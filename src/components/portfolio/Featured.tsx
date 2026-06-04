import { motion } from "framer-motion";
import featured from "@/assets/featured-abstract.jpg";
import video1 from "@/assets/1.mp4";
import video2 from "@/assets/2.mp4";
import video3 from "@/assets/3.mp4";
import video4 from "@/assets/4.mp4";

const ease = [0.22, 1, 0.36, 1] as const;

const featuredVideos = [
  { src: video1, label: "AI Creative Web Experience video 1" },
  { src: video2, label: "AI Creative Web Experience video 2" },
  { src: video3, label: "AI Creative Web Experience video 3" },
  { src: video4, label: "AI Creative Web Experience video 4" },
];

export function Featured() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16">
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-10 flex items-end justify-between gap-4"
      >
        <h3 className="font-display text-3xl font-black uppercase leading-none md:text-5xl">
          AI Video Showcase
        </h3>
        <span className="hidden text-sm font-medium text-muted-foreground md:block">
          Selected AI creative clips
        </span>
      </motion.div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {featuredVideos.map((video, i) => (
          <motion.div
            key={video.src}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            className="overflow-hidden rounded-[1.4rem] border border-border bg-card/60"
          >
            <video
              src={video.src}
              aria-label={video.label}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-[620px] w-full object-cover md:h-[720px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
