/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['robohash.org'],
    loader: 'imgix',
    path: '',
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/home': { page: '/home' },
    '/profile': { page: '/profile' },
    '/transaction': { page: '/transaction' },
  }),
}

module.exports = nextConfig
