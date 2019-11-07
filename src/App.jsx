import {AppState, reducer} from 'AppState'
import DebugStateView from 'DebugStateView'
import AchievementUnlockAchievements from 'AchievementUnlockAchievements'
import EventListener from 'EventListener'
import React from 'react'

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <AchievementUnlockAchievements />
      <DebugStateView />
    </AppState.Provider>
  )
}

export default App
