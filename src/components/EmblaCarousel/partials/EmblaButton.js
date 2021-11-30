import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import classes from './EmblaButton.module.css'

const EmblaButton = ({ selected, onClick }) => (
  <button
    className={clsx(classes.button, { [classes.isSelected]: selected })}
    type="button"
    onClick={onClick}
  />
)

EmblaButton.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default EmblaButton
