import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useTheme } from "@/hooks/use-theme";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Featured } from "@/components/portfolio/Featured";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import DarkVeil from "@/components/portfolio/DarkVeil";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PIYUSH CHANDRA — Frontend Developer & AI Web Experiences" },
      {
        name: "description",
        content:
          "PIYUSH CHANDRA is a frontend developer building modern, cinematic, AI-powered web experiences with React, Next.js and TypeScript.",
      },
      { property: "og:title", content: "PIYUSH CHANDRA — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Premium, cinematic portfolio of a frontend developer crafting AI-powered web experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <Toaster theme={isDark ? "dark" : "light"} position="bottom-center" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar isDark={isDark} onToggle={toggle} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Featured />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
