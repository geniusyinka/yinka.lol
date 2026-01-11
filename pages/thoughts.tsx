import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import thoughts from "./api/thoughts.json";

const Thoughts: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>links — yinka</title>
        <meta name="description" content="curated resources and links" />
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
            <h1 className="text-2xl font-medium mt-8 mb-2">Links</h1>
            <p className="text-gray-500">curated resources</p>
          </header>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              Tech
            </h2>
            <div className="space-y-4">
              {thoughts.tech.links.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <span className="link">{item.title}</span>
                  <span className="text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              Community
            </h2>
            <div className="space-y-4">
              {thoughts.community.links.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <span className="link">{item.title}</span>
                  <span className="text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-auto pt-16 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default Thoughts;
