import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import thoughts from '../pages/api/thoughts.json'
import { useState } from 'react'



const Thoughts: NextPage = () => {

  const [tech, setTech] = useState(thoughts.tech.links)
  const [community, setComm] = useState(thoughts.community.links)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href="/">&larr; back</a>
        <div className='links'>
          <p className=' text-black text-left'>tech</p>
          {tech.map((tech, i) => (
            <a className='urls' key={i} href={tech.url} target="_blank">{tech.title} &rarr;</a>
          ))}

          <br />
          <br />
          <br />

          <p className=' text-black text-left'>community</p>
          {community.map((community, i) => (
            <a className='urls' key={i} href={community.url} target="_blank">{community.title} &rarr;</a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Thoughts;