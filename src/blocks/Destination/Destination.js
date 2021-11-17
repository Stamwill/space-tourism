import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Destination.module.css'

const Destination = React.forwardRef(function Destination(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <h2>DESTINATION</h2>
    </div>
  )
})

Destination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Destination
