import { Cookie, Shield, Settings, Eye, FileText, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiePolicyPage() {
  const principles = [
    {
      icon: Shield,
      title: "Minimal Cookie Usage",
      description: "We use only essential cookies necessary for the service to function. Your privacy is our priority.",
    },
    {
      icon: Settings,
      title: "Full Control",
      description:
        "You have complete control over cookie preferences. Manage or delete cookies at any time through your browser.",
    },
    {
      icon: Eye,
      title: "Transparent Tracking",
      description: "We clearly disclose what cookies we use and why. No hidden tracking or data collection.",
    },
  ]

  const cookieTypes = [
    {
      name: "Essential Cookies",
      purpose: "Required for the website to function properly",
      examples: ["Session management", "Authentication", "Security"],
      canDisable: false,
    },
    {
      name: "Functional Cookies",
      purpose: "Remember your preferences and settings",
      examples: ["Language preferences", "Theme selection", "UI customization"],
      canDisable: true,
    },
    {
      name: "Analytics Cookies",
      purpose: "Help us understand how visitors use our website",
      examples: ["Page views", "Navigation patterns", "Error tracking"],
      canDisable: true,
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cookie className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Cookie Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Transparent
            <span className="cosmic-text"> Cookie Usage</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed mb-4">
            We believe in minimal, transparent cookie usage that respects your privacy and gives you full control.
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
                  <Cookie className="w-6 h-6 text-primary" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your device when you visit a website. They are widely
                  used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  Cookies help us provide you with a better experience by remembering your preferences, keeping you
                  logged in, and understanding how you use our service.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground text-lg">{type.name}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          type.canDisable
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "bg-destructive/10 text-destructive border border-destructive/20"
                        }`}
                      >
                        {type.canDisable ? "Optional" : "Required"}
                      </span>
                    </div>
                    <p className="text-sm">{type.purpose}</p>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Examples:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        {type.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  How to Manage Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                  preferences by:
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Browser Settings</h4>
                  <p className="mb-2">
                    Most web browsers allow you to control cookies through their settings. Here&apos;s how to manage
                    cookies in popular browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong className="text-foreground">Chrome:</strong> Settings → Privacy and security → Cookies and
                      other site data
                    </li>
                    <li>
                      <strong className="text-foreground">Firefox:</strong> Settings → Privacy & Security → Cookies and
                      Site Data
                    </li>
                    <li>
                      <strong className="text-foreground">Safari:</strong> Preferences → Privacy → Manage Website Data
                    </li>
                    <li>
                      <strong className="text-foreground">Edge:</strong> Settings → Cookies and site permissions →
                      Manage and delete cookies
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                  <p className="text-foreground font-medium mb-2">Important Note:</p>
                  <p className="text-sm">
                    If you disable essential cookies, some features of Longstrider may not function properly. You may
                    not be able to log in or access certain parts of the service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Third-Party Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may use third-party services that set cookies on your device. These services help us provide and
                  improve our service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Payment Processors:</strong> To securely process payments and
                    subscriptions
                  </li>
                  <li>
                    <strong className="text-foreground">Analytics Services:</strong> To understand how visitors use our
                    website (only with your consent)
                  </li>
                  <li>
                    <strong className="text-foreground">Content Delivery Networks:</strong> To deliver content quickly
                    and reliably
                  </li>
                </ul>
                <p>
                  These third parties have their own privacy policies. We recommend reviewing their policies to
                  understand how they use cookies.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Your Rights Under GDPR
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you are located in the European Economic Area (EEA), you have certain rights regarding cookies and
                  personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Right to Consent:</strong> We will ask for your consent before
                    placing non-essential cookies
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Withdraw:</strong> You can withdraw your consent at any
                    time through browser settings
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Access:</strong> You can request information about what
                    cookies we use
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Object:</strong> You can object to the use of cookies
                    for specific purposes
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below or adjust your
                  browser settings.
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-border bg-card/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Changes to This Cookie Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated policy on our website with a new &quot;Last updated&quot; date</li>
                  <li>Displaying a prominent notice on our website</li>
                  <li>Sending an email notification for significant changes (if you have an account)</li>
                </ul>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
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
                <p>
                  If you have questions or concerns about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong className="text-foreground">Email:</strong> privacy@longstrider.ai
                  </p>
                  <p>
                    <strong className="text-foreground">Data Protection Officer:</strong> dpo@longstrider.ai
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
