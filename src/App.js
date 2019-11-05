import React from 'react'
import DummyContent from './DummyContent'
import EventListener from './EventListener'
import {NotRedux, notReduxState, notReduxReducer} from './NotRedux'

export const App = () => {
  const [state, dispatch] = React.useReducer(notReduxReducer, notReduxState)

  return (
    <NotRedux.Provider value={{state, dispatch}}>
      <EventListener />
      <DummyContent />
    </NotRedux.Provider>
  )
}

export default App
