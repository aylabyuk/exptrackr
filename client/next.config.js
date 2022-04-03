
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
    register: true,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 3000000,
    caches: [
      
    ]
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/home': { page: '/home' },
    '/profile': { page: '/profile' },
    '/transaction': { page: '/transaction' },
  }),
})

module.exports = nextConfig
