/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  env: {},
  experimental: {},
  images: {
    domains: ["https://www.publishersweekly.com"]
  },
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
