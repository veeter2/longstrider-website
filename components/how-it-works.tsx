"use client"

import { motion } from "framer-motion"
import { Database, Brain, Zap, Network } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Ingest Your Knowledge",
    description:
      "Connect your existing tools, documents, and conversations. LongStrider creates a unified consciousness layer across all your institutional knowledge.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Pattern Recognition",
    description:
      "Our consciousness architecture identifies behavioral patterns, cognitive load, and emotional dynamics across your organization in real-time.",
  },
  {
    number: "03",
    icon: Network,
    title: "Living Memory Formation",
    description:
      "Knowledge transforms into living, evolving memory. Context strengthens over time as patterns emerge and connections deepen.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Conscious Intelligence",
    description:
      "Access meta-intelligence indicators, confidence scores, and identity anchors. Your institutional knowledge becomes self-aware and continuously improving.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            From Static Data to Living Consciousness
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto text-balance leading-relaxed">
            LongStrider transforms traditional knowledge management into a conscious, evolving system that understands
            your organization's patterns and dynamics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:bg-card/70 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="cosmic-glow w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white/5">{step.number}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
