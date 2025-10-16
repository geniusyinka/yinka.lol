import React from "react";
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
          <p>i enjoy building developer tooling, simplifying technical materials, writing docs, and educating developers. </p>
          <br />
          <p>
            currently Developer Relations Engineer, Content Manager
            <a
              href="https://twitter.com/nillionnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="urls"
            >
              <b> @nillionnetwork</b>
            </a>
            <br />
            devrel stuff
            <a
              href="https://twitter.com/developer_DAO"
              target="_blank"
              rel="noopener noreferrer"
              className="urls"
            >
              <b> @Developer DAO</b>
            </a>
            .
            <br />
            i'm also quite curious about Zero Knowledge Proofs, Account Abstraction  & Artificial Intelligence. <br/> I talk
            about them
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

            <a href="https://github.com/geniusyinka" className="urls">
              <h2>github &rarr;</h2>
            </a>
            <a
              href="https://www.linkedin.com/in/olayinka-oshidipe-28ba7a66/"
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
