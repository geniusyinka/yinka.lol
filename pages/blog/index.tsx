import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts, PostMeta } from "../../lib/blog";

interface ExternalPost {
  title: string;
  description: string;
  date: string;
  url: string;
  tags: string[];
}

interface Props {
  localPosts: PostMeta[];
}

// External posts (linked to Hashnode/Medium)
const externalPosts: ExternalPost[] = [
  {
    title: "Building a Subscription Service in Solidity",
    description: "Learn how to create a subscription-based smart contract with recurring payments",
    date: "2024-03-15",
    url: "https://yunggenius.hashnode.dev/building-a-subscription-service-in-solidity",
    tags: ["solidity", "web3"],
  },
  {
    title: "Build React Native Apps with Hugging Face AI Models",
    description: "Integrate AI/ML models from Hugging Face into your React Native applications",
    date: "2024-02-28",
    url: "https://yunggenius.hashnode.dev/build-react-native-apps-with-hugging-face-ai-models",
    tags: ["react-native", "ai"],
  },
  {
    title: "How to Deploy Smart Contracts to Scroll.io Testnet",
    description: "Step-by-step guide to deploying contracts on Scroll L2",
    date: "2024-02-10",
    url: "https://yunggenius.hashnode.dev/how-to-deploy-an-existing-smart-contract-to-scrollio-testnet",
    tags: ["solidity", "l2"],
  },
  {
    title: "Send Ether From One Smart Contract to Another",
    description: "Understanding inter-contract value transfers in Solidity",
    date: "2024-01-20",
    url: "https://yunggenius.hashnode.dev/how-to-send-ether-from-one-smart-contract-to-another-contract",
    tags: ["solidity", "web3"],
  },
  {
    title: "Build a YouTube MP3 Downloader with ytdl-core",
    description: "Create a Node.js tool to download audio from YouTube videos",
    date: "2023-12-05",
    url: "https://yunggenius.hashnode.dev/how-to-build-a-youtube-mp3-downloader-with-ytdl-core",
    tags: ["node", "javascript"],
  },
  {
    title: "Using .reduce() to Find Min and Max Values",
    description: "Mastering JavaScript array methods for efficient data processing",
    date: "2023-11-12",
    url: "https://yunggenius.hashnode.dev/using-the-reduce-method-to-find-min-and-max-values-of-an-array-in-javascript",
    tags: ["javascript"],
  },
  {
    title: "Fix 419 Postman Error in Laravel API",
    description: "Troubleshooting CSRF token issues in Laravel API requests",
    date: "2023-10-08",
    url: "https://yunggenius.hashnode.dev/how-to-fix-419-postman-error-laravel-api-request",
    tags: ["laravel", "api"],
  },
  {
    title: "Mint Your Own High-Res Cryptopunk Off-Chain",
    description: "Generate 24x24 pixel art NFTs programmatically",
    date: "2023-09-01",
    url: "https://medium.com/@yinkaaaaaa/how-to-mint-your-own-24-x-24-high-res-crypto-punk-off-chain-c6ed6b93af65",
    tags: ["nft", "web3"],
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const Blog: NextPage<Props> = ({ localPosts }) => {
  // Combine and sort all posts by date
  const allPosts = [
    ...localPosts.map((p) => ({ ...p, isLocal: true, url: `/blog/${p.slug}` })),
    ...externalPosts.map((p) => ({ ...p, isLocal: false, slug: "" })),
  ].sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>blog — yinka</title>
        <meta name="description" content="thoughts on tech and development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container min-h-screen py-24 mt-16">
        <main className="animate-fade-in">
          <header className="mb-12">
            <Link href="/">
              <a className="text-gray-500 hover:text-white text-sm">
                &larr; back
              </a>
            </Link>
            <h1 className="text-2xl font-medium mt-8 mb-2">Blog</h1>
            <p className="text-gray-500">thoughts on tech</p>
          </header>

          <section>
            <div className="space-y-8">
              {allPosts.map((post, i) =>
                post.isLocal ? (
                  <article key={i} className="group">
                    <Link href={post.url}>
                      <a className="block">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h2 className="font-medium link">{post.title}</h2>
                          <span className="text-gray-500 text-sm whitespace-nowrap">
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">
                          {post.description}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 border border-gray-800 px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </a>
                    </Link>
                  </article>
                ) : (
                  <article key={i} className="group">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="font-medium link">{post.title}</h2>
                        <span className="text-gray-500 text-sm whitespace-nowrap">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">
                        {post.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 border border-gray-800 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  </article>
                )
              )}
            </div>
          </section>
        </main>

        <footer className="mt-auto pt-16 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const localPosts = getAllPosts();

  return {
    props: {
      localPosts,
    },
  };
};

export default Blog;
