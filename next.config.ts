import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tailwindtap.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
