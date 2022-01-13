import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Picture.module.css'

const Picture = React.forwardRef(function Picture(props, ref) {
  const { className, children, api, ...other } = props
  const { mobile, tablet, desktop } = api[0].background

  return (
    <section className={classes.root} ref={ref} {...other}>
      <picture className={classes.imgContainer}>
        <source className={classes.mobile} media="(max-width: 768px)" srcSet={mobile} />
        <source className={classes.tablet} media="(max-width: 1200px)" srcSet={tablet} />
        <img className={classes.desktop} src={desktop} alt="space" />
      </picture>
    </section>
  )
})

Picture.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default Picture
