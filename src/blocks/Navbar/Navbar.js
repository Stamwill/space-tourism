import * as React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../public/logos/logo.svg'
import classes from './Navbar.module.css'

const Navbar = React.forwardRef(function Navbar(props, ref) {
  const { className, children, nav, ...other } = props

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div>
        <img src={logo} alt="space logo" />
      </div>

      <nav className={classes.nav}>
        {nav.map((text, idx) => (
          <ul className={classes.navList} key={idx}>
            <li className={classes.link}>
              <span className={classes.num}>{text.home.num}</span>
              {text.home.text}
            </li>
            <li className={classes.link}>
              <span className={classes.num}>{text.destination.num}</span>
              {text.destination.text}
            </li>
            <li className={classes.link}>
              <span className={classes.num}>{text.crew.num}</span>
              {text.crew.text}
            </li>
            <li className={classes.link}>
              <span className={classes.num}>{text.technology.num}</span>
              {text.technology.text}
            </li>
          </ul>
        ))}
      </nav>
    </div>
  )
})

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  nav: PropTypes.array,
}

export default Navbar
