import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Technology.module.css'

const Technology = React.forwardRef(function Technology(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <h3>TECHNOLOGY</h3>
    </div>
  )
})

Technology.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Technology
