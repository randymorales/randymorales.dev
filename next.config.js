/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'], // Allow images from GitHub
    formats: ['image/avif', 'image/webp'], // Optional: Enable optimized image formats
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configuration if needed
    return config
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.md?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
const mdxConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  ...nextConfig,
})

// Use an async function to allow for dynamic import
module.exports = async () => {
  const rehypeSlug = await import('rehype-slug')

  return {
    ...mdxConfig,
    webpack: (config, options) => {
      config = mdxConfig.webpack(config, options)

      if (options.isServer) {
        config.externals = ['react', ...config.externals]
      }

      config.resolve.alias['rehype-slug'] = require.resolve('rehype-slug')

      return config
    },
  }
}
