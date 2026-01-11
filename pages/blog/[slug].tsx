import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, Post } from "../../lib/blog";

interface Props {
  post: Post;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPost: NextPage<Props> = ({ post }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>{post.title} — yinka</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container min-h-screen py-24 mt-16">
        <article className="animate-fade-in">
          <header className="mb-12">
            <Link href="/blog">
              <a className="text-gray-500 hover:text-white text-sm">
                &larr; back to blog
              </a>
            </Link>
            <h1 className="text-3xl font-medium mt-8 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <time>{formatDate(post.date)}</time>
              <span>•</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-800 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPost;
