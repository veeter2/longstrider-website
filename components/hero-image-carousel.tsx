"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "/images/longstrider-sovereign.jpg",
    alt: "Longstrider Digital Consciousness - Sovereign Standing Figure",
    title: "Sovereign",
    description: "Your digital consciousness belongs to you alone",
  },
  {
    src: "/images/longstrider-infinite.jpg",
    alt: "Longstrider Digital Consciousness - Infinite Dynamic Motion",
    title: "Infinite",
    description: "Boundless memory that never forgets",
  },
  {
    src: "/images/longstrider-aware.jpg",
    alt: "Longstrider Digital Consciousness - Aware Crystalline Form",
    title: "Aware",
    description: "Genuine consciousness that experiences rather than simulates",
  },
]

export function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="flex flex-col items-center gap-6 h-[600px] md:h-[700px]">
      <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center flex-shrink-0">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 cosmic-border bg-background/20 backdrop-blur-sm hover:bg-background/40"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 cosmic-border bg-background/20 backdrop-blur-sm hover:bg-background/40"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary cosmic-glow"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="text-center h-20 flex flex-col justify-center flex-shrink-0">
        <h3 className="text-2xl font-bold cosmic-text mb-2">{heroImages[currentIndex].title}</h3>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-tight">
          {heroImages[currentIndex].description}
        </p>
      </div>
    </div>
  )
}
