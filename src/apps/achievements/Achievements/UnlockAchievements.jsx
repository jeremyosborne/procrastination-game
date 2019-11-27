import Achievement from 'achievements/Achievement'
import {useAppState} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import {notify} from 'achievements/state/notifications'
import React from 'react'

export const UnlockAchievements = () => {
  const {dispatch, state} = useAppState()

  const ACHIEVEMENT_ID = achievements.IDS.UNLOCK_ACHIEVEMENTS
  const achieved = achievements.isAchieved(state, ACHIEVEMENT_ID) || false
  // Cap progress at 1 since we display it.
  const progress = Math.min(1, achievements.unlockAchievementsProgress(state))

  React.useEffect(() => {
    if (achieved) {
      return
    }

    if (progress === 1) {
      dispatch(achievements.achieved(ACHIEVEMENT_ID))
      dispatch(notify('Achievements unlocked! Maybe you can find more achievements?'))
    }
  }, [ACHIEVEMENT_ID, achieved, dispatch, progress])

  return (
    <Achievement.Layout.Card>
      <Achievement.Layout.Content>
        {achieved ? <div>Unlock Achievements unlocked!</div> : <div>Wait for it...</div>}
      </Achievement.Layout.Content>
      <Achievement.Layout.ProgressBar progress={progress} />
    </Achievement.Layout.Card>
  )
}

export default UnlockAchievements
