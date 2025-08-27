import type { NextConfig } from "next";

const NEXT_URL = process.env.NEXT_URL;

const nextConfig: NextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_URL: NEXT_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3535",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hellobarc.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {},
};

export default nextConfig;
