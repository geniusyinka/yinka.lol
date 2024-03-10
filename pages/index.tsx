import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import twitter from "../public/twitter.svg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>yinka</title>
        <meta name="description" content="vibin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="links inline">
        <main className={styles.main}>
          <h1 className=" text-5xl">Hi, I'm Yinka</h1>
          <br />
          <p>I enjoy building tools, and simplifying technical materials. </p>
          <br />
          <p>
            I'm a Developer Relations Engineer. <br />
            Currently building the dev community
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="urls"
            >
              <b> @</b>
            </a>
            <br />
            Dev Rel work
            <a
              href="https://twitter.com/developer_DAO"
              target="_blank"
              rel="noopener noreferrer"
              className="urls"
            >
              <b>@Developer DAO</b>
            </a>
            .
            <br />
            I'm also quite curious about Zero Knowledge Proofs, Account Abstraction  & AI. I talk
            about them here:
            <a href="https://www.youtube.com/@geniusyinka">
              <b> Here </b>
            </a>
          </p>

          <div className=" box links items-start">
            <Link href="/thoughts">
              <a rel="noopener noreferrer" className="urls">
                <h2>thoughts &rarr;</h2>
              </a>
            </Link>
            <a
              href="https://youtube.com/@geniusyinka"
              target="_blank"
              rel="noopener noreferrer"
              className="urls"
            >
              <h2>youtube &rarr;</h2>
            </a>

            <a href="https://github.com/yunggenius" className="urls">
              <h2>github &rarr;</h2>
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-oshidipe-28ba7a66/"
              target="_blank"
              rel="noopener noreferrer"
              className="urls"
            >
              <h2>linkedin &rarr;</h2>
            </a>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>Powered by ☕️ </footer>
    </div>
  );
};

export default Home;
