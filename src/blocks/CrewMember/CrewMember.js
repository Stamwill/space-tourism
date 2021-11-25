import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './CrewMember.module.css'

const CrewMember = React.forwardRef(function CrewMember(props, ref) {
  const { className, children, api, ...other } = props
  const [currentImg, setCurrentImg] = React.useState(api[0].images.img)
  const [crewBio, setCrewBio] = React.useState(api[0].bio)
  // const [currentMember, setCurrentMember] = React.useState('moon')
  // const [currentDistance, setCurrentDistance] = React.useState(api[0].distance)
  // const [currentTravel, setCurrentTravel] = React.useState(api[0].travel)

  return (
    <div className={classes.root} ref={ref} {...other}>
      <img className={classes.crewImg} src={currentImg} alt="test" />
      <div className={classes.line} />

      <p className={classes.bio}>{crewBio}</p>
    </div>
  )
})

CrewMember.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default CrewMember
