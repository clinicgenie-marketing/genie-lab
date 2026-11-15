import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Evidence uploads go through server actions; allow the 10 MB file limit plus form overhead.
  experimental: { serverActions: { bodySizeLimit: "11mb" } },
  // Files read at runtime rather than imported, so Vercel must be told to deploy them.
  outputFileTracingIncludes: {
    "/**": ["./content/knowledge-checks/**", "./content/glossary.json", "./config/*.json"],
  },
  async headers() {
    return [
      {
        // Shared submissions are private pages reached only by link.
        source: "/share/:token*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
