import Head from 'next/head'
import { Footer } from '../components/Footer'
import styles from '../styles/Store.module.css'

export default function Store() {
  return (
    <>
      <Head>
        <title>mmednik @ InstaBuy</title>
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
      <Footer />
    </>
  )
}
