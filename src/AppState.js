import React from 'react'
import NotRedux from './NotRedux'

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
        [action.payload.which]: (state[action.payload.which] || 0) + 1
      }
    default:
      return state
  }
}

export const AppState = NotRedux

export const useAppState = () => React.useContext(AppState)

export default AppState
