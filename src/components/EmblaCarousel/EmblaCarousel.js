import * as React from 'react'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { crew as api } from '../../api/mock'
import classes from './EmblaCarousel.module.css'

const EmblaCarousel = React.forwardRef(function EmblaCarousel(props, ref) {
  const { className, children, ...other } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    console.log('clicked')
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    console.log('clicked')
  }, [emblaApi])

  console.log(emblaApi)

  return (
    <div className={classes.root} ref={ref} {...other}>
      <div className={classes.viewport} ref={emblaRef}>
        <div className={classes.container}>
          {children}
          {/* <div className={classes.slide}>Slide 1</div>
          <div className={classes.slide}>Slide 2</div>
          <div className={classes.slide}>Slide 3</div> */}
        </div>
        <span className={classes.prev} onClick={scrollPrev} />
        <span className={classes.next} type="button" onClick={scrollNext} />
      </div>
    </div>
  )
})

EmblaCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default EmblaCarousel
