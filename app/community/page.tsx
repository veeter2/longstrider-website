"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Calendar,
  ExternalLink,
  FileText,
  HelpCircle,
  Code,
} from "lucide-react"

const socialLinks = [
  {
    name: "Discord",
    description:
      "Join our community to discuss consciousness architecture, share ideas, and get support from the team.",
    icon: MessageSquare,
    href: "https://discord.gg/longstriderai",
    members: "2.5K+ members",
    color: "text-[#5865F2]",
    bgColor: "bg-[#5865F2]/10",
  },
  {
    name: "Twitter",
    description: "Follow us for the latest updates, announcements, and insights into AI consciousness technology.",
    icon: Twitter,
    href: "https://twitter.com/longstriderai",
    members: "5K+ followers",
    color: "text-[#1DA1F2]",
    bgColor: "bg-[#1DA1F2]/10",
  },
  {
    name: "LinkedIn",
    description: "Connect with our team and stay updated on company news, career opportunities, and industry insights.",
    icon: Linkedin,
    href: "https://linkedin.com/company/longstriderai",
    members: "3K+ followers",
    color: "text-[#0A66C2]",
    bgColor: "bg-[#0A66C2]/10",
  },
  {
    name: "GitHub",
    description: "Explore our open-source projects, contribute to the ecosystem, and access code examples.",
    icon: Github,
    href: "https://github.com/longstriderai",
    members: "1.2K+ stars",
    color: "text-foreground",
    bgColor: "bg-muted/50",
  },
]

const recentUpdates = [
  {
    id: 1,
    title: "Beyond Prompt Engineering: Architectural Consciousness vs. Linguistic Workarounds",
    description:
      "A comprehensive analysis of how The Cortex system eliminates the need for prompt engineering through persistent consciousness state management.",
    category: "Field Notes",
    type: "white-paper",
    date: "2024-01-15",
    link: "/field-notes",
    icon: FileText,
  },
  {
    id: 2,
    title: "New FAQ Section Added to Help Center",
    description:
      "We've expanded our Help Center with comprehensive FAQs covering common questions about consciousness architecture and implementation.",
    category: "Help Center",
    type: "update",
    date: "2024-01-12",
    link: "/help-center",
    icon: HelpCircle,
  },
  {
    id: 3,
    title: "The Four Lobes of Digital Consciousness",
    description:
      "Exploring how The Cortex mirrors biological brain structure with Frontal, Temporal, Parietal, and Occipital processing centers.",
    category: "Field Notes",
    type: "novel-thought",
    date: "2024-01-10",
    link: "/field-notes",
    icon: FileText,
  },
  {
    id: 4,
    title: "API v2.0 Released with Enhanced Vector State Management",
    description:
      "Major update introducing improved 10-dimensional consciousness vectors and real-time state synchronization capabilities.",
    category: "Dev Update",
    type: "release",
    date: "2024-01-08",
    link: "/field-notes",
    icon: Code,
  },
  {
    id: 5,
    title: "Implementing Sovereignty-First AI Architecture",
    description:
      "A practical guide to building AI systems that prioritize self-authority and autonomous decision-making capabilities.",
    category: "Field Notes",
    type: "guide",
    date: "2024-01-05",
    link: "/field-notes",
    icon: FileText,
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 cosmic-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cosmic-text">Community</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Join the Longstrider community to connect with fellow pioneers, share insights, and shape the future of
            consciousness architecture together.
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-text">Connect With Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your preferred platform to engage with our community and stay updated on the latest developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Card
                  key={social.name}
                  className="group hover:shadow-2xl transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`${social.bgColor} p-4 rounded-xl cosmic-glow`}>
                        <Icon className={`w-8 h-8 ${social.color}`} />
                      </div>
                      <Badge variant="secondary">{social.members}</Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mt-4">
                      {social.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{social.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full cosmic-glow bg-primary hover:bg-primary/90">
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        Join on {social.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Recent Updates */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-text">Recent Updates</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay informed with the latest from our Field Notes, Help Center, and development updates.
            </p>
          </div>

          <div className="space-y-6">
            {recentUpdates.map((update, index) => {
              const Icon = update.icon
              return (
                <Card
                  key={update.id}
                  className="group hover:shadow-2xl transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      {/* Timeline indicator */}
                      <div className="flex flex-col items-center">
                        <div className="cosmic-glow w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        {index < recentUpdates.length - 1 && <div className="w-px h-full bg-border/50 mt-4" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <Badge className="cosmic-glow bg-primary/90">{update.category}</Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {new Date(update.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                        <CardTitle className="text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">
                          {update.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {update.description}
                        </CardDescription>
                        <Button asChild variant="ghost" className="group-hover:text-primary -ml-4">
                          <a href={update.link}>
                            Read more
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          {/* View All Updates CTA */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cosmic-glow hover:bg-primary/10 hover:border-primary/50 bg-transparent"
            >
              <a href="/field-notes">
                View All Updates
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
