import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { AchievementsSection } from "@/components/jack/AchievementsSection";
import { ExperienceSection } from "@/components/jack/ExperienceSection";

import { ContactSection } from "@/components/jack/ContactSection";
import { FooterSection } from "@/components/jack/FooterSection";
import { SmoothScroll } from "@/components/jack/SmoothScroll";
import { CursorGlow } from "@/components/jack/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Sharma — Java Full Stack Developer" },
      { name: "description", content: "Om Sharma — Java Full Stack Developer. Building scalable backends with Spring Boot & MySQL and modern web apps with React." },
      { property: "og:title", content: "Om Sharma — Java Full Stack Developer" },
      { property: "og:description", content: "Scalable Java backends. Modern React frontends. Portfolio & selected work." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <SmoothScroll />
      <CursorGlow />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <AchievementsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
