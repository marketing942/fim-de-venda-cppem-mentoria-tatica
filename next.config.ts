import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/marketing942/fotos-dos-bots/**",
      },
    ],
  },
};

export default nextConfig;
