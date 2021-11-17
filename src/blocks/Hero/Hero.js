import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { className, children, api, ...other } = props

  console.log(api)
  return (
    <div className={classes.root} ref={ref} {...other}>
      {api.map((data, idx) => (
        <div key={idx}>
          <h5>{data.subTitle}</h5>
          <img src={data.images.desktop} alt="space" />
        </div>
      ))}
    </div>
  )
})

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default Hero
