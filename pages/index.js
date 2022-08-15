import Head from 'next/head'
import Image from 'next/image'
import SideNav from '../components/SideNav'

import Navbar from '../Shared/NavItem'
import Search from '../components/Search'
import Settings from '../components/Settings'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gmail</title>
        <meta name="description" content="Gmail Clone" />
        <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
      </Head>

      <main className={styles.main}>
        <Search/>
        <Settings/>
        <SideNav />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
