import React from 'react'
import _ from 'lodash'
import NotRedux from './NotRedux'

export const EventListener = () => {
  const {dispatch} = React.useContext(NotRedux)

  React.useEffect(() => {
    const eventMap = {
      click: (e) => dispatch(e),
      keydown: (e) => dispatch(e),
    }

    _.forEach(eventMap, (eventListener, eventName) => {
      window.addEventListener(eventName, eventListener, false)
    })

    // Specify how to clean up after this effect:
    return () => {
      _.forEach(eventMap, (eventListener, eventName) => {
        window.removeEventListener(eventName, eventListener, false)
      })
    }
  }, [dispatch]) // Only run on mount and dismount.

  return (
    <div />
  )
}

export default EventListener
