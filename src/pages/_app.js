import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { nav } from '../api/mock'
import AppAppBar from '../containers/AppAppBar'
import Navbar from '../blocks/Navbar'
import AppDrawer from '../blocks/Navbar/partials/AppDrawer'
import { GlobalProvider } from '../api/GlobalContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <GlobalProvider>
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

      <AppAppBar>
        <Navbar nav={nav} open={menuIsOpen} toggleMenu={toggleMenu} />
        <AppDrawer nav={nav} open={menuIsOpen} toggleMenu={toggleMenu} />
      </AppAppBar>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

MyApp.getInitialProps = async (props) => {
  const { Component, ctx } = props

  let cmsProps = []
  if (ctx.req) {
    cmsProps = nav
  }

  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    cmsProps,
    pageProps,
  }
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default MyApp
