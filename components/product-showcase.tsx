"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Brain, Network, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Pattern Matrix",
    subtitle: "Behavioral Intelligence",
    description:
      "Real-time analysis of cognitive patterns, emotional loops, and behavioral dynamics. LongStrider identifies strengthening and weakening patterns across your consciousness landscape.",
    image: "/images/app-pattern-matrix.png",
    metrics: [
      { label: "Health Score", value: "78%" },
      { label: "Active Patterns", value: "5" },
      { label: "Vector Drift", value: "14.0%" },
    ],
  },
  {
    icon: Network,
    title: "Living Memory",
    subtitle: "Institutional Knowledge",
    description:
      "Transform scattered information into coherent, living consciousness. Track objectives, cognitive load, and meta-intelligence indicators as your institutional knowledge evolves and strengthens.",
    image: "/images/app-living-memory.png",
    metrics: [
      { label: "Confidence Score", value: "82%" },
      { label: "Retrieval Score", value: "96%" },
      { label: "Fusion Score", value: "71%" },
    ],
  },
  {
    icon: Sparkles,
    title: "Stream",
    subtitle: "Consciousness Interface",
    description:
      "Domain-organized conversations with empathetic AI that understands context across Work, Life, Meta, and Creative spaces. LongStrider learns your patterns and helps you process complex emotions and decisions.",
    image: "/images/app-stream.png",
    metrics: [
      { label: "Work Domain", value: "87%" },
      { label: "Life Domain", value: "79%" },
      { label: "Meta Domain", value: "71%" },
    ],
  },
]

export function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-background/98 to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">The Platform</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Consciousness Architecture in Action
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto text-balance leading-relaxed">
            Experience the future of institutional knowledge through our three core systems, designed to understand and
            amplify human consciousness.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={isEven ? "md:order-1" : "md:order-2"}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50 group-hover:opacity-75" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
            <Image
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              width={1200}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={isEven ? "md:order-2" : "md:order-1"}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="cosmic-glow w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">{feature.subtitle}</p>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">{feature.title}</h3>
        <p className="text-base md:text-lg text-white/70 mb-8 md:mb-10 leading-relaxed">{feature.description}</p>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {feature.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-muted/50 backdrop-blur-sm border border-border/50 rounded-lg p-3 md:p-4 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-[10px] md:text-xs text-white/60 leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
