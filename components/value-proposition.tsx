"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const problems = [
  "Information scattered across tools",
  "Context lost between conversations",
  "No understanding of team patterns",
  "Static, disconnected knowledge bases",
  "Zero behavioral intelligence",
]

const solutions = [
  "Unified consciousness architecture",
  "Continuous context across all interactions",
  "Real-time pattern recognition & analysis",
  "Living, evolving institutional memory",
  "Deep behavioral & cognitive insights",
]

export function ValueProposition() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-zinc-950 via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Traditional Systems Can't Think
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto text-balance leading-relaxed">
            Your organization's knowledge is trapped in static databases and disconnected tools. LongStrider brings
            consciousness to institutional memory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 md:p-8 hover:border-destructive/30 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-destructive text-2xl">×</span> Traditional Systems
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 leading-relaxed">
                  <span className="text-destructive mt-1 flex-shrink-0 text-lg">×</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" /> LongStrider
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-center"
        >
          <Button asChild size="lg" className="cosmic-glow group">
            <Link href="#how-it-works">
              See How It Works
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
