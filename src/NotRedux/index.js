import React from 'react'

export const notReduxState = {
  key: 'something something something in the month of may',
}

export const NotRedux = React.createContext({
  state: notReduxState,
  dispatch: () => console.warn('non-initialized dispatch being called')
})

export default NotRedux
