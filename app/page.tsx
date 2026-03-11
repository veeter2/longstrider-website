import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ProductShowcase } from "@/components/product-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { MetricsSection } from "@/components/metrics-section"
import { AboutSection } from "@/components/about-section"
import { TechnologyPreview } from "@/components/technology-preview"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero with consciousness animation */}
      <HeroSection />

      {/* Problem/Solution comparison */}
      <ValueProposition />

      {/* Real product screenshots with descriptions */}
      <ProductShowcase />

      {/* Step-by-step process */}
      <HowItWorks />

      {/* Metrics and results */}
      <MetricsSection />

      {/* Detailed about/architecture section */}
      <AboutSection />

      {/* Technology deep dive */}
      <TechnologyPreview />

      {/* Strong CTA */}
      <CTASection />

      {/* Contact form */}
      <ContactSection />
    </main>
  )
}
