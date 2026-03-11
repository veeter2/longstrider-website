import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar } from "lucide-react"
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
      icon: Calendar,
      title: "Visit Us",
      content: "Austin, TX",
      description: "Schedule an in-person meeting",
      link: "https://calendly.com/longstriderai/meeting",
    },
  ]

  return (
    <section className="py-20 md:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Ready to Get
            <span className="cosmic-text"> Started?</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Connect with our team to learn how Longstrider.ai can transform your relationship with AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10 md:mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="cosmic-border bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/40 transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="cosmic-glow w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-sm md:text-base text-primary font-medium mb-2">{info.content}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">{info.description}</p>
                {info.link && (
                  <Button asChild variant="outline" size="sm" className="mt-2 bg-transparent">
                    <Link href={info.link} target="_blank" rel="noopener noreferrer">
                      Schedule Meeting
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cosmic-glow bg-primary hover:bg-primary/90 px-8 py-6">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
