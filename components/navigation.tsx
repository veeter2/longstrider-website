"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "The Vision" },
    { href: "/technology", label: "Technology" },
    { href: "/field-notes", label: "Field Notes" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="cosmic-glow w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xl font-bold cosmic-text">LONGSTRIDER</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors relative",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button size="sm" className="cosmic-glow bg-primary hover:bg-primary/90">
              Get Beta Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    pathname === item.href && "text-foreground font-medium",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="cosmic-glow bg-primary hover:bg-primary/90 w-fit">
                Get Beta Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
