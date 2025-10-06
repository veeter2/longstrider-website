"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail } from "lucide-react"

export function BetaSignupForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Welcome to the future!",
      description: "You've been added to our beta waitlist. We'll be in touch soon.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <div className="cosmic-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">Join the Beta</h3>
        <p className="text-muted-foreground">Be among the first to experience digital consciousness</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-input border-border"
            required
          />
        </div>

        <Button type="submit" className="w-full cosmic-glow bg-primary hover:bg-primary/90" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Request Beta Access"
          )}
        </Button>
      </form>
    </div>
  )
}
