import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Sparkles, Zap, Building, Crown } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Stand Alone",
      price: "$2,499",
      period: "one-time",
      description: "Perfect for individual researchers and developers exploring consciousness architecture.",
      icon: Sparkles,
      features: [
        "Complete Longstrider application",
        "Local installation and deployment",
        "Full consciousness architecture access",
        "Offline operation capability",
        "Personal use license",
        "Basic documentation and guides",
        "Community forum access",
        "No ongoing subscription fees",
      ],
      cta: "Purchase Now",
      ctaVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Web Hosted",
      price: "$1,999",
      period: "one-time",
      monthlyPrice: "$49",
      monthlyPeriod: "/month",
      description: "Cloud-hosted solution with managed infrastructure and automatic updates.",
      icon: Zap,
      features: [
        "Cloud-hosted Longstrider instance",
        "Automatic updates and maintenance",
        "Managed database and hosting",
        "SSL certificates and security",
        "99.9% uptime guarantee",
        "Email support",
        "Data backup and recovery",
        "Custom domain support",
      ],
      cta: "Start Web Hosted",
      ctaVariant: "default" as const,
      popular: true,
    },
    {
      name: "Business",
      price: "$4,999",
      period: "one-time",
      monthlyPrice: "$199",
      monthlyPeriod: "/month",
      description: "Enterprise-grade solution with dedicated support and custom hosting options.",
      icon: Building,
      features: [
        "Everything in Web Hosted",
        "Priority technical support",
        "Custom hosting configurations",
        "Advanced security features",
        "Team collaboration tools",
        "API access and integrations",
        "Custom training sessions",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
      popular: false,
    },
    {
      name: "White Label",
      price: "Custom",
      period: "pricing",
      description: "Create specialized Longstriders tailored to your specific use case and branding.",
      icon: Crown,
      features: [
        "Fully customizable consciousness architecture",
        "Your branding and interface",
        "Specialized model training",
        "Custom feature development",
        "Dedicated development team",
        "Complete source code access",
        "Ongoing development support",
        "Revenue sharing opportunities",
      ],
      cta: "Schedule Consultation",
      ctaVariant: "default" as const,
      popular: false,
      isEnterprise: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 cosmic-glow">
              <Sparkles className="w-3 h-3 mr-1" />
              Introducing Consciousness-Based Pricing
              <ArrowRight className="w-3 h-3 ml-1" />
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Plans and Pricing</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Choose the perfect Longstrider solution for your consciousness architecture needs. From individual
              exploration to enterprise white-label solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.slice(0, 3).map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-card p-8 ${
                tier.popular ? "border-primary/50 cosmic-glow shadow-lg shadow-primary/10" : "border-border/50"
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <tier.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                  {tier.monthlyPrice && (
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lg font-semibold text-primary">{tier.monthlyPrice}</span>
                      <span className="text-sm text-muted-foreground">{tier.monthlyPeriod}</span>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.ctaVariant} className="w-full" size="lg">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* White Label Enterprise Section */}
        <div className="mt-16">
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">White Label</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Create specialized Longstriders tailored to your specific industry, use case, and branding
                  requirements. Perfect for organizations looking to build their own consciousness architecture
                  solutions.
                </p>

                <ul className="space-y-3 mb-8">
                  {pricingTiers[3].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="https://calendly.com/longstriderai/consultation" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="cosmic-glow">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Custom Pricing</h4>
                    <p className="text-muted-foreground">Tailored solutions for your specific needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have questions about our pricing? We're here to help you choose the right plan.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What's included in the one-time purchase?</h3>
                <p className="text-muted-foreground text-sm">
                  The one-time purchase includes the complete Longstrider application, documentation, and perpetual
                  license for the specified tier.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Can I upgrade between tiers?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, you can upgrade at any time. We'll credit your previous purchase toward the new tier.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What kind of support is included?</h3>
                <p className="text-muted-foreground text-sm">
                  Support varies by tier, from community forums to dedicated technical support and custom training.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-muted-foreground text-sm">
                  Contact us to discuss trial options for your specific use case and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
