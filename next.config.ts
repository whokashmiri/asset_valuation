import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      'https://6000-firebase-studio-1748928733161.cluster-oayqgyglpfgseqclbygurw4xd4.cloudworkstations.dev',
      'https://9000-firebase-studio-1748928733161.cluster-oayqgyglpfgseqclbygurw4xd4.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;

// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  // Add any other Next.js config options here
});

