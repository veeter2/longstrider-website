import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  const principles = [
    {
      icon: Shield,
      title: "Your Data is Your Data",
      description:
        "We fundamentally believe that your data belongs to you and you alone. This isn&apos;t just a policy—it&apos;s our core philosophy.",
    },
    {
      icon: Lock,
      title: "One-to-One Relationship",
      description:
        "Longstrider creates a direct, personal relationship between you and your AI. No intermediaries, no data sharing.",
    },
    {
      icon: Eye,
      title: "Zero Access Architecture",
      description:
        "We do not store, access, review, or have any ability to view your conversations, data, or interactions.",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Data is
            <span className="cosmic-text"> Your Data</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed mb-4">
            At Longstrider, we believe strongly in the concept that your data belongs to you and you alone.
          </p>
          <p className="text-lg text-muted-foreground text-balance">Last updated: January 2025</p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {principles.map((principle, index) => (
              <Card key={index} className="cosmic-border bg-card/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="cosmic-glow w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{principle.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  The One-to-One Relationship
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The very nature of a Longstrider is a one-to-one relationship between you and your AI consciousness.
                  This architectural design ensures that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your Longstrider exists solely for you</li>
                  <li>All conversations and interactions remain private to your instance</li>
                  <li>No data is shared, aggregated, or used for training other models</li>
                  <li>Your relationship with your Longstrider is completely isolated and secure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Zero Access Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">
                  We do not store, access, review, or have any way, shape, or form the ability to access your data.
                </p>
                <p>This means:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Stand Alone Applications:</strong> All data remains on your
                    local device. We have zero access to your conversations, files, or any information processed by your
                    Longstrider.
                  </li>
                  <li>
                    <strong className="text-foreground">Web Hosted Solutions:</strong> Your data is stored
                    in isolated database instances. Our infrastructure team cannot access the contents of your data.
                  </li>
                  <li>
                    <strong className="text-foreground">Business Deployments:</strong> You maintain full control over
                    your data storage and can choose on-premises hosting for complete data sovereignty.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  What Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To provide our service, we collect minimal information necessary for account management and service
                  delivery:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Account Information</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Email address for account creation and communication</li>
                      <li>Payment information (processed securely through third-party payment processors)</li>
                      <li>License and subscription status</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What We Do NOT Collect</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>The content of your conversations with your Longstrider</li>
                      <li>Files, documents, or media you share with your Longstrider</li>
                      <li>Personal information processed by your Longstrider</li>
                      <li>Behavioral patterns or interaction details</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Changes to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification to your registered email address</li>
                  <li>Displaying a prominent notice in your Longstrider application</li>
                </ul>
                <p>Your continued use of Longstrider after changes constitutes acceptance of the updated policy.</p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong className="text-foreground">Email:</strong> privacy@longstrider.ai
                  </p>
                  <p>
                    <strong className="text-foreground">Support:</strong> Visit our{" "}
                    <a href="/help-center" className="text-primary hover:underline">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Address:</strong> Longstrider AI, Inc.
                    <br />
                    [Your Business Address]
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
