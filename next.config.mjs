/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Pages not yet ready — send everything back to home
    const hiddenPages = [
      "/about", "/about-us", "/technology", "/field-notes",
      "/pricing", "/patch-notes", "/help-center", "/community",
      "/be-a-vendor",
    ]
    return hiddenPages.map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }))
  },
}

export default nextConfig
