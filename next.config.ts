import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['localhost', '127.0.0.1'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',  // Allow media files

      },
      // production
      {
        protocol: "https",
        hostname: "irfanahmed616.pythonanywhere.com",
        pathname: "/media/**",
      },
    ],
  }
  /* config options here */
};

export default nextConfig;
