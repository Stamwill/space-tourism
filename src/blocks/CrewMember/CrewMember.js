import * as React from 'react'
import PropTypes from 'prop-types'
import EmblaCarousel from '../../components/EmblaCarousel'
import PageTracker from '../PageTracker/PageTracker'
import classes from './CrewMember.module.css'

const CrewMember = React.forwardRef(function CrewMember(props, ref) {
  const { className, children, api, ...other } = props

  return (
    <section className={classes.root} ref={ref} {...other}>
      <PageTracker pageNum={`02`} pageLabel={`MEET YOUR CREW`} />
      <EmblaCarousel>
        {api.map((data, idx) => (
          <div className={classes.crew} key={idx}>
            <div className={classes.imgContainer}>
              <img className={classes.crewImg} src={data.images.img} alt="test" />
            </div>

            <div className={classes.line} />

            <div className={classes.textContainer}>
              <h5 className={classes.role}>{data.role}</h5>
              <h4 className={classes.name}>{data.name}</h4>
              <p className={classes.bio}>{data.bio}</p>
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </section>
  )
})

CrewMember.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  api: PropTypes.array,
}

export default CrewMember
