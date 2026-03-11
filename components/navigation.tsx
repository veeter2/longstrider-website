"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "The Vision" },
    { href: "/technology", label: "Technology" },
    { href: "/field-notes", label: "Field Notes" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  const consciousnessStates = ["γ", "θ", "β", "χ", "δ"]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-background/70 backdrop-blur-lg border-b border-border/30",
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo with Greek letter accent */}
          <Link href="/" className="flex items-center gap-3 group relative" aria-label="LongStrider Home">
            <div className="relative">
              <Image
                src="/images/longstrider-logo.png"
                alt="LongStrider Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary/90 to-foreground bg-clip-text text-transparent">
                LONGSTRIDER
              </span>
              <div className="flex gap-1 opacity-40 group-hover:opacity-60 transition-opacity">
                {consciousnessStates.map((letter, i) => (
                  <span
                    key={i}
                    className="text-[8px] text-primary/70 font-light"
                    style={{
                      animation: `pulse 3s ease-in-out ${i * 0.6}s infinite`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  </div>
                )}
                <div className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="relative bg-gradient-to-r from-primary/90 to-primary text-primary-foreground hover:from-primary hover:to-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              <Link href="/contact">
                <span className="relative z-10">Schedule a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-all rounded-lg",
                    pathname === item.href
                      ? "text-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5",
                  )}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className="mt-4 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground shadow-lg shadow-primary/25"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Schedule a Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </nav>
  )
}
