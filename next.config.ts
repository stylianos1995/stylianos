/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/stylianos',
  assetPrefix: '/stylianos/',
}

export default nextConfig
