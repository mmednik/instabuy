import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>InstaBuy</title>
        <meta name="description" content="Social selling" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        ProfileTitle
      </header>
      <main className={styles.main}>
        Stories - Story y ProgressBarContainer - Progress Bar
        
        PayButton
      </main>
      <footer>
        InstaBuy
        Button
      </footer>
    </>
  )
}
