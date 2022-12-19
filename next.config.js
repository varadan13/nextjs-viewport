/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
};

const plugins = [withBundleAnalyzer];

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig);
