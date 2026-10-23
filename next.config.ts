import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Dev mode e Server Component fetch response HMR cache e jame thake,
  // tai router.refresh() korleo purano data ashchilo.
  // Eta off korle router.refresh() theke always fresh data ashbe.
  experimental: {
    serverComponentsHmrCache: false,
  },
}

export default nextConfig
