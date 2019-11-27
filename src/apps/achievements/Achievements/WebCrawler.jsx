import Achievement from 'achievements/Achievement'
import {useAppState} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import React from 'react'

//
// Did you click a link?
//
// This achievement will likely be triggered before the waiting.
//
export const WebCrawler = () => {
  const {state} = useAppState()

  const ACHIEVEMENT_ID = achievements.IDS.WEB_CRAWLER
  // This achievement is either achieved or not and conditions for achievement
  // success is handled in the EventListener since our NotRedux doesn't have
  // middleware.
  const achieved = achievements.isAchieved(state, ACHIEVEMENT_ID)
  const progress = achieved ? 1 : 0

  return (
    <Achievement.Layout.Card>
      <Achievement.Layout.Content>
        {achieved ? <div>Web Crawler unlocked!</div> : <div>What would the web crawler do?</div>}
      </Achievement.Layout.Content>
      <Achievement.Layout.ProgressBar progress={progress} />
    </Achievement.Layout.Card>
  )
}

export default WebCrawler
