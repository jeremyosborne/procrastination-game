import {useAppState} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import * as events from 'achievements/state/events'
import {notify} from 'achievements/state/notifications'
import _ from 'lodash'
import React from 'react'

export const EventListener = () => {
  const {state, dispatch} = useAppState()

  // Isolate the the WebCrawler achievment handling.
  // Also, we are handling this achievement here vs. in the controller vs.
  // lack of middleware.
  React.useEffect(() => {
    const click = (e) => {
      const ACHIEVEMENT_ID = achievements.IDS.WEB_CRAWLER
      const isWebCrawlerCandidate = e.target.getAttribute('data-app') === 'social-link'
      if (isWebCrawlerCandidate) {
        // Have we already achieved web crawler?
        if (!achievements.isAchieved(state, ACHIEVEMENT_ID)) {
          dispatch(achievements.achieved(ACHIEVEMENT_ID))
          dispatch(notify('Yes, that is what the web crawler would do.'))
        }
      }
    }
    window.addEventListener('click', click, false)

    return () => {
      window.removeEventListener('click', click, false)
    }
  }, [state, dispatch])

  React.useEffect(() => {
    const eventMap = {
      click: (e) => dispatch(events.click(e)),
      keydown: (e) => dispatch(events.keyDown(e)),
    }

    _.forEach(eventMap, (eventListener, eventName) => {
      window.addEventListener(eventName, eventListener, false)
    })

    // Ticks need a regular interval.
    const tickIntervalId = setInterval(() => {
      dispatch(events.tick())
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
