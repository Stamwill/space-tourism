import * as React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import logo from '../../../public/logos/logo.svg'
import Hamburger from '../../components/Hamburger'
import classes from './Navbar.module.css'

const Navbar = React.forwardRef(function Navbar(props, ref) {
  const { className, children, nav, open, toggleMenu, ...other } = props

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.logo}>
        <img src={logo.src} alt="space logo" />
      </div>

      <div className={classes.line} />

      <Hamburger open={open} toggleMenu={toggleMenu} />
      <nav className={classes.nav}>
        {nav.map((link, idx) => (
          <Link className={classes.navList} href="passHref" key={idx}>
            <a className={classes.link} href={link.href}>
              <span className={classes.num}>{link.num}</span>
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
})

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  nav: PropTypes.array,
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default Navbar
