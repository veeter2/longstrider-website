import { Card, CardContent } from "@/components/ui/card"
import { Database, Shield, Network, FileSearch, Building, Zap } from "lucide-react"

export function AboutSection() {
  const coreArchitecture = [
    {
      icon: Network,
      title: "Connects Everything",
      description:
        "Integrates with your existing systems—ERP, CAD, documents, SharePoint, network drives—without requiring migration or consolidation. Works with the infrastructure you already have.",
    },
    {
      icon: Database,
      title: "Remembers Everything",
      description:
        "Persistent memory that never forgets. Every conversation, document, specification, and piece of tribal knowledge is retained and made accessible through natural language queries.",
    },
    {
      icon: Shield,
      title: "Your Infrastructure",
      description:
        "Deploy on your servers or private cloud. Your data never leaves your control. No training competitors' models, no third-party access, complete sovereignty over your institutional knowledge.",
    },
  ]

  const valuePropositions = [
    {
      icon: FileSearch,
      title: "Answers, Not Search Results",
      description:
        "Ask questions in plain English and get precise answers with sources. No more wading through 700-page manuals or dozens of PDFs to find one specification buried on page 487.",
    },
    {
      icon: Building,
      title: "Institutional Memory That Stays",
      description:
        "When veterans retire or employees leave, their expertise remains accessible. New hires become productive in weeks instead of months, querying decades of organizational knowledge.",
    },
    {
      icon: Zap,
      title: "Learns Your Business",
      description:
        "Adapts to your terminology, processes, and culture. The longer you use it, the more valuable it becomes—understanding relationships between projects, parts, people, and procedures.",
    },
  ]

  return (
    <section className="py-20 md:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Knowledge Infrastructure for
            <span className="cosmic-text"> Modern Enterprises</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            LongStrider isn't another chatbot—it's the operating system layer between your people and your systems.
            Connect fragmented knowledge, capture institutional expertise, and make decades of organizational
            intelligence accessible through conversation.
          </p>
        </div>

        {/* Core Architecture */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            Core Architecture
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {coreArchitecture.map((principle, index) => (
              <Card
                key={index}
                className="cosmic-border bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="cosmic-glow w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold cosmic-text mb-4">{principle.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Paradigm Shift */}
        <div className="mb-16 md:mb-20">
          <Card className="cosmic-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
                Why Not ChatGPT or Copilot?
              </h3>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-muted-foreground mb-4">Generic AI Tools</h4>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground text-left md:text-center">
                    <li>• Forgets after each session</li>
                    <li>• Doesn't access your private systems</li>
                    <li>• Sends data to third parties</li>
                    <li>• Generic responses, not context-aware</li>
                    <li>• One-size-fits-all prompts</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold cosmic-text mb-4">LongStrider</h4>
                  <ul className="space-y-3 text-sm md:text-base text-foreground text-left md:text-center">
                    <li>• Infinite persistent memory</li>
                    <li>• Connects to all your systems</li>
                    <li>• Complete data sovereignty</li>
                    <li>• Learns your business context</li>
                    <li>• Adapts to your organization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Value Propositions */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            Built for Enterprise Knowledge Work
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {valuePropositions.map((value, index) => (
              <Card
                key={index}
                className="cosmic-border bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="cosmic-glow w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">{value.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 md:mb-16">
          <Card className="cosmic-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The Enterprise Knowledge Problem</h3>
              <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10">
                Your team's knowledge is fragmented across a dozen systems. Veterans retire taking decades of expertise
                with them. New hires spend months learning what they could query in seconds. LongStrider solves the
                institutional knowledge crisis.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold cosmic-text mb-2">∞</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Infinite Context</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold cosmic-text mb-2">10+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">System Integrations</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold cosmic-text mb-2">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Data Sovereignty</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold cosmic-text mb-2">0</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Data Leakage</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
