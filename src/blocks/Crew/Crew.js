import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Crew.module.css'

const Crew = React.forwardRef(function Crew(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      {/* title, name, description, img */}
      <img src="" alt="crew member" />
      <h3 className={classes.title}>Title</h3>
      <h2 className={classes.name}>Name</h2>
      <p className={classes.description}>Description</p>
    </div>
  )
})

Crew.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Crew
