/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Profile-page',
  assetPrefix: '/Profile-page',
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
