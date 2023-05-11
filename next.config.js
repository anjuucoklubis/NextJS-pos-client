/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.klikindomaret.com',
      },
      {
        protocol: 'https',
        hostname: 'www.static-src.com',
      },
      {
        protocol: 'https',
        hostname: 'images.tokopedia.net',
      },
      {
        protocol: 'https',
        hostname: 'i.actva.cz',
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
      }
    ]
  }
}

module.exports = nextConfig
