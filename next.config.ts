import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Cloudflare Pages compatibility */
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

export default nextConfig;
