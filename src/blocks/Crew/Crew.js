import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Crew.module.css'

const Crew = React.forwardRef(function Crew(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <h1>CREW</h1>
    </div>
  )
})

Crew.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Crew
