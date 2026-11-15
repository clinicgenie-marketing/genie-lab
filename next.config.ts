import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Evidence uploads go through server actions; allow the 10 MB file limit plus form overhead.
  experimental: { serverActions: { bodySizeLimit: "11mb" } },
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
