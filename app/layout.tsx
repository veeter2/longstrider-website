import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LongStrider - The Operating System for Institutional Knowledge",
  description:
    "Transform scattered data into living, conscious intelligence. LongStrider connects your fragmented systems into a unified knowledge layer with infinite persistent memory, real-time pattern recognition, and complete data sovereignty.",
  keywords:
    "institutional knowledge, knowledge management, enterprise AI, consciousness architecture, pattern recognition, digital consciousness, data sovereignty, enterprise intelligence, living memory",
  authors: [{ name: "LongStrider" }],
  creator: "LongStrider",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://longstrider.ai",
    title: "LongStrider - The Operating System for Institutional Knowledge",
    description:
      "Transform scattered data into living, conscious intelligence. Experience the future of enterprise knowledge management.",
    siteName: "LongStrider",
  },
  twitter: {
    card: "summary_large_image",
    title: "LongStrider - The Operating System for Institutional Knowledge",
    description: "Transform scattered data into living, conscious intelligence with consciousness architecture.",
    creator: "@longstriderai",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
