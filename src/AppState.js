import _ from 'lodash'
import NotRedux from './NotRedux'
import React from 'react'

export const actionClick = (e) => ({
  type: 'click',
  payload: e || {}
})

export const actionKeyDown = (e) => ({
  type: 'keydown',
  payload: {
    code: e.which,
    char: String.fromCharCode(e.which)
  }
})

export const actionTick = (e) => ({
  type: 'tick'
})

export const reducer = (state, action) => {
  switch (action.type) {
    case 'click':
      return {
        ...state,
        clicks: (state.clicks || 0) + 1
      }
    case 'keydown':
      return {
        ...state,
        keydowns: _.takeRight([...(state.keydowns || []), action.payload.char], 15),
      }
    case 'tick':
      return {
        ...state,
        ticks: (state.ticks || 0) + 1
      }
    default:
      return state
  }
}

export const AppState = NotRedux

export const useAppState = () => React.useContext(AppState)

export default AppState