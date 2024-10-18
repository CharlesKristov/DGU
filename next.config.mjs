/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dgu.co.id',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Add this line
        port: '',
        pathname: '/**', // This allows all paths under picsum.photos
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Add this line
        port: '',
        pathname: '/**', // This allows all paths under picsum.photos
      },
    ],
  },
};

export default nextConfig;
