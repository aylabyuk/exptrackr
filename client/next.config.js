/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['robohash.org'],
    loader: 'imgix',
    path: '',
  },
}

module.exports = nextConfig
