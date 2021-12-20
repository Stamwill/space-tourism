import * as React from 'react'
import PropTypes from 'prop-types'
import PageTracker from '../PageTracker/PageTracker'
import classes from './Tech.module.css'

const Technology = React.forwardRef(function Technology(props, ref) {
  const { className, children, api, ...other } = props

  const numTest = [1, 2, 3]

  const [currentImg, setCurrentImg] = React.useState(api[0].images.img)
  const [currentTitle, setCurrentTitle] = React.useState(api[0].title)
  const [currentDescription, setCurrentDescription] = React.useState(api[0].description)

  return (
    <div className={classes.root} ref={ref} {...other}>
      <PageTracker pageNumber={`03`} pageText={`SPACE LAUNCH 101`} />

      <div className={classes.imgContainer}>
        <img className={classes.img} src={currentImg} alt="spaceImg" />
      </div>

      <div className={classes.buttons}>
        {api.map((data, idx) => (
          <div key={idx}>
            <button
              className={classes.btn}
              type="button"
              onClick={() =>
                setCurrentImg(
                  data.images.img,
                  setCurrentTitle(data.title, setCurrentDescription(data.description)),
                )
              }
            >
              {data.num}
            </button>
          </div>
        ))}
      </div>

      <div className={classes.container}>
        <h4 className={classes.title}>{currentTitle}</h4>
        <p className={classes.description}>{currentDescription}</p>
      </div>
    </div>
  )
})

Technology.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default Technology
