import _ from 'lodash'
import NotRedux from 'NotRedux'
import React from 'react'

export const actionAchievementsAchieved = (id) => {
  return {
    type: 'achievements/achieved',
    payload: {
      id,
    },
  }
}

export const achievementsReducer = (state, action) => {
  switch (action.type) {
    case 'achievements/achieved':
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

export const actionClick = (e) => ({
  type: 'events/click',
  payload: e || {}
})

export const actionKeyDown = (e) => ({
  type: 'events/keydown',
  payload: {
    code: e.which,
    char: String.fromCharCode(e.which)
  }
})

export const actionTick = (e) => ({
  type: 'events/tick'
})

export const eventReducer = (state, action) => {
  switch (action.type) {
    case 'events/click':
      return {
        ...state,
        clicks: (state.clicks || 0) + 1
      }
    case 'events/keydown':
      return {
        ...state,
        keydowns: _.takeRight([...(state.keydowns || []), action.payload.char], 15),
      }
    case 'events/reset':
      return {}
    case 'events/tick':
      return {
        ...state,
        ticks: (state.ticks || 0) + 1
      }
    default:
      return state
  }
}

// All sub-state reducers must be added here the way we're rigging this up.
const _reducerRegistry = {
  achievements: achievementsReducer,
  events: eventReducer,
}

export const reducer = (state, action) => {
  // Root reducer specialties
  switch (action.type) {
    case 'reset':
      return {}
    default:
      break
  }

  let subStateChanged = false
  const subStateDiff = {}
  _.forIn(_reducerRegistry, (r, key) => {
    const subState = _.get(state, key) || {}
    const nextSubState = r(subState, action)
    if (nextSubState !== subState) {
      subStateChanged = true
      subStateDiff[key] = nextSubState
    }
  })

  if (subStateChanged) {
    state = {
      ...state,
      ...subStateDiff,
    }
  }

  return state
}

export const AppState = NotRedux

export const useAppState = () => React.useContext(AppState)

export default AppState
