import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './PageTracker.module.css'

const PageTracker = React.forwardRef(function PageTracker(props, ref) {
  const { className, children, pageNumber, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <span className={classes.num}>{pageNumber}</span>
      <h5 className={classes.text}>Test</h5>
    </div>
  )
})

PageTracker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  pageNumber: PropTypes.string,
}

export default PageTracker
