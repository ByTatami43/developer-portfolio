import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Presentations from "./components/homepage/presentations";
import { blogsData } from "@/utils/data/blogs-data";

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Presentations />
      <Blog blogs={blogsData} />
      <ContactSection />
    </div>
  )
};