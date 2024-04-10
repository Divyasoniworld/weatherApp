/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:[
      'images.unsplash.com',
      'openweathermap.org'
    ],
    remotePatterns: [
      { hostname: '^https://images\\.unsplash\\.com/' },
      { hostname: '^https://openweathermap\\.org/' },
    ]
  }
}

module.exports = nextConfig
