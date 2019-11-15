import {
  actionClick,
  actionKeyDown,
  actionTick,
  useAppState,
} from 'achievements/state'
import _ from 'lodash'
import React from 'react'

export const EventListener = () => {
  const {dispatch} = useAppState()

  React.useEffect(() => {
    const eventMap = {
      click: (e) => dispatch(actionClick(e)),
      keydown: (e) => dispatch(actionKeyDown(e)),
    }

    _.forEach(eventMap, (eventListener, eventName) => {
      window.addEventListener(eventName, eventListener, false)
    })

    // Ticks need a regular interval.
    const tickIntervalId = setInterval(() => {
      dispatch(actionTick())
    }, 1000)

    // Specify how to clean up after this effect:
    return () => {
      _.forEach(eventMap, (eventListener, eventName) => {
        window.removeEventListener(eventName, eventListener, false)
      })
      clearInterval(tickIntervalId)
    }
  }, [dispatch]) // Only run on mount and dismount.

  return (
    <div />
  )
}

export default EventListener
