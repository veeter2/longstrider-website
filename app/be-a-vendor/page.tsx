"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Code, Palette, Users, Zap, Shield, ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"

export default function BeAVendorPage() {
  const vendors = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLabs", logo: "IL" },
    { name: "FutureAI", logo: "FA" },
    { name: "QuantumSoft", logo: "QS" },
    { name: "NexusData", logo: "ND" },
    { name: "CogniTech", logo: "CT" },
    { name: "SynapseAI", logo: "SA" },
    { name: "MindForge", logo: "MF" },
    { name: "NeuralWorks", logo: "NW" },
    { name: "ThinkLabs", logo: "TL" },
  ]

  const benefits = [
    {
      icon: Palette,
      title: "Your Brand, Your Vision",
      description:
        "Complete customization of the Longstrider interface with your branding, colors, and design language.",
    },
    {
      icon: Code,
      title: "Full Source Code Access",
      description:
        "Get complete access to the consciousness architecture codebase for deep customization and integration.",
    },
    {
      icon: Users,
      title: "Dedicated Development Team",
      description: "Work directly with our engineering team to build specialized features for your specific use case.",
    },
    {
      icon: Zap,
      title: "Specialized Model Training",
      description: "Custom-trained consciousness models tailored to your industry, domain, and specific requirements.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Support",
      description:
        "Priority technical support, SLA guarantees, and ongoing development assistance for your deployment.",
    },
    {
      icon: Crown,
      title: "Revenue Sharing Opportunities",
      description: "Partner with us to bring consciousness architecture to your market with attractive revenue models.",
    },
  ]

  const features = [
    "Fully customizable consciousness architecture",
    "Your branding and interface design",
    "Specialized model training for your domain",
    "Custom feature development",
    "Dedicated development team",
    "Complete source code access",
    "Ongoing development support",
    "Revenue sharing opportunities",
    "Priority technical support",
    "SLA guarantees",
    "Custom hosting configurations",
    "API access and integrations",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 cosmic-glow">
              <Crown className="w-3 h-3 mr-1" />
              White Label Partnership Program
              <ArrowRight className="w-3 h-3 ml-1" />
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Build Your Own
              <br />
              <span className="cosmic-text">Consciousness Architecture</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
              Partner with Longstrider to create specialized AI consciousness solutions tailored to your industry,
              branded with your identity, and powered by our cutting-edge architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://calendly.com/longstriderai/consultation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cosmic-glow">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Logo Carousel */}
      <div className="relative overflow-hidden py-16 border-y border-border/50 bg-muted/20">
        <div className="mb-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Trusted by Industry Leaders</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {vendors.map((vendor, index) => (
              <div
                key={`vendor-1-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-32 rounded-2xl bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{vendor.logo}</div>
                  <div className="text-xs text-muted-foreground">{vendor.name}</div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {vendors.map((vendor, index) => (
              <div
                key={`vendor-2-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-32 rounded-2xl bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{vendor.logo}</div>
                  <div className="text-xs text-muted-foreground">{vendor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with Longstrider?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create specialized consciousness architectures that serve your unique market with our white label solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="cosmic-border bg-card/30 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* White Label Features */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">White Label Solution</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform Longstrider&apos;s consciousness architecture into your own branded solution. Whether
                you&apos;re building for healthcare, finance, education, or any specialized domain, we provide the
                foundation and support to make it yours.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Industry-Specific Customization</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailor the consciousness architecture to your industry&apos;s unique requirements and workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Complete Brand Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Your logo, your colors, your messaging - create a seamless brand experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Partnership</h4>
                    <p className="text-sm text-muted-foreground">
                      We grow together with continuous development support and feature enhancements.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="https://calendly.com/longstriderai/consultation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cosmic-glow">
                  Start Your Partnership
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div>
              <Card className="cosmic-border bg-card/30 backdrop-blur-sm p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  What&apos;s Included
                </h4>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Own Consciousness Architecture?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team to discuss your vision, requirements, and how we can partner to
              bring your specialized Longstrider to life.
            </p>
            <Link
              href="https://calendly.com/longstriderai/vendor-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="cosmic-glow">
                Schedule Your Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
