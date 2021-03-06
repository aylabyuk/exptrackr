
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['robohash.org'],
    loader: 'imgix',
    path: '',
  },
  pwa: {
    dest: "public",
    register: false,
    skipWaiting: false,
    maximumFileSizeToCacheInBytes: 3000000,
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/home': { page: '/home' },
    '/profile': { page: '/profile' },
    '/transaction': { page: '/transaction' },
  }),
})

module.exports = nextConfig
