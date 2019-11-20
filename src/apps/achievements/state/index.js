import * as achievements from './achievements'
import * as events from './events'
import {NotRedux} from 'common/not-redux'
import _ from 'lodash'
import React from 'react'

// All sub-state reducers must be added here the way we're rigging this up.
const _reducerRegistry = {
  [achievements.REDUCER_KEY]: achievements.reducer,
  [events.REDUCER_KEY]: events.reducer,
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

// Stick with the redux "ducks" pattern and export the reducer as default.
export default reducer

export const AppState = NotRedux

export const useAppState = () => React.useContext(AppState)
