import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SiteFooter />
    </main>
  )
}
