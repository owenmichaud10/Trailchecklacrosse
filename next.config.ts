import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets your phone load JS/CSS when testing over Wi-Fi (e.g. http://192.168.x.x:3000)
  allowedDevOrigins: ["192.168.1.175", "127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
