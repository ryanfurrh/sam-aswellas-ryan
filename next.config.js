const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn.sanity.io", "web.archive.org"],
  },
};

module.exports = nextConfig;
