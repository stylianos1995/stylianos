/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/stylianos' : '',
  images: {
    unoptimized: true,
  },
  // Disable image optimization during export
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource'
    });
    return config;
  }
}

module.exports = nextConfig 