import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { FloatingHireBadge } from "@/components/ui/floating-hire-badge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorSpotlight />
      <FloatingHireBadge />
      <ScrollProgressBar />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
