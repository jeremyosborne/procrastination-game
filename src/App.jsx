import * as Achievements from 'Achievements'
import {AppState, reducer} from 'AppState'
import DebugStateView from 'DebugStateView'
import Drawer from 'common-components/Drawer'
import EventListener from 'EventListener'
import React from 'react'

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <Drawer />
      <div style={{display: 'flex'}}>
        <Achievements.UnlockAchievements />
        <Achievements.StayinAlive />
      </div>
      <DebugStateView />
    </AppState.Provider>
  )
}

export default App
