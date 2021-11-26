import * as React from 'react'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import classes from './EmblaCarousel.module.css'

const EmblaCarousel = React.forwardRef(function EmblaCarousel(props, ref) {
  const { className, children, ...other } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.viewport} ref={emblaRef}>
        <div className={classes.container}>
          {children}
          {/* <div className={classes.slide}>Slide 1</div>
          <div className={classes.slide}>Slide 2</div>
          <div className={classes.slide}>Slide 3</div> */}
        </div>
        <button className={classes.prev} type="button" onClick={scrollPrev}>
          prev
        </button>
        <button className={classes.next} type="button" onClick={scrollNext}>
          next
        </button>
      </div>
    </div>
  )
})

EmblaCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default EmblaCarousel
