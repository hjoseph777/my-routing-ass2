/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-routing-ass2',
  assetPrefix: '/my-routing-ass2/',
}

module.exports = nextConfig
