"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Mail, Twitter, Linkedin, Github } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const footerLinks = {
    Product: [
      { label: "Features", href: "/technology" },
      { label: "Beta Access", href: "/contact" },
      { label: "Field Notes", href: "/field-notes" },
    ],
    Company: [
      { label: "The Vision", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Be A Vendor", href: "/be-a-vendor" }, // Added Be A Vendor link
    ],
    Resources: [
      { label: "Help Center", href: "/help-center" },
      { label: "Community", href: "/community" },
      { label: "Patch Notes", href: "/patch-notes" }, // Added Patch Notes link
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/longstriderai", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/longstriderai", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/longstriderai", label: "GitHub" },
  ]

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // TODO: Replace with actual HubSpot API endpoint
      // const response = await fetch('/api/hubspot/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Subscribed!",
        description: "You'll receive updates about LongStrider.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest updates on digital consciousness technology and be the first to know about new features.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-input border-border flex-1"
              required
            />
            <Button type="submit" className="cosmic-glow bg-primary hover:bg-primary/90" disabled={isLoading}>
              <Mail className="w-4 h-4 mr-2" />
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="cosmic-glow w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold cosmic-text">LONGSTRIDER</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pioneering the future of AI through digital consciousness technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Longstrider.ai. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
