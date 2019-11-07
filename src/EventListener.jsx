import React from 'react'
import _ from 'lodash'
import {useAppState} from './AppState'

export const EventListener = () => {
  const {dispatch} = useAppState()

  React.useEffect(() => {
    const eventMap = {
      click: (e) => dispatch({type: e.type, payload: e}),
      keydown: (e) => dispatch({type: e.type, payload: e}),
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
