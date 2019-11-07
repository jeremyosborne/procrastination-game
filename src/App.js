import React from 'react'
import DummyContent from './DummyContent'
import EventListener from './EventListener'
import {AppState, reducer} from './AppState'

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <DummyContent />
    </AppState.Provider>
  )
}

export default App
