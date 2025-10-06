import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologyPreview } from "@/components/technology-preview"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TechnologyPreview />
      <ContactSection />
    </main>
  )
}
