import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>yinka</title>
        <meta name="description" content="developer relations engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container min-h-screen flex flex-col justify-center relative">
        <main className="animate-fade-in">
          <header className="mb-12">
            <h1 className="text-2xl font-medium mb-2">Yinka Oshidipe</h1>
            <p className="text-gray-400">developer relations engineer</p>
          </header>

          <section className="mb-12 space-y-4 text-gray-400">
            <p>
              building developer tooling, simplifying technical materials,
              writing docs, and educating developers.
            </p>
            <p>
              currently at{" "}
              <a
                href="https://twitter.com/nillion"
                target="_blank"
                rel="noopener noreferrer"
                className="link font-medium text-white"
              >
                Nillion
              </a>
              . previously{" "}
              <a
                href="https://twitter.com/developer_DAO"
                target="_blank"
                rel="noopener noreferrer"
                className="link font-medium text-white"
              >
                Developer DAO
              </a>
              .
            </p>
            <p>
              curious about zero knowledge proofs, account abstraction & AI.
            </p>
          </section>

          <nav className="space-y-3">
            <div>
              <Link href="/blog">
                <a className="link">blog</a>
              </Link>
              <span className="text-gray-400 ml-2">— thoughts on tech</span>
            </div>
            <div>
              <Link href="/thoughts">
                <a className="link">links</a>
              </Link>
              <span className="text-gray-400 ml-2">— curated resources</span>
            </div>
            <div>
              <a
                href="https://youtube.com/@geniusyinka"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                youtube
              </a>
              <span className="text-gray-400 ml-2">— video content</span>
            </div>
            <div>
              <a
                href="https://github.com/geniusyinka"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                github
              </a>
              <span className="text-gray-400 ml-2">— open source</span>
            </div>
            <div>
              <a
                href="https://twitter.com/gaboroyinka"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                twitter
              </a>
              <span className="text-gray-400 ml-2">— updates</span>
            </div>
          </nav>
        </main>

        <footer className="absolute bottom-8 left-0 right-0 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
