import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Planets.module.css'

const Planets = React.forwardRef(function Planets(props, ref) {
  const { className, children, api, ...other } = props
  const [currentImg, setCurrentImg] = React.useState(api[0].images.img)
  const [currentMoon, setCurrentMoon] = React.useState('moon')
  const [currentDescription, setCurrentDescription] = React.useState(api[0].description)
  const [currentDistance, setCurrentDistance] = React.useState(api[0].distance)
  const [currentTravel, setCurrentTravel] = React.useState(api[0].travel)

  return (
    <div className={classes.root} ref={ref} {...other}>
      <img className={classes.img} src={currentImg} alt="test" />
      <div className={classes.container}>
        <div className={classes.buttons}>
          {api.map((moon, idx) => (
            <div key={idx}>
              <button
                className={classes.button}
                type="button"
                onClick={() =>
                  setCurrentMoon(
                    moon.name,
                    setCurrentDescription(
                      moon.description,
                      setCurrentImg(
                        moon.images.img,
                        setCurrentDistance(moon.distance, setCurrentTravel(moon.travel)),
                      ),
                    ),
                  )
                }
              >
                {moon.name}
              </button>
            </div>
          ))}
        </div>
        <div className={classes.textContainer}>
          <h3>{currentMoon}</h3>
          <p className={classes.description}>{currentDescription}</p>
          <div className={classes.line} />
        </div>

        <div className={classes.test}>
          <h5 className={classes.distanceHeader}>AVG. DISTANCE</h5>
          <p className={classes.distance}>{currentDistance}</p>
          <h5 className={classes.distanceHeader}>EST. TRAVEL TIME</h5>
          <p className={classes.distance}>{currentTravel}</p>
        </div>
      </div>
    </div>
  )
})

Planets.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default Planets
