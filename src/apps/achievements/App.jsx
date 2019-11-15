import Achievements from 'achievements/Achievements'
import Achievement from 'achievements/Achievement'
import {JSONView} from 'common/developer'
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
      <JSONView data={state} />
    </AppState.Provider>
  )
}

export default App
