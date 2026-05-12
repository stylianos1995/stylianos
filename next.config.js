/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/stylianos" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/stylianos/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
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
