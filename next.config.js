/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/zk',
        destination: 'https://www.youtube.com/@geniusyinka',
        permanent: true,
      },
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1xWtD9bbFHIK3YZhGJnCbi2mw7OPCUPqT/view?usp=sharing',
        permanent: true
      },
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1ilnDM34Lo49wSx1U8bV2p1aEWvP_0lHf/view',
        permanent: true
      },
      {
        source: '/blog',
        destination: 'https://yunggenius.hashnode.dev',
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
      {
        source: '/why-zkps-work',
        destination: 'https://yunggenius.hashnode.dev/why-zkps-work',
        permanent: true,
      },
      {
        source: '/build-youtube-downloader',
        destination: 'https://yunggenius.hashnode.dev/how-to-build-a-youtube-mp3-downloader-with-ytdl-core',
        permanent: true,
      },
      {
        source: '/spruce-ssx-integration',
        destination: 'https://yunggenius.hashnode.dev/setting-up-spruceid-ssx-integration-into-an-existing-dapp',
        permanent: true,
      },
      {
        source: '/huggingface-react-native',
        destination: 'https://yunggenius.hashnode.dev/build-react-native-apps-with-hugging-face-ai-models',
        permanent: true,
      },
      {
        source: '/solidity-subscription-service',
        destination: 'https://yunggenius.hashnode.dev/building-a-subscription-service-in-solidity',
        permanent: true, 
      }
    ]
  },
}