import ACHIEVEMENT_IDS from './achievement-ids'
import Achievement from 'achievements/Achievement'
import {actionAchievementsAchieved, useAppState} from 'achievements/state'
import _ from 'lodash'
import React from 'react'

export const ACHIEVEMENT_CODE = [
  String.fromCharCode(38), // up
  String.fromCharCode(38), // up
  String.fromCharCode(40), // down
  String.fromCharCode(40), // down
  String.fromCharCode(37), // left
  String.fromCharCode(39), // right
  String.fromCharCode(37), // left
  String.fromCharCode(39), // right
  'B',
  'A'
]

// Calculate progress of the string dependent on the longest correct sequence
// of keys from the end of the input keys.
const matches = (a, b) => {
  let matches = 0
  let valid = true
  _.forEach(a, (code, index) => {
    if (!valid) {
      return
    }
    if (code === b[index]) {
      matches += 1
    } else {
      valid = false
    }
  })
  return valid ? matches : false
}

const calcLongestMatch = (a, b) => {
  let longestMatch = 0
  const size = Math.min(a.length, b.length)
  for (let i = size; i > 0; i--) {
    const num = matches(_.take(a, i), _.takeRight(b, i))
    if (num) {
      longestMatch = num
      break
    }
  }
  return longestMatch
}

export const StayinAlive = () => {
  const {dispatch, state} = useAppState()
  const [progress, setProgress] = React.useState(0)

  const achieved = _.get(state, `achievements.${ACHIEVEMENT_IDS.STAYIN_ALIVE}`) || false
  const keys = _.takeRight(_.get(state, 'events.keydowns') || [], ACHIEVEMENT_CODE.length)

  React.useEffect(() => {
    if (achieved) {
      return
    }

    const progress = _.floor(calcLongestMatch(ACHIEVEMENT_CODE, keys) / ACHIEVEMENT_CODE.length, 2)
    setProgress(progress)

    if (progress === 1) {
      dispatch(actionAchievementsAchieved(ACHIEVEMENT_IDS.STAYIN_ALIVE))
    }
  }, [achieved, dispatch, keys])

  return (
    <Achievement.Layout.Card>
      <Achievement.Layout.Content>
        {achieved ? <div>30 Lives!</div> : <div>You know the code...</div>}
      </Achievement.Layout.Content>
      <Achievement.Layout.ProgressBar progress={progress} />
    </Achievement.Layout.Card>
  )
}

export default StayinAlive
