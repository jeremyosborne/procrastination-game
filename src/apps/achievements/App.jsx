import Achievements from 'achievements/Achievements'
import Achievement from 'achievements/Achievement'
import AppStateView from 'achievements/AppStateView'
import EventListener from 'achievements/EventListener'
import {AppState, reducer} from 'achievements/state'
import React from 'react'

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <Achievement.Drawer style={{position: 'fixed', bottom: 0, left: 0}}>
        <Achievements.UnlockAchievements />
        <Achievements.StayinAlive />
      </Achievement.Drawer>
      <AppStateView />
    </AppState.Provider>
  )
}

export default App
