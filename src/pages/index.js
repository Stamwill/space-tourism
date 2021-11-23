import * as React from 'react'
import Head from 'next/head'
import { home } from '../api/mock'
import Hero from '../blocks/Hero/Hero'
import Navbar from '../blocks/Navbar/Navbar'
import Crew from '../blocks/Crew/Crew'
import Destination from '../blocks/Destination/Destination'
import Technology from '../blocks/Technology/Technology'
import AppAppBar from '../containers/AppAppBar'
import AppDrawer from '../blocks/Navbar/partials/AppDrawer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism</title>
        <meta name="Space Tourism" content="Welcome to your first space adventure." />
        <link rel="icon" href="/favicon.ico" />
        {/* First font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap"
          rel="stylesheet"
        />
        {/* Second font Barlow Condensed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        {/* <AppAppBar>
          <Navbar nav={nav} open={menuIsOpen} toggleMenu={toggleMenu} />
          <AppDrawer nav={nav} open={menuIsOpen} toggleMenu={toggleMenu} />
        </AppAppBar> */}
        <Hero api={home} />

        {/* <Crew />
        <Destination />
        <Technology /> */}
      </main>
    </div>
  )
}
