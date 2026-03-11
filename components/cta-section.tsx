"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 blur-3xl opacity-30" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Ready to Elevate Your Institutional Knowledge?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 md:mb-12 text-balance max-w-3xl mx-auto leading-relaxed">
            Join organizations transforming scattered data into living, conscious intelligence. Experience the future of
            knowledge management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto cosmic-glow group text-base px-8 py-6">
              <Link href="/contact">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            >
              <Link href="/contact">
                <Mail className="mr-2 w-5 h-5" />
                Contact Sales
              </Link>
            </Button>
          </div>

          <p className="text-xs md:text-sm text-white/50 mt-6 md:mt-8">
            No credit card required • 30-day trial • White-glove onboarding
          </p>
        </motion.div>
      </div>
    </section>
  )
}
