import Head from 'next/head'
import { ProfileTitle } from '../components/ProfileTitle'
import { Stories } from '../components/Stories'
import { PayButton } from '../components/PayButton'
import { Footer } from '../components/Footer'

export default function Store() {
  return (
    <>
      <Head>
        <title>mmednik @ InstaBuy</title>
        <meta name="description" content="Social selling" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stories />
        <ProfileTitle />
        <PayButton />
      </main>
      <Footer />
    </>
  )
}
