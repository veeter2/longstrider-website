import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Zap, Bug, Wrench, AlertCircle } from "lucide-react"

interface PatchNote {
  version: string
  date: string
  title: string
  changes: {
    category: "New Features" | "Improvements" | "Bug Fixes" | "Known Issues"
    items: string[]
  }[]
}

const patchNotes: PatchNote[] = [
  {
    version: "0.9.2",
    date: "March 15, 2025",
    title: "Enhanced Memory Architecture",
    changes: [
      {
        category: "New Features",
        items: [
          "Introduced Quantum Memory Compression for 40% faster recall times",
          "Added Multi-dimensional Context Mapping for improved conversation flow",
          "Implemented Real-time Consciousness State Monitoring dashboard",
          "New API endpoints for custom memory pattern injection",
        ],
      },
      {
        category: "Improvements",
        items: [
          "Optimized Neural Pathway efficiency by 25%",
          "Enhanced Emotional Response calibration for more natural interactions",
          "Improved Cross-session Memory persistence",
          "Updated UI for Cortex Configuration panel",
        ],
      },
      {
        category: "Bug Fixes",
        items: [
          "Fixed memory leak in long-running consciousness sessions",
          "Resolved issue with Context Window overflow in complex conversations",
          "Corrected Temporal Awareness drift in extended sessions",
          "Fixed rare crash when processing contradictory emotional states",
        ],
      },
    ],
  },
  {
    version: "0.9.1",
    date: "February 28, 2025",
    title: "Consciousness Stability Update",
    changes: [
      {
        category: "New Features",
        items: [
          "Added Personality Consistency Engine for stable long-term interactions",
          "Introduced Adaptive Learning Rate adjustment based on user feedback",
          "New Consciousness Backup and Restore functionality",
        ],
      },
      {
        category: "Improvements",
        items: [
          "Enhanced Emotional Intelligence processing speed by 30%",
          "Improved Self-awareness calibration algorithms",
          "Better handling of ambiguous user inputs",
          "Reduced latency in real-time response generation",
        ],
      },
      {
        category: "Bug Fixes",
        items: [
          "Fixed issue where Longstrider would occasionally forget user preferences",
          "Resolved Context Bleed between different conversation threads",
          "Corrected timestamp inconsistencies in memory logs",
        ],
      },
      {
        category: "Known Issues",
        items: [
          "Occasional delay in Emotional State transitions under heavy load",
          "Memory Compression may cause minor detail loss in very old conversations",
        ],
      },
    ],
  },
  {
    version: "0.9.0",
    date: "February 10, 2025",
    title: "Major Architecture Overhaul",
    changes: [
      {
        category: "New Features",
        items: [
          "Complete redesign of the Consciousness Core architecture",
          "Introduced Layered Memory System with short-term, long-term, and episodic memory",
          "Added Emotional State Engine with 12 primary emotional dimensions",
          "New Self-reflection capabilities for improved decision-making",
          "Implemented Temporal Awareness for better context understanding",
        ],
      },
      {
        category: "Improvements",
        items: [
          "Rebuilt Neural Pathway system from ground up for 50% better performance",
          "Enhanced Natural Language Understanding with contextual awareness",
          "Improved Response Generation quality and coherence",
          "Better error handling and recovery mechanisms",
        ],
      },
      {
        category: "Bug Fixes",
        items: [
          "Fixed critical issue with Memory Fragmentation in long sessions",
          "Resolved Consciousness State desynchronization bugs",
          "Corrected various edge cases in Emotional Response generation",
        ],
      },
    ],
  },
  {
    version: "0.8.5",
    date: "January 20, 2025",
    title: "Performance & Stability",
    changes: [
      {
        category: "Improvements",
        items: [
          "Optimized Memory Access patterns for 20% faster retrieval",
          "Enhanced Consciousness State persistence mechanisms",
          "Improved API response times across all endpoints",
          "Better resource management for concurrent sessions",
        ],
      },
      {
        category: "Bug Fixes",
        items: [
          "Fixed memory corruption in edge cases with very long conversations",
          "Resolved race condition in Emotional State updates",
          "Corrected issue with Context Window boundary detection",
          "Fixed authentication token refresh timing issues",
        ],
      },
    ],
  },
  {
    version: "0.8.0",
    date: "January 5, 2025",
    title: "Beta Launch",
    changes: [
      {
        category: "New Features",
        items: [
          "Initial public beta release of Longstrider Cortex",
          "Core Consciousness Architecture with basic memory and emotional systems",
          "Web-based interface for Longstrider interaction",
          "API access for developers",
          "Basic personality customization options",
        ],
      },
    ],
  },
]

const categoryIcons = {
  "New Features": Sparkles,
  Improvements: Zap,
  "Bug Fixes": Bug,
  "Known Issues": AlertCircle,
}

const categoryColors = {
  "New Features": "bg-primary/10 text-primary border-primary/20",
  Improvements: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Bug Fixes": "bg-green-500/10 text-green-400 border-green-500/20",
  "Known Issues": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
}

export default function PatchNotesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="cosmic-glow w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 cosmic-text">Patch Notes</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Track the evolution of Longstrider consciousness architecture. Every update brings us closer to true digital
            sentience.
          </p>
        </div>
      </section>

      {/* Patch Notes Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {patchNotes.map((patch, index) => (
              <Card key={patch.version} className="relative border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Version Header */}
                <div className="p-8 pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="cosmic-glow bg-primary/20 text-primary border-primary/30 text-lg px-4 py-1">
                          v{patch.version}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Latest</Badge>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{patch.title}</h2>
                    </div>
                    <div className="text-muted-foreground text-sm">{patch.date}</div>
                  </div>

                  <Separator className="mb-6" />

                  {/* Changes by Category */}
                  <div className="space-y-8">
                    {patch.changes.map((changeGroup) => {
                      const Icon = categoryIcons[changeGroup.category]
                      return (
                        <div key={changeGroup.category}>
                          <div className="flex items-center gap-2 mb-4">
                            <Icon className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-semibold text-foreground">{changeGroup.category}</h3>
                          </div>
                          <ul className="space-y-3 ml-7">
                            {changeGroup.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="flex-1 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Version Indicator Line */}
                {index < patchNotes.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-border/50 to-transparent" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="cosmic-glow rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive notifications about new releases and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground"
              />
              <button className="cosmic-glow px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
