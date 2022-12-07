import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import twitter from '../public/twitter.svg'



const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>yinka</title>
        <meta name="description" content="vibin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <iframe src="https://giphy.com/embed/jKyrErkyJO538B4PwZ" width="480" height="480" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gm-mental-barf-mentalbarf-jKyrErkyJO538B4PwZ">via GIPHY</a></p>
        <br />

        <p>Crypto Native/Developer Relations Engineer. <br />
          Curious about Zero Knowledge Proofs <a href="https://www.youtube.com/@geniusyinka"><b>Here</b></a>.
        </p>

        <p className={styles.description}>
          twttr:  <a className=' font-semibold '
            href="http://twitter.com/geniusyinka"
            target="_blank" rel="noopener noreferrer"> @geniusyinka</a>
        </p>

        <div className=" box flex justify-center items-center">
          {/* <a href="/thoughts"
            rel="noopener noreferrer"
            className={styles.card}>
            <h2>thoughts &rarr;</h2>
          </a> */}

          <Link href='/thoughts'>
            <a
              rel="noopener noreferrer"
              className={styles.card}>
              <h2>thoughts &rarr;</h2>
            </a>
          </Link>

          <a href="https://youtube.com/wilsonoshidipe"
            target="_blank" rel="noopener noreferrer"
            className={styles.card}>
            <h2>youtube &rarr;</h2>
          </a>

          <a
            href="https://github.com/yunggenius/yinka.lol"
            className={styles.card}
          >
            <h2>github &rarr;</h2>
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
