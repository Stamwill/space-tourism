import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './ExploreLink.module.css'

const ExploreLink = React.forwardRef(function ExploreLink(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <a className={classes.link} href="/destination">
        Explore
      </a>
    </div>
  )
})

ExploreLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ExploreLink
