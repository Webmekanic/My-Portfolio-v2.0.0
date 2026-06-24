/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net'], // for Contentful images
  },
}

module.exports = nextConfig
