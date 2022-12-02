/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/zk',
        destination: 'https://www.youtube.com/@geniusyinka',
        permanent: true,
      },
    ]
  },
}