import * as Achievements from 'Achievements'
import {AppState, reducer} from 'AppState'
import DebugStateView from 'DebugStateView'
import AchievementDrawer from 'common-components/AchievementDrawer'
import EventListener from 'EventListener'
import React from 'react'

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <AchievementDrawer>
        <Achievements.UnlockAchievements />
        <Achievements.StayinAlive />
      </AchievementDrawer>
      <DebugStateView />
    </AppState.Provider>
  )
}

export default App
