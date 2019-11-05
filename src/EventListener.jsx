import React, {useEffect} from 'react'
import _ from 'lodash'

export const EventListener = () => {
  useEffect(() => {
    const eventMap = {
      click: (e) => console.log('click:', e.which),
      keydown: (e) => console.log('keydown:', e.which),
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
  })

  return (
    <div />
  )
}

export default EventListener
