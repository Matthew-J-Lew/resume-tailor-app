/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add or merge this webpack config
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push('pdf-parse')
    }
    return config
  },
}

export default nextConfig
