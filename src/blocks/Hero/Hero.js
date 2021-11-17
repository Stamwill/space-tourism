import * as React from 'react'
import PropTypes from 'prop-types'
import background from '../../../starter-code/assets/home/background-home-desktop.jpg'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { className, children, ...other } = props
  return (
    <div className={classes.root} ref={ref} {...other}>
      <img src={background} alt="space" />
      <h1>Hero</h1>
    </div>
  )
})

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Hero
