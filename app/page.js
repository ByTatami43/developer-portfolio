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
      {/* 1. Sobre mí (Hero + About) */}
      <HeroSection />
      <AboutSection />

      {/* 2. Experiencia */}
      <Experience />

      {/* 3. Formación */}
      <Education />

      {/* 4. Proyectos destacados */}
      <Projects />

      {/* 5. Presentaciones técnicas (De momento un espacio reservado) */}
      {/* <Presentaciones /> */}

      <Presentations />

      {/* 6. Blog / artículos */}
      <Blog blogs={blogsData} />

      {/* 7. Skills / Idiomas / Contacto */}
      <Skills />
      <ContactSection />
    </div>
  )
};