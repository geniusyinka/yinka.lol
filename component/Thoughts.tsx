import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import thoughts from '../pages/api/thoughts.json'
import { useState } from 'react'



const Thoughts: NextPage = () => {

  const [blogs, setBlogs] = useState(thoughts.links)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href="/">&larr; back</a>
        {blogs.map((blog, i) => (
          <div className='links flex'>
            <a className='links text-center' key={i} href={blog.url} target="_blank">{blog.title}</a>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Thoughts;