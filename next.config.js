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
      {
        source: '/send-ether-from-smart-contract',
        destination: 'https://yunggenius.hashnode.dev/how-to-send-ether-from-one-smart-contract-to-another-contract',
        permanent: true,
      },
      {
        source: '/deploy-smart-contract-scroll-io',
        destination: 'https://yunggenius.hashnode.dev/how-to-deploy-an-existing-smart-contract-to-scrollio-testnet',
        permanent: true,
      },
    ]
  },
}