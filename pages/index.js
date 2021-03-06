import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Tips</title>
        <meta name="description" content="Tech Tips App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><a href=""><li>Home</li></a></Link>        
          <Link href='/about'><a href=""><li>About</li></a></Link>
          <Link href='/blog'><a href=""><li>Blog</li></a></Link>
          <Link href='/contact'><a href=""><li>Contact</li></a></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tech Tips
        </h1>

        <p className={styles.description}>
          A blog for tech enthusiasts to share their tips and tricks.
        </p>

        <div>
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>Exiting Technologies in 2022</h3>
            <p>The most talkative is Web3.0. It is a successor of Web 2.0</p>
          </div>
          <div className="blogItem">
            <h3>Exiting Technologies in 2022</h3>
            <p>The most talkative is Web3.0. It is a successor of Web 2.0</p>
          </div>
          <div className="blogItem">
            <h3>Exiting Technologies in 2022</h3>
            <p>The most talkative is Web3.0. It is a successor of Web 2.0</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
