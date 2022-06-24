import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>yinka</title>
        <meta name="description" content="vibin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <p className={styles.description}>
          get started by following me on twitter  <u><a href="http://twitter.com/geniusyinka" target="_blank" rel="noopener noreferrer">🚀 yinka</a></u>
        </p>

        <div className="flex justify-center items-center">
          <a href="https://mirror.xyz/geniusyinka.eth" 
          target="_blank" rel="noopener noreferrer"
          className={styles.card}>
            <h2>mirror &rarr;</h2>
            <p>i be writin </p>
          </a>

          <a href="https://youtube.com/wilsonoshidipe" 
          target="_blank" rel="noopener noreferrer"
          className={styles.card}>
            <h2>youtube &rarr;</h2>
            <p>i be creatin </p>
          </a>

          <a
            href="https://github.com/yunggenius/yinka.lol"
            className={styles.card}
          >
            <h2>github &rarr;</h2>
            <p>i be codin </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

        Powered by{' '}
        shitpostin

      </footer>
    </div>
  )
}

export default Home
