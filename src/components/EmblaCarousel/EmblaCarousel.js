import * as React from 'react'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaButton from './partials'
import classes from './EmblaCarousel.module.css'

const EmblaCarousel = React.forwardRef(function EmblaCarousel(props, ref) {
  const { children } = props

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  React.useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.viewport} ref={viewportRef}>
        <div className={classes.container}>{children}</div>
        <div className={classes.btn}>
          {scrollSnaps.map((_, index) => (
            <EmblaButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

EmblaCarousel.propTypes = {
  children: PropTypes.node,
}

export default EmblaCarousel
