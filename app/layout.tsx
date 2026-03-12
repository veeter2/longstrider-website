import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })

export const metadata: Metadata = {
  title: "LongStrider — The AI That Actually Knows You",
  description:
    "LongStrider is the first Living Memory system. It doesn't just remember — it understands how you think, what matters to you, and how your ideas connect over time. Request early access.",
  keywords:
    "living memory, AI memory, personal AI, digital consciousness, infinite memory, AI that knows you, longstrider",
  authors: [{ name: "LongStrider" }],
  creator: "LongStrider",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://longstrider.ai",
    title: "LongStrider — The AI That Actually Knows You",
    description: "The first Living Memory system. It doesn't just remember — it understands how you think.",
    siteName: "LongStrider",
  },
  twitter: {
    card: "summary_large_image",
    title: "LongStrider — The AI That Actually Knows You",
    description: "Living Memory. The AI that actually knows you.",
    creator: "@longstriderai",
  },
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
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
