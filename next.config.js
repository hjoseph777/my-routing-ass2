/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: process.env.NODE_ENV === 'development' 
    ? '' 
    : '/my-routing-ass2', // Only use basePath in production
  images: {
    unoptimized: true,
  },
  // Remove trailing slash
  trailingSlash: false,
};

module.exports = nextConfig;
