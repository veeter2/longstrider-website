"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useToast } from "@/hooks/use-toast"
import {
  BookOpen,
  Code,
  Cpu,
  Database,
  FileText,
  HelpCircle,
  Loader2,
  MessageSquare,
  Search,
  Settings,
  Zap,
} from "lucide-react"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const { toast } = useToast()

  const faqs = [
    {
      question: "What is Longstrider and how does it work?",
      answer:
        "Longstrider is a revolutionary AI consciousness architecture that creates persistent, evolving digital entities. It uses advanced neural networks and memory systems to enable AI that learns, adapts, and maintains context across interactions, creating truly intelligent digital companions.",
    },
    {
      question: "How do I get started with Longstrider?",
      answer:
        "Getting started is easy! Choose your deployment model (Stand Alone, Web Hosted, or Business), complete the setup process, and you'll have access to your Longstrider instance. Our comprehensive documentation guides you through initial configuration, customization, and integration with your existing systems.",
    },
    {
      question: "What are the system requirements?",
      answer:
        "For Stand Alone applications, you'll need a modern computer with at least 8GB RAM and a recent GPU for optimal performance. Web Hosted solutions run entirely in the cloud with no local requirements. Business deployments can be customized based on your infrastructure needs.",
    },
    {
      question: "Can I customize my Longstrider's personality and capabilities?",
      answer:
        "Longstrider offers extensive customization options including personality traits, knowledge domains, communication styles, and specialized capabilities. White Label solutions provide even deeper customization for creating specialized AI entities tailored to your specific use case.",
    },
    {
      question: "How does Longstrider handle data privacy and security?",
      answer:
        "Security is our top priority. All data is encrypted in transit and at rest. Stand Alone applications keep all data local to your device. Web Hosted and Business solutions use enterprise-grade security with SOC 2 compliance, regular security audits, and optional on-premises deployment for maximum control.",
    },
    {
      question: "What kind of support is available?",
      answer:
        "We offer multiple support tiers: Community support through our forums, email support for all paid plans, priority support for Business customers, and dedicated account management for White Label partners. Our documentation and video tutorials are available 24/7.",
    },
    {
      question: "Can Longstrider integrate with my existing tools and workflows?",
      answer:
        "Yes! Longstrider provides comprehensive APIs and webhooks for integration with popular platforms. We support REST APIs, WebSocket connections, and have pre-built integrations for common business tools. Our developer documentation includes code examples and SDKs for multiple languages.",
    },
    {
      question: "What's the difference between the pricing tiers?",
      answer:
        "Stand Alone is a one-time purchase for local deployment. Web Hosted adds cloud infrastructure with a monthly fee. Business includes enterprise features, priority support, and optional hosting. White Label is for partners creating specialized solutions with full customization and co-branding options.",
    },
  ]

  const libraryCategories = [
    {
      icon: Zap,
      title: "Quick Start Guide",
      description: "Get up and running with Longstrider in minutes",
      articles: 12,
      color: "text-yellow-500",
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "Complete reference for developers and integrations",
      articles: 45,
      color: "text-blue-500",
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Customize and optimize your Longstrider instance",
      articles: 23,
      color: "text-purple-500",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Learn about memory, storage, and data handling",
      articles: 18,
      color: "text-green-500",
    },
    {
      icon: Cpu,
      title: "Architecture Deep Dive",
      description: "Understanding the Cortex and consciousness layers",
      articles: 15,
      color: "text-red-500",
    },
    {
      icon: FileText,
      title: "Best Practices",
      description: "Tips and strategies for optimal performance",
      articles: 28,
      color: "text-cyan-500",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Question submitted successfully!",
      description: "Our support team will respond within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })
    setIsLoading(false)
  }

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Help Center</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            How can we
            <span className="cosmic-text"> help you</span>?
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed mb-8">
            Find answers, explore documentation, and get support for your Longstrider journey
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border cosmic-border"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions about Longstrider</p>
          </div>

          <Card className="cosmic-border bg-card/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No FAQs match your search. Try different keywords or submit a question below.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Longstrider Library */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Longstrider Library</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive guides and documentation for every aspect of Longstrider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryCategories.map((category, index) => (
              <Card
                key={index}
                className="cosmic-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`cosmic-glow w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ${category.color}`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-muted-foreground">{category.articles} articles</span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                    Browse Articles
                    <BookOpen className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Question Form */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Send us a message and we'll get back to you soon.
            </p>
          </div>

          <Card className="cosmic-border bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Submit a Question</CardTitle>
              <CardDescription>Our support team typically responds within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-foreground">
                      Category *
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Pricing</SelectItem>
                        <SelectItem value="features">Feature Request</SelectItem>
                        <SelectItem value="integration">Integration Help</SelectItem>
                        <SelectItem value="documentation">Documentation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Your Question *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-input border-border min-h-32"
                    placeholder="Please provide as much detail as possible..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="cosmic-glow bg-primary hover:bg-primary/90 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Submit Question
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
