import * as React from 'react'
import PropTypes from 'prop-types'

const GlobalContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  GlobalContext.displayName = 'GlobalContext'
}

export function useGlobal() {
  return React.useContext(GlobalContext)
}

export function GlobalProvider(props) {
  const { children, menu } = props

  const { current: contextValue } = React.useRef({
    menu,
  })

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.array,
}

export default GlobalContext
