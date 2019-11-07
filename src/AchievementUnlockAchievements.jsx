import {actionAchievementsAchieved, useAppState} from './AppState'
import _ from 'lodash'
import React from 'react'

export const AchievementUnlockAchievements = () => {
  const {dispatch, state} = useAppState()
  const [achieved, setAchieved] = React.useState(false)

  React.useEffect(() => {
    const ticks = _.get(state, 'events.ticks') || 0
    const previouslyAchieved = _.get(state, 'achievements.dummy') || false

    if (achieved) {
      return
    } else if (previouslyAchieved && !achieved) {
      // catch up to some stored state.
      setAchieved(true)
      return
    }

    if (ticks > 10 && !previouslyAchieved) {
      setAchieved(true)
      dispatch(actionAchievementsAchieved('dummy'))
    }
  }, [achieved, dispatch, state])

  return (
    achieved
      ? <div>Unlock Achievements unlocked!</div>
      : <div>Wait for it...</div>
  )
}

export default AchievementUnlockAchievements
