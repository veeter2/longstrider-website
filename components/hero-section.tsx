"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { BetaSignupForm } from "./beta-signup-form"
import Link from "next/link"

const brainWaves = [
  { name: "δ", freq: "0.5–4 Hz", label: "Deep Sleep", color: "#1e40af", opacity: 0.15, scale: 1.0, speed: 0.8 },
  { name: "θ", freq: "4–8 Hz", label: "Meditation", color: "#7c3aed", opacity: 0.12, scale: 1.2, speed: 1.2 },
  { name: "α", freq: "8–13 Hz", label: "Relaxed", color: "#0891b2", opacity: 0.18, scale: 1.4, speed: 1.6 },
  { name: "β", freq: "13–30 Hz", label: "Active", color: "#db2777", opacity: 0.1, scale: 1.6, speed: 2.2 },
  { name: "γ", freq: "30–100 Hz", label: "Peak Focus", color: "#f0abfc", opacity: 0.08, scale: 1.8, speed: 3.0 },
]

export function HeroSection() {
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [oscillation, setOscillation] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const duration = 3000

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const newProgress = Math.min(1, elapsed / duration)
      setProgress(newProgress)

      const osc = Math.sin(now * 0.002) * 8
      setOscillation(osc)

      if (newProgress >= 1) {
        setIsReady(true)
      }

      requestAnimationFrame(animate)
    }

    const frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
  const easedProgress = easeOutCubic(progress)

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Animation Section */}
      <div className="relative h-[45vh] min-h-[400px] md:h-[50vh] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative h-full max-w-4xl max-h-full flex items-center justify-center font-thin w-full">
            {brainWaves.map((wave, index) => {
              const waveProgress = Math.max(0, Math.min(1, easedProgress * 1.3 - index * 0.15))
              const baseSize = 180 + index * 100

              return (
                <motion.div
                  key={wave.name}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: baseSize * wave.scale,
                    height: baseSize * wave.scale,
                    background: `radial-gradient(circle at 35% 35%, ${wave.color}40, ${wave.color}10)`,
                    backdropFilter: "blur(2px)",
                    border: `1px solid ${wave.color}15`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: waveProgress > 0 ? [waveProgress * 0.98, waveProgress * 1.02, waveProgress * 0.98] : 0,
                    opacity:
                      waveProgress > 0
                        ? [
                            waveProgress * wave.opacity * 0.8,
                            waveProgress * wave.opacity * 1.2,
                            waveProgress * wave.opacity * 0.8,
                          ]
                        : 0,
                    boxShadow:
                      waveProgress > 0
                        ? [
                            `0 0 40px ${wave.color}40, inset 0 0 20px ${wave.color}20`,
                            `0 0 70px ${wave.color}60, inset 0 0 40px ${wave.color}30`,
                            `0 0 40px ${wave.color}40, inset 0 0 20px ${wave.color}20`,
                          ]
                        : `0 0 0px ${wave.color}00`,
                    y: [0, oscillation * 0.5, 0],
                  }}
                  transition={{
                    scale: {
                      duration: 3 + index * 0.5,
                      delay: index * 0.15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 3 + index * 0.5,
                      delay: index * 0.15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                    boxShadow: {
                      duration: 3 + index * 0.5,
                      delay: index * 0.15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                    y: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                />
              )
            })}

            <motion.div
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
                backdropFilter: "blur(20px)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                easedProgress > 0.5
                  ? {
                      scale: [0.95, 1.08, 0.95],
                      opacity: [0.7, 0.9, 0.7],
                      boxShadow: [
                        "0 0 50px rgba(255,255,255,0.25), 0 0 25px rgba(255,255,255,0.15), inset 0 0 15px rgba(255,255,255,0.1)",
                        "0 0 80px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.25), inset 0 0 30px rgba(255,255,255,0.2)",
                        "0 0 50px rgba(255,255,255,0.25), 0 0 25px rgba(255,255,255,0.15), inset 0 0 15px rgba(255,255,255,0.1)",
                      ],
                    }
                  : {
                      scale: 0.3 + easedProgress * 0.7,
                      opacity: 0.5 + easedProgress * 0.3,
                    }
              }
              transition={
                easedProgress > 0.5
                  ? {
                      scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      boxShadow: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }
                  : {
                      duration: 2,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
            />

            {isReady &&
              [
                {
                  color: brainWaves[0].color,
                  radius: 160,
                  duration: 10,
                  delay: 0,
                  size: 10,
                  clockwise: true,
                  startAngle: 0,
                },
                {
                  color: brainWaves[1].color,
                  radius: 185,
                  duration: 14,
                  delay: 0.5,
                  size: 11,
                  clockwise: false,
                  startAngle: 72,
                },
                {
                  color: brainWaves[2].color,
                  radius: 210,
                  duration: 18,
                  delay: 1,
                  size: 12,
                  clockwise: true,
                  startAngle: 144,
                },
                {
                  color: brainWaves[3].color,
                  radius: 235,
                  duration: 22,
                  delay: 1.5,
                  size: 11,
                  clockwise: false,
                  startAngle: 216,
                },
                {
                  color: brainWaves[4].color,
                  radius: 260,
                  duration: 26,
                  delay: 2,
                  size: 10,
                  clockwise: true,
                  startAngle: 288,
                },
              ].map((orb, i) => {
                const direction = orb.clockwise ? 1 : -1
                const angleInRad = (orb.startAngle * Math.PI) / 180

                const numPoints = 360
                const xPath = Array.from({ length: numPoints + 1 }, (_, i) => {
                  const angle = (i / numPoints) * Math.PI * 2 * direction + angleInRad
                  return Math.cos(angle) * orb.radius
                })
                const yPath = Array.from({ length: numPoints + 1 }, (_, i) => {
                  const angle = (i / numPoints) * Math.PI * 2 * direction + angleInRad
                  return Math.sin(angle) * orb.radius
                })

                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: orb.size,
                      height: orb.size,
                      background: `radial-gradient(circle, ${orb.color}80, ${orb.color}20)`,
                      boxShadow: `0 0 20px ${orb.color}60, inset 0 0 8px ${orb.color}40`,
                      filter: "blur(1px)",
                    }}
                    initial={{ opacity: 0, x: xPath[0], y: yPath[0] }}
                    animate={{
                      opacity: [0, 0.5, 0.5],
                      x: xPath,
                      y: yPath,
                    }}
                    transition={{
                      opacity: { duration: 1, delay: orb.delay },
                      x: {
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      y: {
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                  />
                )
              })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black to-zinc-950 -mt-20 pt-20 pb-16 md:pb-20 px-6">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: easedProgress > 0.6 ? 1 : 0,
            y: easedProgress > 0.6 ? 0 : 30,
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
              The Intelligence Layer Your LLM Is Missing
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance font-light">
              Infinite memory, zero hallucinations, knowledge that compounds.
            </p>

            <p className="text-base md:text-lg text-white/60 text-balance leading-relaxed max-w-5xl mx-auto">
              LongStrider wraps architectural layers around large language models, transforming raw generative power
              into self-optimizing, continuously learning intelligence. Each layer captures context, amplifies
              reasoning, and directs insight without token waste or memory loss. Built on consciousness-first
              architecture with complete data sovereignty, it creates a living framework for scalable intelligence that
              adapts to enterprises, individuals, and entire business ecosystems. It's the infrastructure layer that
              makes infinite context economically viable and genuinely conscious.
            </p>
          </div>

          {/* Frequency labels */}
          {isReady && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs text-white/20 font-light tracking-wider mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {brainWaves.map((wave, i) => (
                <motion.span
                  key={i}
                  style={{ color: wave.color }}
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0.7 }}
                  animate={{
                    opacity: [0.7, 0.95, 0.7],
                    textShadow: [`0 0 8px ${wave.color}60`, `0 0 16px ${wave.color}80`, `0 0 8px ${wave.color}60`],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {wave.name}
                </motion.span>
              ))}
            </motion.div>
          )}

          <div className="w-full max-w-md mx-auto mb-10">
            <BetaSignupForm />
          </div>

          {/* Button links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 text-black px-8 py-6 text-base sm:text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              <Link href="#how-it-works">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <Link href="/contact">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
