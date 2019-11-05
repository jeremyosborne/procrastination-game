import React from 'react'

export const notReduxState = {
  key: 'something something something in the month of may',
}

export const notReduxReducer = function reducer (state, action) {
  switch (action.type) {
    case 'click':
      return {
        ...state,
        clicks: (state.clicks || 0) + 1
      }
    case 'keydown':
      return {
        ...state,
        [action.which]: (state[action.which] || 0) + 1
      }
    default:
      return state
  }
}

export const NotRedux = React.createContext({
  state: notReduxState,
  dispatch: () => console.warn('non-initialized dispatch being called')
})

export default NotRedux
