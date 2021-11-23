import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Destination.module.css'

const Destination = React.forwardRef(function Destination(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      {/* planets, Title, description, distance, time */}

      <img src="" alt="planet" />

      <ul className={classes.planetList}>
        <li className={classes.planet}>planet 1</li>
        <li className={classes.planet}>planet 2</li>
        <li className={classes.planet}>planet 3</li>
        <li className={classes.planet}>planet 4</li>
      </ul>

      <h1 className={classes.title}>Planet</h1>
      <p className={classes.description}>Description</p>

      <hr />
      <div>
        <div className={classes.distanceContainer}>
          <p className={classes.distance}>Distance</p>
          <p className={classes.distanceKm}>384,400KM</p>
        </div>

        <div className={classes.timeContainer}>
          <p className={classes.time}>Time</p>
          <p className={classes.days}>3 days</p>
        </div>
      </div>
    </div>
  )
})

Destination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Destination
