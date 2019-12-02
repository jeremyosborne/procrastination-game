import Achievement from 'achievements/Achievement'
import {useAppState} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import {notify} from 'achievements/state/notifications'
import _ from 'lodash'
import React from 'react'

// Work for this one, sort of ;)
export const NUM_CLICKS_FOR_THAT_COOKIE = 200

export const ClickingForCookies = () => {
  const {dispatch, state} = useAppState()
  const ACHIEVEMENT_ID = achievements.IDS.CLICKING_FOR_COOKIES

  const achieved = achievements.isAchieved(state, ACHIEVEMENT_ID)
  const clicks = _.get(state, 'events.clicks') || 0
  const progress = _.floor(clicks / NUM_CLICKS_FOR_THAT_COOKIE, 2)

  React.useEffect(() => {
    if (achieved) {
      return
    }

    if (progress >= 1) {
      dispatch(achievements.achieved(ACHIEVEMENT_ID))
      dispatch(notify('Achievement unlocked: Clicking for Cookies! (Have a cookie, you deserve it.)'))
    }
  }, [ACHIEVEMENT_ID, achieved, dispatch, progress])

  return (
    <Achievement.Layout.Card>
      <Achievement.Layout.Content>
        {
          achieved ?
            <div>Clicking for Cookies unlocked! (And this one doesn't need a banner.)</div>
            :
            <div>Cookies aren't just for eating or tracking...{progress >= 0.3 ? ' I believe in you!' : ''} {progress >= 0.7 ? ' Almost there!' : ''}</div>
        }
      </Achievement.Layout.Content>
      <Achievement.Layout.ProgressBar progress={progress} />
    </Achievement.Layout.Card>
  )
}

export default ClickingForCookies
