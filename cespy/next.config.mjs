/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // <--- Damos permiso a Sanity
      },
    ],
  },
};

export default nextConfig;