/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
