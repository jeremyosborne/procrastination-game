import ACHIEVEMENT_IDS from './achievement-ids'
import Achievement from 'achievements/Achievement'
import {useAppState} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import {notify} from 'achievements/state/notifications'
import _ from 'lodash'
import React from 'react'

export const ACHIEVEMENT_NUM_TICKS = 10

export const UnlockAchievements = () => {
  const {dispatch, state} = useAppState()
  const [progress, setProgress] = React.useState(0)

  const ticks = _.get(state, 'events.ticks') || 0
  const achieved = _.get(state, `achievements.${ACHIEVEMENT_IDS.UNLOCK_ACHIEVEMENTS}`) || false

  React.useEffect(() => {
    if (achieved) {
      return
    }

    // If not yet achieved, set previous progress.
    const updatedProgress = _.floor(ticks / ACHIEVEMENT_NUM_TICKS, 2)
    setProgress(updatedProgress)

    // Bare dependencies is on purpose: run once at mount with the initial state.
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (achieved) {
      return
    }

    const updatedProgress = _.floor(ticks / ACHIEVEMENT_NUM_TICKS, 2)
    setProgress(updatedProgress)
    if (updatedProgress === 1) {
      dispatch(achievements.achieved(ACHIEVEMENT_IDS.UNLOCK_ACHIEVEMENTS))
      dispatch(notify('Achievements unlocked! Go unlock some more achievements.'))
    }
  }, [achieved, dispatch, ticks])

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
