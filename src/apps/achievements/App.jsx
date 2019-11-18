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
      <Achievement.Drawer>
        <Achievements.UnlockAchievements />
        <Achievements.StayinAlive />
      </Achievement.Drawer>
      {
        process.env.NODE_ENV === 'development' ?
          <AppStateView />
          :
          null
      }
    </AppState.Provider>
  )
}

export default App
