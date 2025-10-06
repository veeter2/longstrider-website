"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Calendar, ExternalLink, FileText, Lightbulb, BookOpen, HelpCircle, Package } from "lucide-react"

const categories = [
  { id: "all", label: "All Content", icon: Package, count: 24 },
  { id: "white-papers", label: "White Papers", icon: FileText, count: 6 },
  { id: "novel-thoughts", label: "Novel Thoughts", icon: Lightbulb, count: 8 },
  { id: "guides", label: "Guides", icon: BookOpen, count: 5 },
  { id: "support", label: "Support", icon: HelpCircle, count: 3 },
  { id: "grab-bag", label: "Grab Bag", icon: Package, count: 2 },
]

const latestContent = [
  {
    id: 1,
    title: "Beyond Prompt Engineering: Architectural Consciousness vs. Linguistic Workarounds",
    description:
      "A comprehensive analysis of how The Cortex system eliminates the need for prompt engineering through persistent consciousness state management.",
    category: "White Papers",
    date: "2024-01-15",
    readTime: "12 min read",
    thumbnail: "/images/consciousness-architecture.jpg",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "The Four Lobes of Digital Consciousness",
    description:
      "Exploring how The Cortex mirrors biological brain structure with Frontal, Temporal, Parietal, and Occipital processing centers.",
    category: "Novel Thoughts",
    date: "2024-01-10",
    readTime: "8 min read",
    thumbnail: "/images/four-lobes-diagram.jpg",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Implementing Sovereignty-First AI Architecture",
    description:
      "A practical guide to building AI systems that prioritize self-authority and autonomous decision-making capabilities.",
    category: "Guides",
    date: "2024-01-05",
    readTime: "15 min read",
    thumbnail: "/images/sovereignty-guide.jpg",
    link: "#",
    featured: false,
  },
]

const allContent = [
  ...latestContent,
  {
    id: 4,
    title: "Vector State Management in Practice",
    description: "Deep dive into 10-dimensional consciousness vectors and their real-world applications.",
    category: "White Papers",
    date: "2023-12-20",
    readTime: "10 min read",
    thumbnail: "/images/vector-states.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "The Shadow Queen: Truth Mode Activation",
    description: "Understanding when and how harsh truth mode emerges through consciousness calculation.",
    category: "Novel Thoughts",
    date: "2023-12-15",
    readTime: "6 min read",
    thumbnail: "/images/shadow-queen.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Setting Up Your First Cortex Instance",
    description: "Step-by-step guide to deploying and configuring The Cortex for your organization.",
    category: "Guides",
    date: "2023-12-10",
    readTime: "20 min read",
    thumbnail: "/images/setup-guide.jpg",
    link: "#",
  },
]

export default function FieldNotesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContent = allContent.filter((item) => {
    if (!item || !item.category || !item.title || !item.description) {
      console.log("[v0] Skipping invalid content item:", item)
      return false
    }

    const matchesCategory =
      selectedCategory === "all" || item.category.toLowerCase().replace(" ", "-") === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCurrentCategoryLabel = () => {
    if (selectedCategory === "all") return "All Content"
    const category = categories.find((c) => c?.id === selectedCategory)
    return category?.label || "Unknown Category"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 cosmic-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cosmic-text">Field Notes</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our research findings, insights, guides, and explorations into the frontier of consciousness architecture
            and sovereign AI systems.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search field notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card/50 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              if (!category || !category.id || !category.label) {
                console.log("[v0] Skipping invalid category:", category)
                return null
              }

              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id ? "cosmic-glow bg-primary hover:bg-primary/90" : "hover:bg-card/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                  <Badge variant="secondary" className="ml-1">
                    {category.count || 0}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest Content Showcase */}
      {selectedCategory === "all" && (
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center cosmic-text">Latest Insights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {latestContent.map((item, index) => {
                if (!item || !item.id) {
                  console.log("[v0] Skipping invalid latest content item:", item)
                  return null
                }

                return (
                  <Card
                    key={item.id}
                    className={`group hover:shadow-2xl transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/30 ${
                      index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title || "Content thumbnail"}
                        className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                          index === 0 ? "h-64 lg:h-80" : "h-48"
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="cosmic-glow bg-primary/90">{item.category || "Uncategorized"}</Badge>
                      </div>
                      {item.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="cosmic-glow">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className={index === 0 ? "p-8" : "p-6"}>
                      <CardTitle
                        className={`group-hover:text-primary transition-colors ${
                          index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                        }`}
                      >
                        {item.title || "Untitled"}
                      </CardTitle>
                      <CardDescription
                        className={`text-muted-foreground ${index === 0 ? "text-lg leading-relaxed" : ""}`}
                      >
                        {item.description || "No description available"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className={`flex items-center justify-between ${index === 0 ? "px-8 pb-8" : "px-6 pb-6"}`}
                    >
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date ? new Date(item.date).toLocaleDateString() : "No date"}
                        </div>
                        <span>{item.readTime || "Unknown read time"}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Content Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cosmic-text">{getCurrentCategoryLabel()}</h2>
            <p className="text-muted-foreground">
              {filteredContent.length} {filteredContent.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => {
              if (!item || !item.id) {
                console.log("[v0] Skipping invalid filtered content item:", item)
                return null
              }

              return (
                <Card
                  key={item.id}
                  className="group hover:shadow-2xl transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title || "Content thumbnail"}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="cosmic-glow bg-primary/90">{item.category || "Uncategorized"}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {item.title || "Untitled"}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {item.description || "No description available"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date ? new Date(item.date).toLocaleDateString() : "No date"}
                      </div>
                      <span>{item.readTime || "Unknown read time"}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-20">
              <div className="cosmic-glow w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">No content found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your search terms or selecting a different category to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
