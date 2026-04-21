/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ErTavo',
  assetPrefix: '/ErTavo',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
