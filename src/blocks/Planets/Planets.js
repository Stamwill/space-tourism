import * as React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import classes from './Planets.module.css'

const Planets = React.forwardRef(function Planets(props, ref) {
  const { className, children, api, ...other } = props
  const [currentImg, setCurrentImg] = React.useState(api[0].images.img)
  const [currentMoon, setCurrentMoon] = React.useState('moon')
  const [currentDescription, setCurrentDescription] = React.useState(api[0].description)

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
                    setCurrentDescription(moon.description, setCurrentImg(moon.images.img)),
                  )
                }
              >
                {moon.name}
              </button>
            </div>
          ))}
        </div>
        <h3>{currentMoon}</h3>
        <p>{currentDescription}</p>
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
