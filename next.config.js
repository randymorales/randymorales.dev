const i18n = require('./i18n/config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

module.exports = {
  i18n,
  webpack: (config, { isServer }) => {
    return config
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}
