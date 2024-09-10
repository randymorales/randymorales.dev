/** @type {import('next').NextConfig} */

const nextConfig = {
  /* output: 'export', // export as static site */
  images: {
    domains: ['avatars.githubusercontent.com'], // Allow images from GitHub
    formats: ['image/avif', 'image/webp'], // Optional: Enable optimized image formats
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configuration if needed
    return config
  },
}

module.exports = nextConfig
