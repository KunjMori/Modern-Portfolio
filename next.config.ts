import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for catching potential issues early
  reactStrictMode: true,

  // Optimize images (no external domains needed — all assets are local)
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Remove X-Powered-By header for cleaner responses
  poweredByHeader: false,

  // Compress responses
  compress: true,
};

export default nextConfig;
