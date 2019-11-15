import React from 'react'

export const notReduxState = {
  key: 'something something something in the month of may',
}

export const NotRedux = React.createContext({
  state: notReduxState,
  dispatch: () => console.warn('non-initialized dispatch being called')
})

// By default export the context, which is what people want.
// Not a horrid expectation given `import React from 'react'`.
export default NotRedux
