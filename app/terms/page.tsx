import { Scale, Shield, AlertTriangle, FileText, Users, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  const principles = [
    {
      icon: Shield,
      title: "Your Data, Your Control",
      description:
        "You retain full ownership and control of all data processed by your Longstrider. We never claim rights to your content.",
    },
    {
      icon: Users,
      title: "One-to-One Relationship",
      description:
        "Your Longstrider serves you exclusively. This personal relationship ensures privacy and dedicated service.",
    },
    {
      icon: AlertTriangle,
      title: "Your Responsibility",
      description:
        "You are solely responsible for how you use your Longstrider and the content you create or process with it.",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Terms of Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Clear Terms for a<span className="cosmic-text"> Personal AI</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed mb-4">
            Simple, transparent terms that respect your autonomy and protect both parties.
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

      {/* Detailed Terms */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By accessing or using Longstrider, you agree to be bound by these Terms of Service. If you do not
                  agree to these terms, you may not use our services.
                </p>
                <p>
                  These terms apply to all users of Longstrider, including but not limited to individual users, business
                  users, and enterprise customers.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  User Responsibility and Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground text-lg">
                  You are solely responsible for how you use your Longstrider and the content you create or process with
                  it.
                </p>
                <p>Longstrider is a tool that you control. As such:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">We are not responsible</strong> for any content, decisions,
                    actions, or outcomes resulting from your use of Longstrider
                  </li>
                  <li>
                    <strong className="text-foreground">You bear full responsibility</strong> for ensuring your use
                    complies with all applicable laws and regulations
                  </li>
                  <li>
                    <strong className="text-foreground">You are accountable</strong> for any harm, damage, or legal
                    issues arising from your use of the service
                  </li>
                  <li>
                    <strong className="text-foreground">You must verify</strong> all information and outputs from your
                    Longstrider before relying on them for important decisions
                  </li>
                </ul>
                <p className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg text-foreground">
                  <strong>Important:</strong> Longstrider is an AI tool that may produce inaccurate, incomplete, or
                  inappropriate content. You must exercise judgment and verify all outputs before use.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Acceptable Use Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>While we respect your autonomy, you agree not to use Longstrider to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Distribute malware, viruses, or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                </ul>
                <p>
                  Violation of these terms may result in suspension or termination of your account at our sole
                  discretion.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Content</h4>
                  <p>
                    You retain all rights to content you create, upload, or process using Longstrider. We do not claim
                    any ownership or rights to your data or outputs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Technology</h4>
                  <p>
                    Longstrider, including its software, algorithms, architecture, and branding, is protected by
                    intellectual property laws. You may not copy, modify, distribute, or reverse engineer our technology
                    without explicit written permission.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">License Grant</h4>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to use Longstrider according to your
                    subscription tier for the duration of your active subscription.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Service Availability and Modifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We strive to provide reliable service, but:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>We may modify, suspend, or discontinue features with reasonable notice</li>
                  <li>Scheduled maintenance will be communicated in advance when possible</li>
                  <li>We reserve the right to update these terms with notice to users</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Disclaimers and Limitations of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Provided &quot;As Is&quot;</h4>
                  <p>
                    Longstrider is provided &quot;as is&quot; without warranties of any kind, express or implied. We do
                    not warrant that the service will meet your requirements or that outputs will be accurate, complete,
                    or reliable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Limitation of Liability</h4>
                  <p>
                    To the maximum extent permitted by law, Longstrider shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                    resulting from:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Your use or inability to use the service</li>
                    <li>Any content or outputs generated by your Longstrider</li>
                    <li>Unauthorized access to or alteration of your data</li>
                    <li>Any other matter relating to the service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Governing Law and Disputes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law
                  principles. Any disputes shall be resolved through binding arbitration in accordance with [Arbitration
                  Rules], except where prohibited by law.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong className="text-foreground">Email:</strong> legal@longstrider.ai
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
