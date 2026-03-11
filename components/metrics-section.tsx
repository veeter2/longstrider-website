"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

const metrics = [
  {
    value: "78%",
    label: "Avg Health Score",
    change: "+12% from baseline",
  },
  {
    value: "96%",
    label: "Retrieval Accuracy",
    change: "vs 60% traditional",
  },
  {
    value: "5.2x",
    label: "Faster Insights",
    change: "compared to search",
  },
  {
    value: "91%",
    label: "Pattern Recognition",
    change: "behavioral accuracy",
  },
]

export function MetricsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">Results That Matter</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
            Consciousness Metrics
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 hover:bg-card/70 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 cosmic-text">{metric.value}</div>
              <div className="text-xs md:text-sm font-semibold text-white/90 mb-3">{metric.label}</div>
              <div className="flex items-center justify-center gap-1 text-[10px] md:text-xs text-primary">
                <TrendingUp className="w-3 h-3 flex-shrink-0" />
                <span className="leading-tight">{metric.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
