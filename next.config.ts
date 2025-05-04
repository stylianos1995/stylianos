/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/stylianos' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/stylianos/' : '',
  trailingSlash: true,
}

export default nextConfig
