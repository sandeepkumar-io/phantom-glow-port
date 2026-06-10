// src\components\portfolio\Featured.tsx
import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import featuredExperienceVideo from "@/assets/3736793-uhd_3840_2160_24fps.mp4";
import video1 from "@/assets/1.mp4";
import video2 from "@/assets/2.mp4";
import video3 from "@/assets/3.mp4";
import video4 from "@/assets/4.mp4";
import video5 from "@/assets/black.mp4";
import video6 from "@/assets/Untitled design (21).mp4";

const ease = [0.22, 1, 0.36, 1] as const;

const featuredVideos = [
  { src: video1, label: "AI Creative Web Experience video 1" },
  { src: video2, label: "AI Creative Web Experience video 2" },
  { src: video3, label: "AI Creative Web Experience video 3" },
  { src: video4, label: "AI Creative Web Experience video 4" },
  { src: video5, label: "AI Creative Web Experience video 5" },
  { src: video6, label: "AI Creative Web Experience video 6" },
];

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  label: string;
  rootMargin?: string;
  src: string;
};

function LazyVideo({
  label,
  preload = "metadata",
  rootMargin = "400px",
  src,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, shouldLoad]);

  useEffect(() => {
    if (shouldLoad && props.autoPlay) {
      void videoRef.current?.play().catch(() => undefined);
    }
  }, [props.autoPlay, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      aria-label={label}
      preload={shouldLoad ? preload : "none"}
      {...props}
    />
  );
}

export function Featured() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updatePagination = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
      setSlideCount(carouselApi.scrollSnapList().length);
    };

    updatePagination();
    carouselApi.on("select", updatePagination);
    carouselApi.on("reInit", updatePagination);

    return () => {
      carouselApi.off("select", updatePagination);
      carouselApi.off("reInit", updatePagination);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const autoScroll = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3500);

    return () => {
      window.clearInterval(autoScroll);
    };
  }, [carouselApi]);

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="group relative overflow-hidden rounded-[2.5rem] border border-border"
      >
        <LazyVideo
          src={featuredExperienceVideo}
          label="AI Creative Web Experience"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          rootMargin="600px"
          className="h-[60vh] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-24 flex items-end justify-between gap-4 md:mt-28"
      >
        <h3 className="font-display text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
          AI Video Showcase
        </h3>
      </motion.div>

      <Carousel
        setApi={setCarouselApi}
        opts={{ align: "start", loop: true, slidesToScroll: "auto" }}
        className="mt-5"
      >
        <CarouselContent>
          {featuredVideos.map((video, i) => (
            <CarouselItem key={video.src} className="basis-full sm:basis-1/2 xl:basis-1/4">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="overflow-hidden rounded-[1.4rem] border border-border bg-card/60"
              >
                <LazyVideo
                  src={video.src}
                  label={video.label}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-[440px] w-full object-cover sm:h-[520px] md:h-[640px] xl:h-[720px]"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => carouselApi?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-lime" : "w-2.5 bg-muted-foreground/35"
              }`}
              aria-label={`Go to video page ${index + 1}`}
              aria-current={currentSlide === index ? "page" : undefined}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
