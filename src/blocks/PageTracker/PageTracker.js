import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './PageTracker.module.css'

const PageTracker = React.forwardRef(function PageTracker(props, ref) {
  const { className, children, pageNum, pageLabel, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <span className={classes.num}>{pageNum}</span>
      <h5 className={classes.text}>{pageLabel}</h5>
    </div>
  )
})

PageTracker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  pageNum: PropTypes.string,
  pageLabel: PropTypes.string,
}

export default PageTracker
