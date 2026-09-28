import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const references = [
  { title: "Apple's YouTube channel", url: "https://www.youtube.com/@Apple" },
];

const shoot = [
  "working at a desk / using a computer",
  "natural facial reactions",
  "a few movement / lifestyle shots",
  "close-ups and detail shots",
];

const Casting: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>casting · yinka</title>
        <meta
          name="description"
          content="making a tiny apple-ish commercial. looking for two people to be in it."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <div className="container min-h-screen py-24 mt-16">
        <main className="animate-fade-in">
          <header className="mb-12">
            <Link href="/">
              <a className="text-gray-500 hover:text-white text-sm">
                &larr; back
              </a>
            </Link>
            <h1 className="text-2xl font-medium mt-8 mb-2">
              making a tiny apple-ish commercial.
            </h1>
            <p className="text-gray-400">looking for two people to be in it.</p>
          </header>

          <section className="mb-12 space-y-4 text-gray-400">
            <p>i&apos;m working on a short commercial for a product i&apos;m building.</p>
            <p>
              looking for two actors, one male and one female. the film is mostly
              visual: subtle expressions, natural movement, close-ups, and very
              little dialogue.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              The vibe
            </h2>
            <div className="space-y-4 text-gray-400">
              <p className="text-white">clean. cinematic. understated.</p>
              <p>
                think apple launch / product films. polished, intentional, but
                still human.
              </p>
              <div
                className="relative w-full overflow-hidden rounded-md"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/URwVV5tTJIA"
                  title="reference film"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="space-y-2">
                {references.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <span className="link text-white">{item.title}</span>
                    <span className="text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>
              <p>
                we&apos;re borrowing more from the visual language, performance
                and pacing than trying to copy any particular film.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              The shoot
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>it&apos;s mostly:</p>
              <ul className="space-y-1 list-disc pl-5">
                {shoot.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                professional acting experience helps. being comfortable on
                camera and able to take direction matters just as much.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              Important
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                this is <span className="text-white">not</span> a paid
                opportunity. we&apos;ll cover transport, food + refreshments.
              </p>
              <p>
                if this sounds like your vibe,{" "}
                <a
                  href="https://instagram.com/hiyinka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-medium text-white"
                >
                  shoot me a dm
                </a>{" "}
                and i&apos;ll share more.
              </p>
              <p className="text-white">yinka</p>
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

export default Casting;
