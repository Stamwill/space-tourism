import * as React from 'react'
import classnames from 'clsx'
import Link from 'next/link'
import PropTypes from 'prop-types'
import classes from './AppDrawer.module.css'

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const { className, open, toggleMenu, nav, ...other } = props

  React.useEffect(() => {
    const toggleScroll = (state) => {
      if (typeof window !== undefined) {
        const body = document.body

        body.style.overflow = state
      }
    }

    if (open) {
      toggleScroll('hidden')
    } else {
      toggleScroll('visible')
    }
  })

  return (
    <div
      className={classnames(classes.root, { [classes.menuIsOpen]: open }, className)}
      ref={ref}
      {...other}
    >
      <div className={classes.navBar}>
        {nav.map((link, id) => (
          <Link href="passHref" key={id}>
            <a className={classes.link} key={id} href={link.href} onClick={toggleMenu}>
              <span className={classes.num}>{link.num}</span>
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
})

AppDrawer.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
  nav: PropTypes.array,
}

export default AppDrawer
