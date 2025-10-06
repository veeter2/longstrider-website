import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@longstrider.ai",
      description: "Get in touch for partnerships and inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Speak directly with our team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Austin, TX",
      description: "Schedule an in-person meeting",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Available",
      description: "Round-the-clock assistance",
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Get
            <span className="cosmic-text"> Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Connect with our team to learn how Longstrider.ai can transform your relationship with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="cosmic-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="cosmic-glow w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-2">{info.content}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="cosmic-glow bg-primary hover:bg-primary/90 px-8 py-4">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
