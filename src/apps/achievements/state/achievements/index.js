// @flow
import {ticks} from '../events'
import _ from 'lodash'

export const REDUCER_KEY = 'achievements'

export const IDS = {
  STAYIN_ALIVE: 'stayin-alive',
  UNLOCK_ACHIEVEMENTS: 'unlock-achievements',
  WEB_CRAWLER: 'web-crawler',
}

export const ACHIEVEMENTS_ACHIEVED = 'jo/achievements/achieved'
export const achieved = (id: string) => {
  return {
    type: ACHIEVEMENTS_ACHIEVED,
    payload: {
      id,
    },
  }
}

export const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case ACHIEVEMENTS_ACHIEVED:
      return {
        ...state,
        [action.payload.id]: {
          when: Date.now(),
        }
      }
    default:
      return state
  }
}

export default reducer

//
// Selectors
//

/**
 * Whether a particular achievement been reported as having been completed or
 * not.
 *
 * `id` can be the actual achievement id or can be a key look up into the
 * achievements `IDS` structure.
 */
export const isAchieved = (state: any, id: string): boolean => !!_.get(state, `${REDUCER_KEY}.${IDS[id] || id}`)

//
// Unlocking the achievements makes other achievements available and visible.
// Provide extra helpers for other parts of the app that need to check on the
// status of unlocked achievements.
//
// How many ticks before the achievements are officially unlocked?
export const UNLOCK_ACHIEVEMENT_REQUIRED_TICKS = 7
//
// 0 not done, 1 done, anything in between progress.
export const unlockAchievementsProgress = (state: any): number => _.floor(ticks(state) / UNLOCK_ACHIEVEMENT_REQUIRED_TICKS, 2)
