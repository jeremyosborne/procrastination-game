import ACHIEVEMENT_IDS from './achievement-ids'
import {actionAchievementsAchieved, useAppState} from 'AppState'
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
  }, [achieved, ticks])

  React.useEffect(() => {
    if (achieved) {
      return
    }

    if (ticks > ACHIEVEMENT_NUM_TICKS) {
      dispatch(actionAchievementsAchieved(ACHIEVEMENT_IDS.UNLOCK_ACHIEVEMENTS))
    }
  }, [achieved, dispatch, ticks])

  return (
    achieved ?
      <div>
        <div>Unlock Achievements unlocked!</div>
        <div
          style={{
            backgroundColor: 'rgb(121,121,121)',
            height: '0.5em',
            width: `${Math.floor(progress * 100)}%`,
            transition: 'all 0.5s'
          }}
        />
      </div>
      :
      <div>
        <div>Wait for it...</div>
        <div
          style={{
            backgroundColor: 'rgb(121,121,121)',
            height: '0.5em',
            width: `${Math.floor(progress * 100)}%`,
            transition: 'all 0.5s'
          }}
        />
      </div>
  )
}

export default UnlockAchievements
