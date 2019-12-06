import * as achievements from './achievements'
import * as events from './events'
import * as notifications from './notifications'
import {NotRedux} from 'common/not-redux'
import _ from 'lodash'
import React from 'react'

// All sub-state reducers must be added here.
const _reducerRegistry = {
  [achievements.REDUCER_KEY]: achievements.reducer,
  [events.REDUCER_KEY]: events.reducer,
  [notifications.REDUCER_KEY]: notifications.reducer,
}

export const reducer = (state, action) => {
  // Root reducer specialties
  switch (action.type) {
    case 'reset':
      return {}
    case 'set':
      return state.payload
    default:
      break
  }

  let subStateChanged = false
  const subStateDiff = {}
  _.forIn(_reducerRegistry, (r, key) => {
    const subState = _.get(state, key) // || undefined as states can be more than objects
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

export default reducer

export const AppState = NotRedux

export const useAppState = () => React.useContext(AppState)
