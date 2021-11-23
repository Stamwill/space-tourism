import * as React from 'react'
import PropTypes from 'prop-types'
import { homeBg } from '../../api/mock'
import Picture from '../../components/Picture/Picture'
import ExploreLink from '../../components/ExploreLink'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { className, children, api, ...other } = props

  return (
    <div className={classes.root} ref={ref} {...other}>
      <Picture api={homeBg} />

      {api.map((data, idx) => (
        <div className={classes.text} key={idx}>
          <h5 className={classes.subTitle}>{data.subTitle}</h5>
          <h1 className={classes.title}>{data.title}</h1>
          <p className={classes.description}>{data.description}</p>
        </div>
      ))}

      <ExploreLink />
    </div>
  )
})

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default Hero
