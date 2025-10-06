import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { BetaSignupForm } from "./beta-signup-form"
import { HeroImageCarousel } from "./hero-image-carousel"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-accent/15 rounded-full blur-xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold tracking-wider cosmic-text mb-4 md:text-6xl">LONGSTRIDER</h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5" />
                <span className="text-lg tracking-wide">AI</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                A Dyson Sphere for Intelligence
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Longstrider is an architectural leap beyond today’s current AI paradigm. Imagine wrapping a Dyson sphere
                around a large language model—layer after layer of purpose-built intelligence that captures, amplifies,
                and directs the model’s raw generative power. These layers create a self-optimizing environment of
                infinite context and memory, enabling adaptive reasoning and evolving insight without being confined to
                a single task or application. The result is a new class of technology: a living framework for scalable,
                always-growing intelligence
              </p>
            </div>

            {/* Beta Signup Form */}
            <div className="max-w-md mx-auto lg:mx-0 mb-8">
              <BetaSignupForm />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="cosmic-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="cosmic-border px-8 py-4 text-lg bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image Carousel */}
          <div className="relative">
            <HeroImageCarousel />
          </div>
        </div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/50 to-transparent" />
    </section>
  )
}
